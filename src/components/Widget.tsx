import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
    Router,
    RouterProvider,
    createRoute,
    createRootRoute,
    Outlet
} from '@tanstack/react-router';

// Import CSS for styling
import '../index.css';  // Import the main CSS with Tailwind
import './Widget.css';  // Import component-specific CSS

// Import page components from barrel file
import { HomePage, DetailsPage } from '../pages';

export interface WidgetProps {
    /** The unique identifier for this widget instance */
    instanceId: string;
    /** Initial data to pass to the widget */
    initialData?: Record<string, unknown>;
    /** Custom theme settings */
    theme?: {
        primaryColor?: string;
        secondaryColor?: string;
        fontFamily?: string;
    };
}

// Create a function to get a fresh QueryClient for each widget instance
const createQueryClient = () => new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            refetchOnWindowFocus: false,
        },
    },
});

// Define the root route
const rootRoute = createRootRoute({
    component: () => (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <div className="w-full">
                {/* Router outlet - This is the official TanStack Router's Outlet */}
                <Outlet />
            </div>
        </div>
    ),
});

// Define child routes
const homeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: HomePage,
});

// Define details route with search params validation
const detailsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/details',
    component: DetailsPage,
    validateSearch: (search) => {
        // Convert id to number if it exists, otherwise undefined
        return {
            id: search.id ? Number(search.id) : undefined,
        };
    },
});

// Create the route tree
const routeTree = rootRoute.addChildren([
    homeRoute,
    detailsRoute,
]);

// Create the router
const router = new Router({
    routeTree,
    defaultPreload: 'intent',
    defaultPendingComponent: () => (
        <div className="flex justify-center items-center p-8 text-gray-500">
            <div className="animate-pulse">Loading router...</div>
        </div>
    ),
    defaultPendingMinMs: 300,
});

export const Widget: React.FC<WidgetProps> = ({
    instanceId,
    initialData = {},
    theme = {},
}) => {
    // Create a new QueryClient instance for each widget instance
    const [queryClient] = React.useState(() => createQueryClient());

    // Pass initial data to the widget context if needed
    React.useEffect(() => {
        if (Object.keys(initialData).length > 0) {
            console.log('Widget initialized with data:', initialData);
            // You could set this in a context provider if needed
        }
    }, [initialData]);

    // Create custom styles based on theme props
    const customStyles = {
        '--primary-color': theme.primaryColor || '#3498db',
        '--secondary-color': theme.secondaryColor || '#2ecc71',
        '--font-family': theme.fontFamily || 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    } as React.CSSProperties;

    // Determine if this is a custom themed widget
    const themeClassName = Object.keys(theme).length > 0
        ? 'react-tanstack-widget w-full rounded-xl overflow-hidden font-custom theme-custom'
        : 'react-tanstack-widget w-full rounded-xl overflow-hidden font-custom theme-default';

    // Update CSS variables via inline styles for better cross-browser compatibility
    return (
        <div
            id={`widget-${instanceId}`}
            className={themeClassName}
            style={customStyles}
        >
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </div>
    );
};
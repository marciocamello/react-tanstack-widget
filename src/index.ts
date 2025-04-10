// Main entry point for the widget library
export { Widget } from './components';
export type { WidgetProps } from './components';

// Re-export necessary TanStack components for consumers
export { QueryClient, QueryClientProvider } from '@tanstack/react-query';
export { Router, RouterProvider } from '@tanstack/react-router';
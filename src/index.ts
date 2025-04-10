// Main entry point for the widget library
export { Widget } from './components/Widget';
export type { WidgetProps } from './components/Widget';

// Re-export necessary TanStack components for consumers
export { QueryClient, QueryClientProvider } from '@tanstack/react-query';
export { Router, RouterProvider } from '@tanstack/react-router';
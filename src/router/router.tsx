import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import ErrorBoundary from '@components/error-boundary/error-boundary';

import { routes } from './routes';

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <ErrorBoundary>
                <Outlet />
            </ErrorBoundary>
        ),
        hasErrorBoundary: true,
        children: [
            {
                index: true,
                element: <Navigate to="test" />,
            },
            ...routes.map((route) => ({
                path: route.path,
                element: <route.Component />,
            })),
        ],
    },
]);

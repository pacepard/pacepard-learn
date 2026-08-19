import type { IRoute } from '@/utils/interfaces.util';
import { RouteURL } from './paths';
import { Navigate } from 'react-router-dom';

/** Learn product routes — post-onboarding placeholders (no auth). */
const learnRoutes: Array<IRoute> = [
    {
        name: 'learn-home',
        path: RouteURL.learn,
        element: (
            <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-8 text-center">
                <h1 className="text-3xl font-semibold">Welcome to Onaeko Learn</h1>
                <p className="text-muted-foreground max-w-md">
                    Onboarding complete. Learning experiences will live here.
                </p>
                <a className="text-primary underline" href={RouteURL.onboarding}>
                    Back to onboarding
                </a>
            </div>
        ),
    },
    {
        name: 'programs',
        path: RouteURL.programs,
        element: <Navigate to={RouteURL.learn} replace />,
    },
];

export default learnRoutes;

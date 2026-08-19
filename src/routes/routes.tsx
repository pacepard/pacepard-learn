import { Navigate, Route, Routes } from 'react-router-dom';
import type { IRoute } from '@/utils/interfaces.util';
import onboardingRoutes from './onboarding.route';
import baseRoutes from './base.route';
import learnRoutes from './learn.route';

const appRoutes: Array<IRoute> = [
    ...onboardingRoutes,
    ...baseRoutes,
    ...learnRoutes,
];

function renderRoutes(routes: Array<IRoute>) {
    return routes.map((route) => {
        const element =
            route.element ??
            (route.redirect ? <Navigate to={route.redirect} replace /> : undefined);

        return (
            <Route key={route.name} path={route.path} element={element}>
                {route.children ? renderRoutes(route.children) : null}
            </Route>
        );
    });
}

function MainRoutes() {
    return <Routes>{renderRoutes(appRoutes)}</Routes>;
}

export default MainRoutes;

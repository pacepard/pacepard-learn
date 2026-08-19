import type { IRouteItem } from '@/context/helpers/interface';
import { RouteURL } from './paths';

const sidebarRoutes: Array<IRouteItem> = [
    {
        name: 'learn',
        path: RouteURL.learn,
        title: 'Home',
        subroutes: [],
        inroutes: [],
    },
];

export default sidebarRoutes;

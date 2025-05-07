import Admin from './pages/Admin';
import { ADMIN_ROUTE, CART_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from './utils/consts';
import Cart from './pages/Cart';
import Shop from './pages/Shop';
import Auth from './pages/Auth';
import Device from './pages/Device';

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        // any variable used as a component must be capitalized to be treated as a component;  Passing just component (function) itself NOT instantiating! <Admin />
        Component: Admin 
    },
    {
        path: CART_ROUTE,
        Component: Cart
    },
];

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: Device
    },
];
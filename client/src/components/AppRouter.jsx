import { Routes, Route, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import userStore from '../store/userStore';
import NotFound from '../pages/NotFound';

function AppRouter() {
    const { isAuth } = userStore();

    return (
        <Routes>
            {/* Auth Routes */}
            {!isAuth && authRoutes.map(({ path, Component }) => {
                return <Route key={path} path={path} element={<Component />} />
            })}

            {publicRoutes.map(({ path, Component }) => {
                return <Route key={path} path={path} element={<Component />} />
            })}

            {/* fallback route */}
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}

export default AppRouter;

import React, {useContext, useEffect} from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import {PageContext} from '../context/page-context';
import {routes} from '../routes';

const AppRouter = () => {
    const {setHeaderClass} = useContext(PageContext);
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);

        for (const i in routes) {
            if (routes[i].path === pathname) {
                setHeaderClass(routes[i].headerClass);
            }
        }
    }, [pathname]);

    return (
        <Routes>
            {routes.map(route =>
                <Route
                    key={route.path}
                    path={route.path}
                    exact={route.exact}
                    element={route.component}
                />
            )}
        </Routes>
    );
};

export default AppRouter;
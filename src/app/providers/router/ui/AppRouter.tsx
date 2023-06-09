import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from './RouterConfig';

const AppRouter: React.FC = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            {Object.values(routerConfig).map(({ element, path }) => (
                <Route
                    key={path}
                    path={path}
                    element={element}
                />
            ))}
        </Routes>
    </Suspense>
);

export default AppRouter;

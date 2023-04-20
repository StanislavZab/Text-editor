import { RouteProps } from 'react-router-dom';
import { MainPage } from '@/pages/MainPage';
import { AppRoutes, RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { TextEditorPage } from '@/pages/TextEditorPage';

export const routerConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.FILE_EDIT]: {
        path: `${RoutePath.file_edit}:id`,
        element: <TextEditorPage />,
    },
};

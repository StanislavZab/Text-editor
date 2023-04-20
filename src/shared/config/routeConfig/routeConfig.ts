export enum AppRoutes {
    MAIN = 'main',
    FILE_EDIT = 'file_edit'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.FILE_EDIT]: '/edit/',
};

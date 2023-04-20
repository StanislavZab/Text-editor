export enum AppRoutes {
    MAIN = 'main',
    LOGIN = 'login',
    REGISTRATION = 'registration'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.LOGIN]: '/login',
    [AppRoutes.REGISTRATION]: '/registration',
};

// type ValueOf<T> = T[keyof T];

// // export type AppRoutes = ValueOf<typeof AppRoutes>;
// export type AppRoutes = (typeof AppRoutes)[keyof typeof AppRoutes];

// export const AppRoutes = {
//     CHART: 'chart',
//     LOGIN: 'login',
//     REGISTRATION: 'registration'
// } as const;

// export const RoutePath: Record<AppRoutes, string> = {
//     [AppRoutes.CHART]: '/',
//     [AppRoutes.LOGIN]: '/login',
//     [AppRoutes.REGISTRATION]: '/registration'
// }

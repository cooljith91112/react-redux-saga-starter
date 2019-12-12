import AdminContainer from "../modules/admin/admin.container";
import SuperAdminContainer from "../modules/superadmin/superadmin.container";
import DashBoardContainer from "../modules/dashboard/dashboard.container";

export const AppRoutes = [
    {
        path: '/admin',
        component: AdminContainer,
        permission: ['admin','superadmin']
    },
    {
        path: '/superadmin',
        component: SuperAdminContainer,
        permission: ['admin', 'superadmin', 'user']
    },
    {
        path: '/dashboard',
        component: DashBoardContainer,
        permission: ['user']
    }
];

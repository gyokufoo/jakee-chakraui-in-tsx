import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";

export const homeRoutes = [
  {
    path: "user_management",
    routeElement: <UserManagement />,
  },
  {
    path: "setting",
    routeElement: <Setting />,
  },
];

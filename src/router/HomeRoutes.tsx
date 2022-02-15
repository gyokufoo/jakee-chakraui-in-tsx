import { Home } from "../components/pages/Home";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";

export const homeRoutes = [
  {
    path: "",
    routeElement: <Home />,
  },
  {
    path: "user_management",
    routeElement: <UserManagement />,
  },
  {
    path: "setting",
    routeElement: <Setting />,
  },
];

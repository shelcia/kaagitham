import Home from "./pages/auth/Home";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";

export const HomeRoutes = [
  {
    file: Home,
    routeLink: "/",
  },
  {
    file: Signup,
    routeLink: "/signup",
  },
  {
    file: Login,
    routeLink: "/login",
  },
];

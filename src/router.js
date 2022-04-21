// import Home from "./pages/auth/Home";
// import Signup from "./pages/auth/Signup";
// import Login from "./pages/auth/Login";

// import Dashboard from "./pages/home/Dashboard";

// import Document from "./pages/document/Document";

// export const HomeRoutes = [
//   {
//     file: Home,
//     routeLink: "/",
//   },
//   {
//     file: Signup,
//     routeLink: "/signup",
//   },
//   {
//     file: Login,
//     routeLink: "/login",
//   },
// ];

// export const DashboardRoutes = [
//   {
//     file: Dashboard,
//     routeLink: "/user/:id",
//   },
//   {
//     file: Document,
//     routeLink: "/document/:id",
//   },
// ];

import { lazy, Suspense } from "react";

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<p>rrrr</p>}>
      <Component {...props} />
    </Suspense>
  );

const HomePage = Loadable(lazy(() => import("./pages/auth/Home")));
const LoginPage = Loadable(lazy(() => import("./pages/auth/Login")));
const SignupPage = Loadable(lazy(() => import("./pages/auth/Signup")));

const DashboardPage = Loadable(lazy(() => import("./pages/home/Dashboard")));
const DocumentPage = Loadable(lazy(() => import("./pages/document/Document")));

const routes = [
  {
    path: "",
    element: <HomePage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "signup",
    element: <SignupPage />,
  },
  {
    path: "homepage",
    element: <HomePage />,
  },
  {
    path: "user/:id",
    element: <DashboardPage />,
  },
  {
    path: "document/:id",
    element: <DocumentPage />,
  },
];

export default routes;

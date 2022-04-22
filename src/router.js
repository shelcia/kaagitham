import { lazy, Suspense } from "react";
import { FullLoader } from "./common/Loader";

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<FullLoader />}>
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

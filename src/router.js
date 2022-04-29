import { lazy, Suspense } from "react";
import AuthGuard from "./common/AuthGuard";
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

const ErrorPage = Loadable(lazy(() => import("./pages/others/ErrorPage")));

const routes = [
  {
    path: "",
    element: <HomePage />,
  },
  {
    path: "homepage",
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
    path: "user/:id",
    element: (
      <AuthGuard>
        <DashboardPage />
      </AuthGuard>
    ),
  },
  {
    path: "document/:id",
    element: (
      <AuthGuard>
        <DocumentPage />
      </AuthGuard>
    ),
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];

export default routes;

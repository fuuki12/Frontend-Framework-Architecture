import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { Spinner } from "@/components/Elements";
import { MainLayout } from "@/components/Layout";
import { lazyImport } from "@/utils/lazyImport";

const [DiscussionsRoutes, Dashboard, Profile, Users] = lazyImport(() =>
  Promise.all([import("@/features/UserProfile/api/getUser")])
);

const App = () => {
  return (
    <MainLayout>
      <Suspense
        fallback={
          <div className="h-full w-full flex items-center justify-center">
            <Spinner size="xl" />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </MainLayout>
  );
};

export const protectedRoutes = [
  {
    path: "/app",
    element: <App />,
    children: [
      { path: "/discussions/*", element: <DiscussionsRoutes /> },
      { path: "/users", element: <Users /> },
      { path: "/profile", element: <Profile /> },
      { path: "/", element: <Dashboard /> },
      { path: "*", element: <Navigate to="." /> },
    ],
  },
];

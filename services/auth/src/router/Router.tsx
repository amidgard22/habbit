import { createBrowserRouter } from "react-router-dom";
import { App } from "@/components/App/App";
import { Suspense } from "react";
import { UserCard } from "@packages/shared/src/components/UserCard";
import Auth from "@/pages/Auth/Auth";

const routes = [
  {
    path: "/auth",
    element: <App />,
    children: [
      {
        path: "/auth/login",
        element: (
          <Suspense fallback={"Loading..."}>
            <Auth />
          </Suspense>
        ),
      },
      {
        path: "/auth/registration",
        element: (
          <Suspense fallback={"Loading..."}>
            <div style={{ color: "red" }}>
              <h1>second page</h1>
              <UserCard username={"FROM SHOP"} />
            </div>
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;

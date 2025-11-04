import { createBrowserRouter } from "react-router-dom";

import { Suspense } from "react";
import { UserCard } from "@packages/shared/src/components/UserCard";
import AppLayout from "@/components/authLayout/AppLayout";
import { Login } from "@/pages/Login";

const routes = [
  {
    path: "/auth",
    element: <AppLayout />,
    children: [
      {
        path: "/auth/login",
        element: (
          <Suspense fallback={"Loading..."}>
            <Login />
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

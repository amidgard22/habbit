import { createBrowserRouter } from "react-router-dom";

import { Suspense } from "react";
import AppLayout from "@/components/authLayout/AppLayout";
import { Login } from "@/pages/Login";
import { Registration } from "@/pages/Registration";

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
            <Registration />
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;

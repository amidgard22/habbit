import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { adminRoutes } from "@packages/shared/src/routes/admin";
import { shopRoutes } from "@packages/shared/src/routes/shop";
import { authRoutes } from "@packages/shared/src/routes/auth";
// import AppLayout from '@packages/shared/src/components/Layout'

export const App = () => {
  return (
    <div data-testid={"App.DataTestId"}>
      <h1>PAGE</h1>
      <Link to={adminRoutes.about}>ABOUT</Link>
      {/*<br/>*/}
      <Link to={shopRoutes.main}>SHOP</Link>
      {/*<AppLayout />*/}
      <Link to={authRoutes.login}>AUTH LOGIN</Link>
      <Link to={authRoutes.registration}>AUTH REG</Link>
      {/*<AppLayout />*/}
      <Outlet />
    </div>
  );
};

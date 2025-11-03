import { Link, Outlet } from "react-router-dom";
import { AdminRoutes } from "@packages/shared/routes/admin";
import { ShopRoutes } from "@packages/shared/routes/shop";

export const App = () => {
  return (
    <div data-testid={"App.DataTestId"}>
      <h1>PAGE</h1>
      <Link to={AdminRoutes.about}>about</Link>
      <br />
      <Link to={ShopRoutes.main}>shop</Link>
      <Outlet />
    </div>
  );
};

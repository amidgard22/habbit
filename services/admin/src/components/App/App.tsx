import { Outlet } from "react-router-dom";

export const App = () => {
  return (
    <div data-testid={"App.DataTestId"}>
      <h1>ADMIN PAGE</h1>

      <Outlet />
    </div>
  );
};

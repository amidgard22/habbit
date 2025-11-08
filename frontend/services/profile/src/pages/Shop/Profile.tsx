import { profileRoutes } from "@packages/shared/src/routes/profile";
import { Link } from "react-router-dom";
import { Button } from "antd";

const Shop = () => {
  return (
    <h1>
      SHOP
      <div>
        <Button>as</Button>
        <Link to={profileRoutes.main}>go to second page</Link>
      </div>
    </h1>
  );
};

export default Shop;

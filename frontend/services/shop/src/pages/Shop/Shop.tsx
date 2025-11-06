import React from "react";
import { shopRoutes } from "@packages/shared/src/routes/shop";
import { Link } from "react-router-dom";
import { Button } from "antd";

const Shop = () => {
  return (
    <h1>
      SHOP
      <div>
        <Button>as</Button>
        <Link to={shopRoutes.second}>go to second page</Link>
      </div>
    </h1>
  );
};

export default Shop;

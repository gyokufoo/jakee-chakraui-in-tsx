import { VFC, memo } from "react";
import { Outlet, useLocation } from "react-router-dom";

export const Home: VFC = memo(() => {
  return <p>This is Home Page</p>;
});

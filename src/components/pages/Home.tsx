import { VFC, memo } from "react";
import { Outlet, useLocation } from "react-router-dom";

export const Home: VFC = memo(() => {
  const isHomePage = useLocation().pathname === "/home/";
  return <>{isHomePage ? <p>This is Home Page</p> : <Outlet />}</>;
});

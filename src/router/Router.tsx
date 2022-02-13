import { memo, VFC } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { Login } from "../components/pages/Login";
import { Page404 } from "../components/pages/Page404";
import { homeRoutes } from "./HomeRoutes";

export const Router: VFC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="home" element={<Home />}>
        {homeRoutes.map((homeRoute) => {
          return (
            <Route
              key={homeRoute.path}
              path={homeRoute.path}
              element={homeRoute.routeElement}
            />
          );
        })}
      </Route>
      <Route path="/*" element={<Page404 />} />
    </Routes>
  );
});

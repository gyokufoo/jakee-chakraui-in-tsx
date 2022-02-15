import React, { VFC, memo, ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../organisms/layout/Header";

export const HeaderLayout: VFC = memo(({}) => {
  return (
    <>
      <Header></Header>
      <main>
        <Outlet />
      </main>
    </>
  );
});

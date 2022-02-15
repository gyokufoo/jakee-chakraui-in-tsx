import { VFC, memo } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../organisms/layout/Header";

export const HeaderLayout: VFC = memo(() => {
  return (
    <>
      <Header></Header>
      <main>
        <Outlet />
      </main>
    </>
  );
});

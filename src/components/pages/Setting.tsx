import { VFC, memo } from "react";
import { Outlet } from "react-router-dom";

export const Setting: VFC = memo(() => {
  return (
    <>
      <p>This is Setting Page</p>
      <Outlet />
    </>
  );
});

import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <p className="text-7xl text-blue-400 text-center">this is main layout</p>
      <Outlet />
    </div>
  );
};

export default Main;

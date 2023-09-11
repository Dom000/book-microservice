import React from "react";
import { Outlet } from "react-router-dom";

const UserDetails: React.FC = () => {
  return (
    <div className="flex ">
      <div className="w-2/5">Side bar</div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default UserDetails;

import React from "react";
import { useAuthenticateStore } from "../../../features/store";
import { PiUserBold } from "react-icons/pi";

const UserDetails: React.FC = () => {
  const userDetails = useAuthenticateStore((state) => state);

  return (
    <div className="md:flex flex-col ">
      <div className="md:w-1/5 w-full rounded-md shadow-md h-80 flex-col flex  items-center  p-3">
        <PiUserBold className="text-[100px] text-gray-400" />
        <div className="w-4/5 flex flex-col my-2 items-left space-y-3">
          <div className="flex space-x-5">
            <p className="font-bold">Name:</p>
            <p>{userDetails.userDetails.user_name}</p>
          </div>
          <div className="flex space-x-5 flex-wrap">
            <p className=" text-sm">{userDetails.userDetails.email}</p>
          </div>
          <div className="flex space-x-5">
            <p className="font-bold text-sm">No of Books:</p>
            <p className=" text-sm">John Doe</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;

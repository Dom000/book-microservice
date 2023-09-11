import React from "react";
import { useAuthenticateStore } from "../../../features/store";
import { PiUserBold } from "react-icons/pi";
import Button from "../../../components/common/Button";
import { useNavigate, Outlet } from "react-router-dom";
import axios from "axios";
import { BOOK_URL } from "../../../constants/endpoints";
import { useEffect } from "react";

const UserDetails: React.FC = () => {
  const BOOK_URLS = new BOOK_URL();
  const userDetails = useAuthenticateStore((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchBook() {
      const { data } = await axios.get(
        BOOK_URLS.CREATE_BOOK + `/${userDetails?.userDetails?.id}/user`
      );

      userDetails.setUserBooks(data.data);
    }

    fetchBook();
  }, [userDetails.posted]);

  return (
    <div className="md:flex flex-col relative w-full space-x-3 ">
      <div className="md:w-1/5 w-full md:absolute left-0 rounded-md shadow-md h-60 md:h-96 flex-col flex  items-center  p-3">
        <PiUserBold className="md:text-[100px] text-[70px] text-gray-400" />
        <div className="w-4/5 flex flex-col my-2 items-center md:items-left space-y-3">
          <div className="flex space-x-5">
            <p className="font-bold">Name:</p>
            <p>{userDetails.userDetails.user_name}</p>
          </div>
          <div className="flex space-x-5 flex-wrap">
            <p className=" text-sm">{userDetails.userDetails.email}</p>
          </div>
          <div className="flex space-x-5">
            <p className="font-bold text-sm">No of Books:</p>
            <p className=" text-sm">{userDetails.userBooks.length}</p>
          </div>

          {userDetails.userBooks.length >= 1 && (
            <Button
              onClick={() => {
                navigate("/userDetails/createbook");
              }}
              text={"Publish"}
            />
          )}
        </div>
      </div>
      <div className="md:w-3/4 md:absolute right-0 w-full rounded-md shadow-md justify-center min-h-[320px] flex-col flex  items-center  p-3">
        <Outlet />
      </div>
    </div>
  );
};

export default UserDetails;

import React from "react";
import { useAuthenticateStore } from "../../../features/store";
import { PiUserBold } from "react-icons/pi";
import { AiOutlineFileText } from "react-icons/ai";
import Button from "../../../components/common/Button";
import { useNavigate } from "react-router-dom";
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

      console.log(data, "here");
    }

    fetchBook();
  }, []);

  return (
    <div className="md:flex flex-col relative w-full space-x-3 ">
      <div className="md:w-1/5 w-full md:absolute left-0 rounded-md shadow-md h-80 flex-col flex  items-center  p-3">
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
            <p className=" text-sm">John Doe</p>
          </div>

          <Button
            onClick={() => {
              navigate("/createbook");
            }}
            text={"Publish"}
          />
        </div>
      </div>
      <div className="md:w-3/4 md:absolute right-0 w-full rounded-md shadow-md justify-center h-80 flex-col flex  items-center  p-3">
        {userDetails.userBooks.length < 1 ? (
          <div className=" flex flex-col space-y-3 items-center">
            <AiOutlineFileText className="text-[50px] text-gray-400" />
            <p>Your havent published any book</p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default UserDetails;

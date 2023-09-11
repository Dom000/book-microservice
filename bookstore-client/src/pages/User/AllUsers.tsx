import React, { useEffect, useState } from "react";
import { USER_URL } from "../../../constants/endpoints";
import axios from "axios";
import { PiUserBold } from "react-icons/pi";
import { AiOutlineFileText } from "react-icons/ai";
import Button from "../../../components/common/Button";

interface userInt {
  user_name: string;
  email: string;
  password: string;
}

const AllUsers: React.FC = () => {
  const USER_URLS = new USER_URL();
  const [allusers, setallusers] = useState<[]>([]);

  useEffect(() => {
    async function fetchBook() {
      const { data } = await axios.get(USER_URLS.GET_ALL_USER);

      setallusers(data.data);
    }

    fetchBook();
  }, []);
  return (
    <div>
      {allusers.length < 1 ? (
        <div className=" flex flex-col space-y-3 items-center">
          <AiOutlineFileText className="text-[50px] text-gray-400" />
          <p>No book has been published any book</p>
        </div>
      ) : (
        <div className="w-full grid grid-cols-1 gap-3  md:grid-cols-4 p-5">
          {allusers.map((books: userInt, index) => (
            <div
              key={index}
              className=" w-full  rounded-md shadow-md h-60 md:h-72 flex-col flex  items-center  p-3"
            >
              <PiUserBold className="md:text-[100px] text-[70px] text-gray-400" />
              <div className="w-4/5 flex flex-col my-2 items-center md:items-left space-y-3">
                <div className="flex space-x-5">
                  <p className="font-bold">Name:</p>
                  <p>{books.user_name}</p>
                </div>
                <div className="flex space-x-5 flex-wrap">
                  <p className=" text-sm">{books.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllUsers;

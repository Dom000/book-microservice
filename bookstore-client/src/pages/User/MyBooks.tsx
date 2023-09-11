import React from "react";
import { useAuthenticateStore } from "../../../features/store";
import { AiOutlineFileText } from "react-icons/ai";
import Button from "../../../components/common/Button";
import { useNavigate } from "react-router-dom";
import { BiSolidBookAlt } from "react-icons/bi";
import axios from "axios";
import { BOOK_URL } from "../../../constants/endpoints";
import { useEffect } from "react";

const Index: React.FC = () => {
  const BOOK_URLS = new BOOK_URL();
  const userDetails = useAuthenticateStore((state) => state);
  const navigate = useNavigate();

  return (
    <div>
      {userDetails.userBooks.length < 1 ? (
        <div className=" flex flex-col space-y-3 items-center">
          <AiOutlineFileText className="text-[50px] text-gray-400" />
          <p>Your havent published any book</p>
          {userDetails.userBooks.length < 1 && (
            <Button
              onClick={() => {
                navigate("/userDetails/createbook");
              }}
              text={"Publish"}
            />
          )}
        </div>
      ) : (
        <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-3">
          {userDetails.userBooks.map((books, index) => (
            <div
              key={index}
              className="w-full md:max-w-[220px] space-y-3 flex flex-col p-1 items-center"
            >
              <BiSolidBookAlt className="text-[150px] text-gray-500 md:text-[120px]" />
              <div className="w-full items-center text-center ">
                <p className="font-bold">How to cook</p>
                <p className="text-xs">
                  How to cook noodels an d egg in egyptian stytle
                </p>
                <p className="font-bold">₦ {books?.prices}</p>
              </div>
              <Button type="submit" text={"view"} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Index;

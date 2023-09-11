import React from "react";
import { Link } from "react-router-dom";
import { BiSolidUserCircle } from "react-icons/bi";

const Header: React.FC = () => {
  return (
    <div className="flex flex-row shadow-md absolute top-0 w-full  p-3 md:p-6 items-center  justify-center space-x-5 md:space-x-16">
      <Link to={"/"}>
        <div className="hover:bg-slate-400/25 cursor-pointer p-1 rounded-md">
          <p className="font-bold text-gray-900 text:base md:text-lg">Users</p>
        </div>
      </Link>
      <Link to={"/books"}>
        <div className="hover:bg-slate-400/25 cursor-pointer p-1 rounded-md">
          <p className="font-bold text-gray-900 text:base md:text-lg">Books</p>
        </div>
      </Link>
      <Link to={"/create_book"}>
        <div className="hover:bg-slate-400/25 cursor-pointer p-1 rounded-md">
          <p className="font-bold text-gray-900 text:base md:text-lg">
            Create Books
          </p>
        </div>
      </Link>
      <Link to={"/userDetails"}>
        <BiSolidUserCircle className="text-3xl text-gray-400" />
      </Link>
    </div>
  );
};

export default Header;

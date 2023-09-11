import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="flex flex-row shadow-md p-7 items-center  justify-center space-x-16">
      <Link to={"/"}>
        <div className="hover:bg-slate-400/25 cursor-pointer p-1 rounded-md">
          <p className="font-bold text-gray-900 text-lg">Users</p>
        </div>
      </Link>
      <Link to={"/books"}>
        <div className="hover:bg-slate-400/25 cursor-pointer p-1 rounded-md">
          <p className="font-bold text-gray-900 text-lg">Books</p>
        </div>
      </Link>
      <Link to={"/create_book"}>
        <div className="hover:bg-slate-400/25 cursor-pointer p-1 rounded-md">
          <p className="font-bold text-gray-900 text-lg">Create Books</p>
        </div>
      </Link>
    </div>
  );
};

export default Header;

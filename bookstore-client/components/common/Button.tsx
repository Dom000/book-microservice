import React from "react";
import { bottonProps } from "../../src/interface";
import Loader from "./Loader";

const Button = ({
  text,
  onClick,
  loading,
  disable,
  type,
  outline,
  style,
  className,
}: bottonProps): JSX.Element => {
  if (outline)
    return (
      <button
        style={style}
        className={` rounded-md w-full text-sm  bg-blue-700 px-3 py-2 hover:bg-blue-600 cursor-pointer border ${className}`}
        onClick={onClick}
      >
        {text}
      </button>
    );

  return (
    <button
      style={style}
      type="submit"
      disabled={disable}
      onClick={onClick}
      className={`text-center cursor-pointer text-sm px-3 text-white py-2 ${
        disable ? "bg-blue-600/25" : "bg-blue-700  hover:bg-blue-700/70"
      }  ${
        type === "custom" ? "min-w-[50px]" : "w-full"
      } rounded-md ${className}`}
    >
      {loading ? (
        <div className="justify-center  flex items-center">
          <Loader />
        </div>
      ) : (
        <p>{text}</p>
      )}
    </button>
  );
};

export default Button;

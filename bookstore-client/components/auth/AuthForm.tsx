import React, { useState } from "react";
import Button from "../common/Button";
import { useForm } from "react-hook-form";
import axios from "axios";
import { BOOK_URL, USER_URL } from "../../constants/endpoints";
import { useAuthenticateStore, } from "../../features/store/index";
import { Link, useNavigate } from "react-router-dom";
const AuthForm = ({ login }: { login: boolean }) => {
  const USER_URLS = new USER_URL();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const authenticateUser = useAuthenticateStore((state) => state);
  const registerUser = async (data: any) => {
    try {
      const formdata = {
        full_name: data["user_name"],
        password: data["password"],
        email: data["email"],
      };
      const { data: resData } = await axios.post(USER_URLS.REGISTER, formdata);
      if (resData) {
        setLoading(false);
        navigate("/login");
      }
    } catch (err) {
      setLoading(false);
    }
  };

  const loginUser = async (data: any) => {
    try {
      const formdata = {
        email: data["email"],
        password: data["password"],
      };
      const { data: resData } = await axios.post(USER_URLS.LOGIN, formdata);
      if (resData?.status) {
        setLoading(false);
        authenticateUser.setUserDetails(resData?.data);
        authenticateUser.setIsLoggedIn(true);
        navigate(`/userDetails`);
      }
    } catch (err) {
      setLoading(false);
    }
  };

  function auth(data: any) {
    setLoading(true);
    login ? loginUser(data) : registerUser(data);
  }

  return (
    <div className="flex items-center justify-center flex-col space-y-2">
      <div>
        <p className="text-center text-lg  font-semibold">
          {!login ? "Create An Account" : "Login to your account"}
        </p>
        <p className="text-center text-sm text-[#7c7f8a] mb-5">
          Provide your credentials
        </p>
      </div>
      <div>
        <div className="bg-clip-padding backdrop-filter backdrop-blur-lg bg-slate-300 bg-opacity-10 border border-gray-800 shadow-lg animate__fadeIn animate__animated rounded-md w-full md:w-[500px] p-4 md:p-7">
          <div className=" grid gap-2 grid-cols-1 w-full mb-4   ">
            {!login && (
              <div className="">
                <label
                  htmlFor="user_name"
                  className="text-xs text-textColor/70 mb-1.5"
                >
                  User Name
                </label>
                <input
                  {...register("user_name", {
                    required: "This field is required",
                  })}
                  type={"text"}
                  className="border w-full border-gray-600 p-2 bg-transparent form-control rounded-md focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-orange focus:ring-opacity-5"
                  // placeholder={"First Name"}
                />
                {errors.user_name !== undefined && (
                  <p className="text-red-600 text-xs py-2">
                    This field is required
                  </p>
                )}
              </div>
            )}

            <div className="">
              <label
                htmlFor="email"
                className="text-xs text-textColor/70 mb-1.5"
              >
                Email
              </label>
              <input
                id="email"
                {...register("email", { required: "This field is requid" })}
                type={"email"}
                className="border w-full border-gray-600 p-2 bg-transparent form-control rounded-md focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-orange focus:ring-opacity-5"
              />
              {errors.email !== undefined && (
                <p className="text-red-600 text-xs py-2">
                  This field is required
                </p>
              )}
            </div>

            <div className="">
              <label
                htmlFor="password"
                className="text-xs text-textColor/70 mb-1.5"
              >
                Password
              </label>
              <input
                id="password"
                {...register("password", {
                  required: "THis field is required",
                })}
                type={"text"}
                className="border w-full border-gray-600 p-2 bg-transparent form-control rounded-md focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-orange focus:ring-opacity-5"
                // placeholder={"First Name"}
              />
              {errors.password !== undefined && (
                <p className="text-red-600 text-xs py-2">
                  This field is required
                </p>
              )}
            </div>
          </div>

          <Button
            onClick={handleSubmit(auth)}
            loading={loading}
            type="submit"
            text={login ? "Login" : "Register"}
          />
        </div>

        {login ? (
          <div className="flex text-sm space-x-3 mt-10 justify-center items-center">
            <p>Dont have an account? </p>
            <Link to={"/register"}>
              <p className="text-primary cursor-pointer hover:text-primary/60">
                Sign up
              </p>
            </Link>
          </div>
        ) : (
          <div className="flex text-sm space-x-3 mt-10 justify-center items-center">
            <p>Already have an account? </p>
            <Link to={"/login"}>
              <p className="text-primary cursor-pointer hover:text-primary/60">
                Sign In{" "}
              </p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthForm;

import React, { useState } from "react";
import Button from "./common/Button";
import { useForm } from "react-hook-form";
import axios from "axios";
import { BOOK_URL } from "../constants/endpoints";
import { useAuthenticateStore } from "../features/store/index";
import { useNavigate } from "react-router-dom";
import { SnackbarProvider, useSnackbar } from "notistack";

const PublishForm = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const BOOK_URLS = new BOOK_URL();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const authenticateUser = useAuthenticateStore((state) => state);
  const createBook = async (data: any) => {
    try {
      const formdata = {
        title: data["title"],
        description: data["description"],
        prices: data["price"],
        author: authenticateUser.userDetails.user_name,
        authorId: +authenticateUser.userDetails.id,
      };
      const { data: resData } = await axios.post(
        BOOK_URLS.CREATE_BOOK,
        formdata
      );

      if (resData.status) {
        enqueueSnackbar("published", {
          variant: "success",
        });
        setLoading(false);
        navigate("/userDetails");
      } else {
        enqueueSnackbar(`${resData.message}`, {
          variant: "error",
        });
        setLoading(false);
      }
    } catch (err) {
      enqueueSnackbar(`${err}`, {
        variant: "error",
      });
      setLoading(false);
    }
  };

  function publish(data: any) {
    setLoading(true);
    createBook(data);
  }

  return (
    <div className="flex w-full items-center justify-center flex-col space-y-2">
      <div>
        <p className="text-center text-lg  font-semibold">
          Create your book now!!
        </p>
      </div>
      <div>
        <div className="bg-clip-padding backdrop-filter backdrop-blur-lg bg-slate-300 bg-opacity-10 border border-gray-800 shadow-lg animate__fadeIn animate__animated rounded-md w-[300px] md:w-[500px] p-4 md:p-7">
          <div className="  w-full mb-4 ">
            <div className="">
              <label
                htmlFor="title"
                className="text-xs text-textColor/70 mb-1.5"
              >
                Title
              </label>
              <input
                id="title"
                {...register("title", { required: "This field is requid" })}
                type={"text"}
                className="border w-full border-gray-600 p-2 bg-transparent form-control rounded-md focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-orange focus:ring-opacity-5"
              />
              {errors.title !== undefined && (
                <p className="text-red-600 text-xs py-2">
                  This field is required
                </p>
              )}
            </div>

            <div className="">
              <label
                htmlFor="price"
                className="text-xs text-textColor/70 mb-1.5"
              >
                Price
              </label>
              <input
                id="price"
                {...register("price", {
                  required: "THis field is required",
                })}
                type={"tel"}
                className="border w-full border-gray-600 p-2 bg-transparent form-control rounded-md focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-orange focus:ring-opacity-5"
                // placeholder={"First Name"}
              />
              {errors.price !== undefined && (
                <p className="text-red-600 text-xs py-2">
                  This field is required
                </p>
              )}
            </div>
            <div className="">
              <label
                htmlFor="description"
                className="text-xs text-textColor/70 mb-1.5"
              >
                Description
              </label>
              <textarea
                id="description"
                {...register("description", {
                  required: "THis field is required",
                })}
                className="border w-full placeholder:italic border-gray-600 p-2 bg-transparent form-control rounded-md focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-orange focus:ring-opacity-5"
                placeholder={"Description"}
              />
              {errors.description !== undefined && (
                <p className="text-red-600 text-xs py-2">
                  This field is required
                </p>
              )}
            </div>
          </div>

          <Button
            onClick={handleSubmit(publish)}
            loading={loading}
            type="submit"
            text={"Publish"}
          />
        </div>
      </div>
    </div>
  );
};

export default PublishForm;

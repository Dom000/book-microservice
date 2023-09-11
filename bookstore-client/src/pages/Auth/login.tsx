import AuthForm from "../../../components/auth/AuthForm";
import React from "react";

const Login: React.FC = () => {
  return (
    <div className=" flex flex-col w-full h-full p-5 md:p-10 items-center justify-center">
      <AuthForm login={true} />
    </div>
  );
};

export default Login;

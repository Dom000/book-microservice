import AuthForm from "../../../components/auth/AuthForm";
import React from "react";

const Register: React.FC = () => {
  return (
    <div className="globalBg flex flex-col w-full h-full p-5 md:p-10 items-center justify-center">
      <AuthForm login={false} />
    </div>
  );
};

export default Register;

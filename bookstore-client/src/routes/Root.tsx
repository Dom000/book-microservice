import Header from "../../components/Header/Header";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthenticateStore } from "../../features/store";
import { useEffect } from "react";
export default function Root() {
  const isLoggedIn = useAuthenticateStore((state) => state);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn.userDetails) {
      navigate("/login");
    }
  }, [isLoggedIn.isLoggedIn]);

  // if (!isLoggedIn.isLoggedIn) {
  //   return <></>;
  // }

  return (
    <>
      {isLoggedIn.isLoggedIn && <Header />}

      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex bg-white">
      <div className="back w-1/2 bg-cover " />

      <div className="  w-1/2">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;

import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex flex-col back items-center justify-center gap-0 h-full overflow-hidden  ">
      <div>
        <img className="w-[200px] mt-20" src="/src/assets/Logo.png" alt="LOGO" />
      </div>
        <Outlet />
    </div>
  );
};

export default AuthLayout;

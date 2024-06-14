import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
const RootLayout = () => {
  return (
    <div className=" bg-[#E8EDF1] ">
      <div className="h-[70px] w-full bg-white  border-b-[1px] border-solid border-neutral-500  ">
        <Navbar />
      </div>
      <div className="flex w-full justify-between ">
        <div className="w-full">
          <div>
            <Outlet />
          </div>
        </div>
        <div className="min-h-screen bg-white">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;

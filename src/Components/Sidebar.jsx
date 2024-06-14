import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { MdPayment, MdExitToApp } from "react-icons/md";

const Sidebar = () => {
  const [links] = useState([
    {
      label: "الرئيسية",
      path: "/dashboard",
      img: "/src/assets/dash.png",
      icon: FiHome,
    },
    {
      label: "رقع الفدوهات",
      path: "/upload",
      img: "/src/assets/up.png",
      icon: MdPayment,
    },
  ]);

  const handleLogOut = () => {
    console.log("Logging out...");
  };

  return (
    <div className="flex flex-col px-3  w-[200px] h-full rel">
      <ul className="mt-5">
        {links.map((link, index) => (
          <li className="text-[20px] text-[#9094A0] mt-5" key={index}>
            <NavLink
              dir="rtl"
              to={link.path}
              className={({ isActive }) =>
                `px-7 flex font-normal items-center py-[10px] rounded-lg gap-3 justify-start w-full text-[14px] ${
                  isActive ? "bg-[#03AA77] text-white" : "text-neutral-600"
                }`
              }
              end
            >
              <img src={link.img} alt="icon" />
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <div
        onClick={handleLogOut}
        className="cursor-pointer flex items-center gap-2  text-neutral-600 text-[14px] fixed bottom-[60px] right-7"
        dir="rtl"
      >
        <NavLink
          to="/"
          className="flex items-center gap-2"
          onClick={handleLogOut}
        >
          <MdExitToApp className="text-[16px]" />
          <p dir="rtl" className="">
            تسجلا الخروج
          </p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;

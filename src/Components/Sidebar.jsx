import { useMemo } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { MdPayment, MdExitToApp } from "react-icons/md";

const Sidebar = () => {
  const navigate = useNavigate();

  const links = useMemo(
    () => [
      {
        label: "الورد اليومي",
        path: "/app",
        img: "src/assets/quran.png",
        icon: FiHome,
        alt: "quran Icon",
      },

      {
        label: "اذكار الصباح",
        path: "/app/moringAdhdhkar",
        img: "/src/assets/book.png",
        icon: MdPayment,
        alt: "Upload Icon",
      },
      {
        label: "اذكار المساء",
        path: "/app/eveningAdhdhkar",
        img: "/src/assets/book.png",
        icon: MdPayment,
        alt: "Upload Icon",
      },
      {
        label: "اذكار قبل النوم",
        path: "/app/sleepingAdhdhkar",
        img: "/src/assets/book.png",
        icon: MdPayment,
        alt: "Upload Icon",
      },
    ],
    []
  );

  const handleLogOut = () => {
    navigate("/");
  };

  return (
    <nav
      className="flex flex-col px-3 w-[200px] h-full"
      aria-label="Sidebar Navigation"
    >
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
              <img src={link.img} alt={link.alt} className="icon" />
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <button
        onClick={handleLogOut}
        className="cursor-pointer flex items-center gap-2 text-neutral-600 text-[14px] fixed bottom-[60px] right-7"
        dir="rtl"
        aria-label="Logout Button"
      >
        <MdExitToApp className="text-[16px]" />
        تسجيل الخروج
      </button>
    </nav>
  );
};

export default Sidebar;

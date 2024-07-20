import { Link } from "react-router-dom";

import logo from "../../assets/img/img_sm_logo_en_dark.svg";
import ProfilePopup from "../ProfilePopup";
import { useState } from "react";

const TAB_CONSTANT = {
  home: "HOME",
  puja: "PUJA",
  panchang: "PANCHANG",
  temples: "TEMPLE",
  library: "LIBRARY",
};

const NavBar = (props) => {
  const [isActive, setIsActive] = useState(TAB_CONSTANT.home);

  const activeStyles = "font-semibold text-orange-600";

  return (
    <nav className="flex flex-row justify-between items-center px-6 py-2 border-b border-gray-300">
      <img src={logo} alt="logo" />

      <div className="w-1/3 flex flex-row items-center justify-between">
        <Link
          className={isActive === TAB_CONSTANT.home ? activeStyles : ""}
          to="/"
          onClick={() => setIsActive(TAB_CONSTANT.home)}
        >
          Home
        </Link>

        <Link
          className={isActive === TAB_CONSTANT.puja ? activeStyles : ""}
          to="/epuja"
          onClick={() => setIsActive(TAB_CONSTANT.puja)}
        >
          Puja
        </Link>

        <Link
          className={isActive === TAB_CONSTANT.panchang ? activeStyles : ""}
          to="/coming-soon"
          onClick={() => setIsActive(TAB_CONSTANT.panchang)}
        >
          Panchang
        </Link>

        <Link
          className={isActive === TAB_CONSTANT.temples ? activeStyles : ""}
          to="/coming-soon"
          onClick={() => setIsActive(TAB_CONSTANT.temples)}
        >
          Temples
        </Link>

        <Link
          className={isActive === TAB_CONSTANT.library ? activeStyles : ""}
          to="/coming-soon"
          onClick={() => setIsActive(TAB_CONSTANT.library)}
        >
          Library
        </Link>
      </div>

      <div className="flex flex-row justifyitems-center">
        <select
          className="border border-gray-300 rounded-md w-20 mr-2 outline-none"
          name="lanuages"
          id="lanuages"
        >
          <option value="english">English</option>
          <option value="hindi">हिन्दी</option>
        </select>

        <ProfilePopup
          isActive={isActive}
          setIsActive={setIsActive}
          TAB_CONSTANT={TAB_CONSTANT}
        />
      </div>
    </nav>
  );
};

export default NavBar;

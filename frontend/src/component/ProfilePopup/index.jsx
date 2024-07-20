import Popup from "reactjs-popup";

import { IoPersonSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { PiNoteFill } from "react-icons/pi";
import { GiFireBowl } from "react-icons/gi";

import profileImg from "../../assets/img/Default Profile.svg";
import { Link } from "react-router-dom";

const ProfilePopup = (props) => {
  const { setIsActive, TAB_CONSTANT } = props;
  return (
    <div>
      <Popup
        trigger={
          <button className="bg-transparent">
            <img className="w-10" src={profileImg} alt="profile-img" />
          </button>
        }
        position="bottom right"
      >
        <div className="bg-white w-80 rounded mt-1 py-2">
          <div className="border-b border-gray-300 p-2">
            <h1 className="w-full text-[#707070]">Hello, Sri Mandir Bhakt</h1>
            <p className="text-[14px] font-medium text-[#707070]">
              Welcome to Sri Mandir Puja Seva
            </p>
          </div>

          <div className="p-2 border-b border-gray-300">
            <p className="text-[#707070] text-[12px] font-semibold">
              Account Details
            </p>
            <Link
              to="/coming-soon"
              className="flex flex-row items-center justify-between mt-3 w-full p-1"
            >
              <div className="flex flex-row items-center">
                <IoPersonSharp className="text-base text-gray-400" />
                <p className="ml-[10px] text-[14px] font-medium text-[#111928]">
                  My Profile
                </p>
              </div>
              <IoIosArrowForward />
            </Link>

            <Link
              to="/epuja/history"
              className="flex flex-row items-center justify-between mt-3 w-full p-1"
              onClick={() => setIsActive(TAB_CONSTANT.puja)}
            >
              <div className="flex flex-row items-center">
                <PiNoteFill className="text-base text-gray-400" />
                <p className="ml-[10px] text-[14px] font-medium text-[#111928]">
                  My Puja Bookings
                </p>
              </div>
              <IoIosArrowForward />
            </Link>

            <Link
              to="/coming-soon"
              className="flex flex-row items-center justify-between mt-3 w-full p-1"
            >
              <div className="flex flex-row items-center">
                <PiNoteFill className="text-base text-gray-400" />
                <p className="ml-[10px] text-[14px] font-medium text-[#111928]">
                  My Ramotsav Booking
                </p>
              </div>
              <IoIosArrowForward />
            </Link>

            <Link
              to="/coming-soon"
              className="flex flex-row items-center justify-between mt-3 w-full p-1"
            >
              <div className="flex flex-row items-center">
                <GiFireBowl className="text-base text-gray-400" />
                <p className="ml-[10px] text-[14px] font-medium text-[#111928]">
                  Book a Puja
                </p>
              </div>
              <IoIosArrowForward />
            </Link>
          </div>
        </div>
      </Popup>
    </div>
  );
};

export default ProfilePopup;

import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";

import emptyStack from "../../assets/img/empty_stack.svg";

const PujaHistory = () => {
  return (
    <div>
      <div className="p-4 border-b border-gray-300 flex flex-row items-center">
        <Link to="/epuja">
          <GoArrowLeft className="text-xl font-medium mr-3" />
        </Link>
        <p className="text-[18px] font-bold">Puja History</p>
      </div>

      <div className="h-96 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center">
          <img src={emptyStack} alt="empty history" />
          <p className="text-xl font-bold text-BLACK-100 mt-2">
            No Puja has been booked yet
          </p>
          <p className="text-lg font-normal text-gray-600 w-2/5 mt-2">
            Book your Puja online at Popular Temples of India. Panditji will
            take sankalp with your name and gotra during the Puja
          </p>
          <Link
            to="/epuja"
            className="rounded-3xl mt-4 py-3 px-4 bg-[#F18912] font-bold text-white"
          >
            Book Pooja Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PujaHistory;

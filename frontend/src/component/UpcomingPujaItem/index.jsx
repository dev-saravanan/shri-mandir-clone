import { AiFillHome } from "react-icons/ai";
import { BiSolidCalendarEvent } from "react-icons/bi";
import { TbArrowNarrowRight } from "react-icons/tb";
import { Link } from "react-router-dom";

const UpcomingPujaItem = (props) => {
  const { id, imgUrl, name, title, subTitle, address, date } = props;

  return (
    <Link to={`/epuja/${id}`} className="m-3">
      <li className="list-none p-2 border border-gray-400 rounded-lg w-[380px] h-auto">
        <img className="w-full rounded-lg" src={imgUrl} alt={name} />
        <p className="mt-2 text-center text-[12px] font-semibold rounded-sm text-[#D61F69] text-center">
          {name}
        </p>
        <h1 className="text-[22px] font-bold leading-[29.96px] mt-4 mb-1">
          {title}
        </h1>
        <p className="text-[16px] font-medium leading-[29.96px]">{subTitle}</p>

        <div className="flex flex-row items-start mt-4">
          <AiFillHome className="text-orange-500 text-xl" />
          <p className="ml-3 text-[16px] font-normal leading-[21.79px]">
            {address}
          </p>
        </div>

        <div className="flex flex-row items-start mt-2 text-xl">
          <BiSolidCalendarEvent className="text-orange-500" />
          <p className="ml-3 text-[16px] font-normal leading-[21.79px]">
            {date}
          </p>
        </div>

        <div className="flex flex-row justify-center items-center bg-green-600 p-2 mt-4 text-white rounded">
          <p className="text-base font-semibold">Participate</p>
          <TbArrowNarrowRight className="text-xl" />
        </div>
      </li>
    </Link>
  );
};

export default UpcomingPujaItem;

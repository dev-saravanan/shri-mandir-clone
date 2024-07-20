import { Link, useParams } from "react-router-dom";
import pujaImg from "../../assets/img/puja_img.webp";
import { AiFillHome } from "react-icons/ai";
import { BiSolidCalendarEvent } from "react-icons/bi";
import { TbArrowNarrowRight } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import PujaAbout from "../PujaAbout";
import PujaPackage from "../PujaPackage";

const pujaDetailsList = [
  {
    id: 1,
    imgUrl: pujaImg,
    name: "SATURDAY SHANI SHINGNAPUR SPECIAL",
    title: "Shani Saade Saati Peeda Shanti Mahapuja and Til Tel Abhishek",
    subTitle: "For Prevention of Misfortunes and Adversities",
    address: "Shree Shanidev Temple,  Shani Shingnapur, Maharashtra",
    date: "20 July, Saturday, Ashadha Shukla Chaturdashi",
  },
  {
    id: 2,
    imgUrl: pujaImg,
    name: "SATURDAY SHANI SHINGNAPUR SPECIAL",
    title: "Shani Saade Saati Peeda Shanti Mahapuja and Til Tel Abhishek",
    subTitle: "For Prevention of Misfortunes and Adversities",
    address: "Shree Shanidev Temple,  Shani Shingnapur, Maharashtra",
    date: "20 July, Saturday, Ashadha Shukla Chaturdashi",
  },
  {
    id: 3,
    imgUrl: pujaImg,
    name: "SATURDAY SHANI SHINGNAPUR SPECIAL",
    title: "Shani Saade Saati Peeda Shanti Mahapuja and Til Tel Abhishek",
    subTitle: "For Prevention of Misfortunes and Adversities",
    address: "Shree Shanidev Temple,  Shani Shingnapur, Maharashtra",
    date: "20 July, Saturday, Ashadha Shukla Chaturdashi",
  },
  {
    id: 4,
    imgUrl: pujaImg,
    name: "SATURDAY SHANI SHINGNAPUR SPECIAL",
    title: "Shani Saade Saati Peeda Shanti Mahapuja and Til Tel Abhishek",
    subTitle: "For Prevention of Misfortunes and Adversities",
    address: "Shree Shanidev Temple,  Shani Shingnapur, Maharashtra",
    date: "20 July, Saturday, Ashadha Shukla Chaturdashi",
  },
  {
    id: 5,
    imgUrl: pujaImg,
    name: "SATURDAY SHANI SHINGNAPUR SPECIAL",
    title: "Shani Saade Saati Peeda Shanti Mahapuja and Til Tel Abhishek",
    subTitle: "For Prevention of Misfortunes and Adversities",
    address: "Shree Shanidev Temple,  Shani Shingnapur, Maharashtra",
    date: "20 July, Saturday, Ashadha Shukla Chaturdashi",
  },
];

const PujaDetailedView = () => {
  const params = useParams();
  const { id } = params;

  const { imgUrl, name, title, subTitle, address, date } =
    pujaDetailsList[id - 1];

  return (
    <>
      <div className="flex flex-row items-center px-2 py-4 bg-orange-50">
        <Link to="/" className="hover:text-orange-500">
          Home
        </Link>
        <IoIosArrowForward className="text-orange-500 mx-3" />
        <Link to="/epuja" className="hover:text-orange-500">
          Sri Mandir Puja Seva
        </Link>
        <IoIosArrowForward className="text-orange-500 mx-3" />
        <Link to={`/epuja/${id}`} className="hover:text-orange-500">
          {title + " " + subTitle}
        </Link>
      </div>

      <li className="flex flex-row items-center list-none p-2 m-3">
        <div className="w-1/2 p-4">
          <img className="w-full rounded-lg" src={imgUrl} alt={name} />
        </div>

        <div className="w-1/2 p-4">
          <p className="mt-2 text-[12px] font-semibold rounded-sm text-[#D61F69]">
            {name}
          </p>
          <h1 className="text-[22px] font-bold leading-[29.96px] mt-4 mb-1">
            {title}
          </h1>
          <p className="text-[16px] font-medium leading-[29.96px]">
            {subTitle}
          </p>

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

          <Link className="flex flex-row justify-center items-center bg-green-600 p-2 mt-4 text-white rounded">
            <p className="text-base font-semibold">Select Puja Package</p>
            <TbArrowNarrowRight className="text-xl" />
          </Link>
        </div>
      </li>

      <PujaAbout />
      <PujaPackage pujaId={id} />
    </>
  );
};

export default PujaDetailedView;

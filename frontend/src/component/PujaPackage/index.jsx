import { TbArrowNarrowRight } from "react-icons/tb";
import Popup from "reactjs-popup";
import { FaArrowLeftLong } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import whatsappIcon from "../../assets/img/whatsapp_share.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const PujaPackageItem = (props) => {
  const [phoneNumber, setPhoneNumber] = useState("8612872971");
  const [name, setName] = useState("Iterate AI");

  const { pujaId, price, pujaType, packageDetails } = props;

  const nextBtnStyles =
    phoneNumber.length === 10 && name !== ""
      ? "bg-orange-500 text-white "
      : "bg-gray-300 text-gray-700";

  return (
    <Popup
      trigger={
        <button className="border border-orange-500 w-96 m-4 rounded-md">
          <div
            className="flex flex-col items-center mb-4 p-4 border-b"
            style={{ background: "linear-gradient(rgb(255, 238, 222), white)" }}
          >
            <h1 className="text-orange-500">{price}</h1>
            <p>{pujaType}</p>
            <p>{packageDetails}</p>
          </div>

          <ul className="text-left p-2">
            <li className="flex flex-row items-start my-2">
              Pandit ji will call out your name and gotra during the puja
              sankalp.
            </li>

            <li className="flex flex-row items-start my-2">
              Opt for additional offerings like Vastra Daan, Anna Daan, Gau
              Seva, or Deep Daan to be done in your name.
            </li>

            <li className="flex flex-row items-star my-2">
              Upon completion, a video of your puja and offering will be shared
              with you on your registered WhatsApp number or can be found in
              your booking history within 3-4 days.
            </li>

            <li className="flex flex-row items-start my-2">
              Sacred Tirth Prasad will be sent to your address within 8-10 days.
            </li>
          </ul>

          <div className="flex flex-row justify-center items-center bg-green-600 p-2 mt-4 m-2 text-white rounded">
            <p className="text-base font-semibold">Participate</p>
            <TbArrowNarrowRight className="text-xl" />
          </div>
        </button>
      }
      modal
      overlayStyle={{ background: "rgba(0,0,0,0.5)" }}
    >
      <div className="bg-white rounded-xl h-auto w-[350px]">
        <div className="flex flex-row items-center px-5 py-2 border-b">
          <FaArrowLeftLong className="text-base" />
          <h1 className="text-xl ml-2 font-bold">Fill your details for Puja</h1>
        </div>

        <div className="p-5">
          <h1 className="block text-base font-bold text-gray-900">
            Enter Your Whatsapp Mobile Number
          </h1>
          <p className="text-xs font-normal text-[#707070] mt-2">
            Your Puja booking updates like Puja Photos, Videos and other details
            will be sent on WhatsApp on below number.
          </p>

          <label className="text-[8px]">Your mobile number</label>
          <div className="flex flex-row items-center border rounded-md p-2">
            <img
              className="w-[20px] h-[20px]"
              src={whatsappIcon}
              alt="whatsapp"
            />
            <p className="font-semibold text-gray-400 mx-2">+91</p>
            <input
              value={phoneNumber}
              className="w-3/4 outline-none"
              type="text"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button className="flex items-center justify-center bg-blue-600 text-white rounded-full h-5 w-5">
              <RxCross2 className="text-xs" />
            </button>
          </div>
          {phoneNumber.length !== 10 ? (
            <p className="text-sm font-normal text-red-400  mb-4">
              Please Enter Your Phone Number
            </p>
          ) : null}

          <label className="text-base font-bold">Enter Your Name</label>
          <div className="flex flex-row items-center border rounded-md p-2 mt-2">
            <input
              value={name}
              className="w-full outline-none"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
            <button className="flex items-center justify-center bg-blue-600 text-white rounded-full h-5 w-5">
              <RxCross2 className="text-xs" />
            </button>
          </div>
          {name.length === 0 ? (
            <p className="text-sm font-normal text-red-400">
              Please Enter Your Name
            </p>
          ) : null}

          <Link to={`/epuja/cart/${pujaId}`}>
            <div
              className={`flex flex-row justify-center items-center ${nextBtnStyles} p-2 mt-4 rounded`}
            >
              <p className="text-base font-semibold">Next</p>
            </div>
          </Link>
        </div>
      </div>
    </Popup>
  );
};

const PujaPackage = (props) => {
  const { pujaId } = props;

  return (
    <div>
      <h1 className="m-0 text-xl font-bold text-BLACK-90">
        Select puja package
      </h1>

      <PujaPackageItem
        pujaId={pujaId}
        price="₹ 851"
        pujaType="Individual Puja"
        packageDetails="Package for 1 person"
      />
      <PujaPackageItem
        pujaId={pujaId}
        price="₹ 1251"
        pujaType="Partner Puja"
        packageDetails="Package for 2 people"
      />
      <PujaPackageItem
        pujaId={pujaId}
        price="₹ 2001"
        pujaType="Family + Bhog"
        packageDetails="Package for 4 people"
      />
      <PujaPackageItem
        pujaId={pujaId}
        price="₹ 3001"
        pujaType="Joint Family + Bhog + Flower Basket"
        packageDetails="Package for 6 people"
      />
    </div>
  );
};

export default PujaPackage;

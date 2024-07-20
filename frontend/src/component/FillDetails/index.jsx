import { GoArrowLeft } from "react-icons/go";
import whatsappIcon from "../../assets/img/whatsapp_share.svg";
import { useState } from "react";

const FillDetails = (props) => {
  const { handleNext } = props;
  const [phoneNumber, setPhoneNumber] = useState("8612872971");
  const [name, setName] = useState("Iterate AI");
  const [gotra, setGotra] = useState("");

  return (
    <div>
      <div className="flex flex-row items-center p-2 border-b border-gray-200">
        <GoArrowLeft className="text-xl" />
        <h1 className="text-xl font-bold mx-2">Enter details for your puja</h1>
      </div>

      <div className="p-4  w-1/2">
        <div className="border-b-8 border-gray-100 py-4">
          <h1 className="text-[20px] font-bold text-[#242424]">
            Your WhatsApp Number
          </h1>
          <p className="text-[16px] font-normal mt-1 text-[#707070]">
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
              className="w-full outline-none"
              type="text"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          {phoneNumber.length !== 10 ? (
            <p className="text-sm font-normal text-red-400  mb-4">
              Please Enter Your Phone Number
            </p>
          ) : null}

          <div className="flex flex-row items-center my-2">
            <input
              className="outline-none border-0 rounded-sm w-5 h-5"
              type="checkbox"
            />
            <label className="mx-2">
              I have a different number for calling
            </label>
          </div>
        </div>

        <div className="border-b-8 border-gray-100 py-6">
          <label className="text-[20px] font-bold text-[#242424]">
            Name of member participating in Puja
          </label>
          <p className="text-[16px] font-normal mt-1 text-[#707070]">
            Panditji will take these names along with gotra during the puja.
          </p>

          <div className="flex flex-row items-center border rounded-md p-2 mt-2">
            <input
              value={name}
              className="w-full outline-none"
              type="text"
              placeholder="First member name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {name.length === 0 ? (
            <p className="text-sm font-normal text-red-400">
              Please Enter Your Name
            </p>
          ) : null}
        </div>

        <div className="">
          <h1 className="text-[20px] font-bold text-[#242424]">
            Fill participant’s gotra
          </h1>
          <p className="text-[16px] font-normal mt-1 text-[#707070]">
            Gotra will be recited during the puja.
          </p>

          <input
            className="border border-gray-200 rounded p-2 my-2 outline-none"
            value={gotra}
            type="text"
            placeholder="Gotra"
          />

          <div className="flex flex-row items-center">
            <input
              className="outline-none border-0 rounded-sm w-5 h-5"
              onChange={(e) =>
                setGotra((prev) => {
                  if (gotra === "") {
                    return "Kashyap";
                  } else {
                    return "";
                  }
                })
              }
              type="checkbox"
            />
            <label className="mx-2"> I dont know my Gotra</label>
          </div>
        </div>

        <button
          onClick={handleNext}
          className="flex flex-row justify-center items-center bg-orange-600 p-2 mt-4 text-white rounded w-full"
        >
          Proceed to book
        </button>
      </div>
    </div>
  );
};

export default FillDetails;

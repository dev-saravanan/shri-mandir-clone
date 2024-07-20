import { useParams } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useState } from "react";
import ReviewBooking from "../ReviewBooking";
import FillDetails from "../FillDetails";
import MakePayment from "../MakePayment";
import BookingCompleted from "../BookingCompleted";

const pujaBookingSteps = [
  {
    name: "Add Details",
  },
  {
    name: "Review Booking",
  },
  {
    name: "Fill Name , Gotra & Address",
  },
  {
    name: "Make Payment",
  },
];

const PujaCart = () => {
  const [currentStep, setCurrentStep] = useState(2);
  const [isComplete, setIsComplete] = useState(false);

  const params = useParams();
  const { pujaId } = params;

  let ActiveComponent = () => <ReviewBooking />;

  const handleNext = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === pujaBookingSteps.length) {
        setIsComplete(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };

  switch (currentStep) {
    case 2:
      ActiveComponent = () => <ReviewBooking handleNext={handleNext} />;
      break;
    case 3:
      ActiveComponent = () => <FillDetails handleNext={handleNext} />;
      break;
    case 4:
      ActiveComponent = () => <MakePayment handleNext={handleNext} />;
      break;
    default:
      null;
  }

  return (
    <>
      <div className="flex flex-row items-center bg-gray-100 p-4">
        {pujaBookingSteps.map((currStep, index) => {
          let styleColor = "gray-400";
          currentStep === index + 1 && !isComplete
            ? (styleColor = "blue-500")
            : null;

          return (
            <div className="flex flex-row items-center" key={currStep.name}>
              <div
                className={`flex flex-row items-center justify-center text-xs font-medium text-${styleColor} border border-${styleColor} ${
                  currentStep > index + 1 || isComplete
                    ? "bg-green-500 text-white"
                    : ""
                } rounded-full w-6 h-6`}
              >
                {currentStep > index + 1 || isComplete ? (
                  <span>&#10003;</span>
                ) : (
                  index + 1
                )}
              </div>
              <p className={`text-xs mx-1.5 font-medium text-${styleColor}`}>
                {currStep.name}
              </p>
              {index + 1 === pujaBookingSteps.length ? null : (
                <MdKeyboardDoubleArrowRight className="text-gray-500 mx-2" />
              )}
            </div>
          );
        })}
      </div>

      {isComplete ? <BookingCompleted /> : <ActiveComponent />}
    </>
  );
};

export default PujaCart;

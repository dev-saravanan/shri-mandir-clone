const ReviewBooking = (props) => {
  const { handleNext } = props;

  return (
    <div className="w-1/2 p-4">
      <h1 className="text-[18px] font-bold">Bill Details</h1>

      <div className="flex flex-row justify-between items-center my-2">
        <p className="font-medium text-base  text-gray-500 w-3/4">
          Individual Puja
        </p>
        <p className="font-medium text-base text-gray-500 w-3/4">₹ 851.0</p>
      </div>

      <div className="flex flex-row justify-between items-center my-2">
        <p className="font-medium text-base  text-gray-500 w-3/4">Total</p>
        <p className="font-medium text-base text-gray-500 w-3/4">₹ 851.0</p>
      </div>

      <button
        onClick={handleNext}
        className="flex flex-row justify-between items-center w-full bg-green-500 p-4 rounded-xl"
      >
        <div className="text-start">
          <p className="font-medium text-base  text-light">Individual Puja</p>
          <p className="font-medium text-base text-light">₹ 851.0</p>
        </div>

        <p font-medium text-base text-light>
          Continue
        </p>
      </button>
    </div>
  );
};

export default ReviewBooking;

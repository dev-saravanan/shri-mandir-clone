const MakePayment = (props) => {
  const { handleNext } = props;

  return (
    <div>
      <h1 className="text-[20px] font-bold text-[#242424]">Make Payment</h1>

      <button
        onClick={handleNext}
        className="flex flex-row justify-center items-center bg-orange-600 p-2 mt-4 text-white rounded w-1/2"
      >
        Pay
      </button>
    </div>
  );
};

export default MakePayment;

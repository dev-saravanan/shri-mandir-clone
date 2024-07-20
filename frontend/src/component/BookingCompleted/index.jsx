const BookingCompleted = () => {
  return (
    <div className="h-96 flex flex-col items-center justify-center">
      <div className="flex items-center justify-center bg-green-500 w-12 h-12 rounded-full m-3">
        <span className="text-2xl font-bold text-white">&#10003;</span>
      </div>

      <h1 className="text-[20px] font-bold text-[#242424]">
        Booking Completed
      </h1>
    </div>
  );
};

export default BookingCompleted;

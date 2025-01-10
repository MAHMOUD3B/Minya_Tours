import { FaCheckCircle } from "react-icons/fa";

const Popup = () => {
  return (
    <div className="fixed z-50 top-0 left-0 w-[100vw] h-[100vh] bg-[rgba(0,0,0,.4)] backdrop-blur-lg">
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-5 bg-white text-ceial rounded-xl flex items-center flex-col gap-4">
        <p className="text-[30px] md:text-[44px] text-center">Redeemed Successfully</p>
        <div className="text-[35px] md:text-[45px]">
          <FaCheckCircle />
        </div>
      </div>
    </div>
  );
};

export default Popup;

import Navbar from "../components/Navbar";
import Popup from "../components/Popup";
import RedeemCard from "../components/RedeemCard";

const Redeem = () => {
  return (
    <div className="bg-lightBage w-[100vw] min-h-[100vh]">
      <Navbar />
      <div className="p-10 pt-32 flex items-center h-full">
        <div className="row g-4 ">
          <div className="col col-sm-12 col-md-6 col-lg-3 ">
            <RedeemCard redeemCardInfo={"n"} />
          </div>
          <div className="col col-sm-12 col-md-6 col-lg-3 ">
            <RedeemCard redeemCardInfo={"n"} />
          </div>
          <div className="col col-sm-12 col-md-6 col-lg-3 ">
            <RedeemCard redeemCardInfo={"n"} />
          </div>
          <div className="col col-sm-12 col-md-6 col-lg-3 ">
            <RedeemCard redeemCardInfo={"n"} />
          </div>
        </div>
      </div>
      <Popup />
    </div>
  );
};

export default Redeem;

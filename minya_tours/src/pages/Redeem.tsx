import Navbar from "../components/Navbar";
import RedeemCard from "../components/RedeemCard";

const Redeem = () => {
  return (
    <div className="bg-lightBage w-[100vw] h-fit">
      <Navbar />
      <div className="absolute p-10 flex items-center min-h-full">
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
    </div>
  );
};

export default Redeem;

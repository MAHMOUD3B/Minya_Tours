import { Link } from "react-router-dom";
import DestinationCard from "../components/DestinationCard";
import Navbar from "../components/Navbar";

const Destination = () => {
  return (
    <div className="bg-white w-full min-h-[100vh]">
      <Navbar />
      <div className="p-10 pt-32 flex items-center h-full">
        <div className="row g-4 ">
          <div className="col col-sm-12 col-md-6 ">
            <DestinationCard />
          </div>
          <div className="col col-sm-12 col-md-6 ">
            <DestinationCard />
          </div>
          <div className="col col-sm-12 col-md-6 ">
            <DestinationCard />
          </div>
          <div className="col col-sm-12 col-md-6 ">
            <DestinationCard />
          </div>
        </div>
      </div>
      <Link
        to={"questions"}
        className="btn bg-darkRed text-white hover:bg-broun hover:text-lightYellow text-[18px] lg:text-[24px] block mx-auto mb-10 w-fit rounded-lg"
      >
        Questions
      </Link>
    </div>
  );
};

export default Destination;

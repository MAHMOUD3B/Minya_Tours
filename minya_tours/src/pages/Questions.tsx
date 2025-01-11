import Choise from "../components/Choise";
import Navbar from "../components/Navbar";

const Questions = () => {
  return (
    <div className="bg-lightBage h-[100vh] w-full flex items-center justify-center">
      <Navbar />
      <div className="w-[100%] px-4 lg:px-8 pt-5">
        <h3 className="text-[22px] md:text-[26px] lg:text-[36px] mb-4 text-darkGray">
          This is a question content ?
        </h3>
        <ul className="rounded-xl border border-darkGray shadow px-3 md:px-4 lg:px-5 py-4 md:py-5 lg:py-6  flex items-center justify-center gap-4 flex-col bg-white">
          <Choise />
          <Choise />
          <Choise />
          <Choise />
        </ul>
      </div>
      {/* <h1 className="text-center text-broun text-[24px] md:text-[30px] lg:text-[40px]">Congrats Questions are ended</h1> */}
    </div>
  );
};

export default Questions;

import { useDispatch } from "react-redux";
import { setPopupStatus } from "../RTK/Slices/popup";

const RedeemCard = ({ redeemCardInfo }) => {
  const dispatch = useDispatch();
  const { id, title, description, image, points } = redeemCardInfo;
  return (
    <div
      id={id}
      className="rounded-xl border bg-white border-black overflow-hidden hover:translate-y-[-10px] hover:shadow-lg transition-all duration-300 "
    >
      <div className="card w-full relative">
        <img className="card-img-top" src={image} alt={title} />
        <div className="card-body">
          <span className="absolute top-[5px] right-[5px] z-10 bg-black text-lightGold font-bold rounded-xl py-1 px-2">
            {points}
          </span>

          <h5 className="card-title text-lightGold text-[22px] lg:text-[30px] text-nowrap">
            {title}
          </h5>
          <p className="card-text text-black">{description}</p>
          <a
            href="#"
            onClick={() => dispatch(setPopupStatus(true))}
            className="rounded-lg btn mt-3 md:mt-4 lg:text-[18px] bg-lightYellow hover:bg-lightGold w-[80%] block mx-auto "
          >
            Redeem
          </a>
        </div>
      </div>
    </div>
  );
};

export default RedeemCard;

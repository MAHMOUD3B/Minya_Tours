const RedeemCard = ({redeemCardInfo}) => {
  return (
    <div className="rounded-xl border border-black overflow-hidden hover:translate-y-[-10px] hover:shadow-lg transition-all duration-300">
      <div className="card w-full ">
        <img
          className="card-img-top"
          src="../../public/assets/images/mallawi/1.jpeg"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title text-lightGold lg:text-[36px]">Card title</h5>
          <p className="card-text text-black">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn mt-3 md:mt-4 lg:text-[18px] bg-lightYellow hover:bg-lightGold w-[80%] d-block mx-auto">
            Redeem
          </a>
        </div>
      </div>
    </div>
  );
};

export default RedeemCard;

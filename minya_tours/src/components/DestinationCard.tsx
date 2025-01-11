const DestinationCard = () => {
  return (
    <div className="rounded-xl border border-black overflow-hidden hover:translate-y-[-10px] hover:shadow-lg transition-all duration-300">
      <div className="card w-full ">
        <img
          className="card-img-top"
          src="../../public/assets/images/mallawi/1.jpeg"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title text-ovalGreen text-[24px] lg:text-[36px]">
            Card title
          </h5>
          <p className="card-text text-black text-[18px] lg:text-[28px]">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;

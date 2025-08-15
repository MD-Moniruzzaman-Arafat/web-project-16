const FeaturedPropertiesCard = ({ data }) => {
  return (
    <>
      <div className="card  shadow-sm shadow-[#262626]">
        <figure className="p-2">
          <img className="rounded-xl" src={data?.image} alt="Shoes" />
        </figure>
        <div className="card-body px-2">
          <h2 className="card-title">{data?.estate_title}</h2>
          <p>{data.description.slice(0, 100)} ....</p>
          <div className="flex items-center gap-2 flex-wrap my-2 justify-center">
            {data?.facilities.map((f) => (
              <span
                key={f}
                className="shadow-xs shadow-[#262626] bg-[#1A1A1A] px-3 py-1 rounded-full text-xs font-extralight"
              >
                {f}
              </span>
            ))}
          </div>
          <div className="card-actions items-center justify-between">
            <span>
              <p className="text-xs">Price</p>
              <h3 className="font-bold">{data?.price}</h3>
            </span>
            <button className="btn bg-[#703BF7] text-white border-0 shadow-none text-xs">
              View Property Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedPropertiesCard;

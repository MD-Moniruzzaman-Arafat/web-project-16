import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const ProductDetailsPage = () => {
  const result = useLoaderData();
  const [detailsInfo, setDetailsInfo] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    if (result && id) {
      const details = result.find((data) => String(data.id) === String(id));
      setDetailsInfo(details);
    }
  }, [result, id]); // Only run when result or id changes
  return (
    <>
      <div className="container mx-auto text-white p-3 my-10">
        <div className="card  shadow-sm shadow-[#262626]">
          <figure className="p-2">
            <img className="rounded-xl" src={detailsInfo?.image} alt="Shoes" />
          </figure>
          <div className="card-body px-2">
            <h2 className="card-title">{detailsInfo?.estate_title}</h2>
            <h4>{detailsInfo?.segment_name}</h4>
            <p>{detailsInfo?.description}</p>
            <div className="flex items-center gap-2 flex-wrap my-2 justify-center">
              {detailsInfo?.facilities.map((f) => (
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
                <h3 className="font-bold">{detailsInfo?.price}</h3>
              </span>
              <span>
                <p className="text-xs">Area</p>
                <h3 className="font-bold">{detailsInfo?.area}</h3>
              </span>
              <span>
                <p className="text-xs">Location</p>
                <h3 className="font-bold">{detailsInfo?.location}</h3>
              </span>
              <span>
                <p className="text-xs">Status</p>
                <h3 className="font-bold">{detailsInfo?.status}</h3>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPage;

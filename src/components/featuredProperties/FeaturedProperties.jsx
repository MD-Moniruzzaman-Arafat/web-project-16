import { useLoaderData } from "react-router";
import FeaturedPropertiesCard from "./FeaturedPropertiesCard";

const FeaturedProperties = () => {
  const result = useLoaderData();
  console.log(result);
  return (
    <>
      <div className="container mx-auto my-20 text-white p-2 lg:p-0">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="max-w-3xl">
            <h1 className="font-bold text-3xl">Featured Properties</h1>
            <p className="text-xs mt-2">
              Explore our handpicked selection of featured properties. Each
              listing offers a glimpse into exceptional homes and investments
              available through Estatein. Click "View Details" for more
              information.
            </p>
          </div>
          <div className="">
            <button className="btn text-xs bg-[#1A1A1A] text-white">
              View All Properties
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-20">
          {result.map((data) => (
            <FeaturedPropertiesCard key={data?.id} data={data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedProperties;

import { useLoaderData } from "react-router";
import FeaturedPropertiesCard from "../components/featuredProperties/FeaturedPropertiesCard";

const AllPropertiesPage = () => {
  const result = useLoaderData();
  return (
    <>
      <div className="container mx-auto my-10 grid grid-cols-1 lg:grid-cols-3 gap-5 text-white">
        {result.map((data) => (
          <FeaturedPropertiesCard key={data.key} data={data} />
        ))}
      </div>
    </>
  );
};

export default AllPropertiesPage;

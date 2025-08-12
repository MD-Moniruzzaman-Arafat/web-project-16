import heroImg from "../../assets/hero/Image.png";
import heroImgBg from "../../assets/hero/Abstract Design.png";
import sticker from "../../assets/hero/Sub Container.png";

const Hero = () => {
  return (
    <>
      <div className="container  mx-auto text-white flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:max-w-2xl mt-15 md:mt-0  m-3 md:m-0">
          <h1 className="text-2xl md:text-5xl font-bold">
            Discover Your Dream Property with Estatein
          </h1>
          <p className="py-6 text-[#999]">
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.
          </p>
          <div className="flex flex-col md:flex-row  gap-2 items-center">
            <button className="btn w-full md:w-auto btn-outline border-[#262626]">
              Learn More
            </button>
            <button className="btn w-full md:w-auto btn-primary border-0 shadow-none">
              Browse Properties
            </button>
          </div>
          <div className="my-5 grid grid-cols-2 md:grid-cols-3 gap-3 md:max-w-xl">
            <div className="bg-[#1A1A1A] border border-[#262626] px-2 py-5 rounded-lg text-center md:text-justify">
              <h3 className="font-bold text-xl">200+</h3>
              <p className="text-[#999] text-xs">Happy Customers</p>
            </div>
            <div className="bg-[#1A1A1A] border border-[#262626] px-2 py-5 rounded-lg text-center md:text-justify">
              <h3 className="font-bold text-xl">10k+</h3>
              <p className="text-[#999] text-xs">Properties For Clients</p>
            </div>
            <div className="bg-[#1A1A1A] border border-[#262626] px-2 py-5 rounded-lg col-span-2 md:col-span-1 text-center md:text-justify">
              <h3 className="font-bold text-xl">16+</h3>
              <p className="text-[#999] text-xs">Years of Experience</p>
            </div>
          </div>
        </div>
        <div
          className="bg-[#1A1A1A] m-3 rounded-2xl md:m-0 md:rounded-none relative "
          style={{
            backgroundImage: `url(${heroImgBg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <img
            className="absolute -bottom-15 md:bottom-auto md:top-20 md:right-135 2xl:right-155"
            src={sticker}
            alt="sticker"
          />
          <img
            className="w-full rounded-2xl md:rounded-none"
            src={heroImg}
            alt="heroImg"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;

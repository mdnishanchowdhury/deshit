import banner1 from '../../assets/Banner/banner.jpg';
import mobile2 from '../../assets/Banner/mobile.png';

function Banner() {
  return (
    <section
      className="relative h-[935px] flex items-center px-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${banner1})` }}
    >
      {/* Overlay (optional for better text visibility) */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row justify-between w-full max-w-6xl mx-auto gap-8">

        {/* Left Text */}
        <div className="text-black md:text-left text-center max-w-lg pt-[87px] space-y-7">
          <h2 className="text-6xl md:text-5xl text-white font-bold">
            Outstanding Business
          </h2>
          <h1 className="text-6xl md:text-3xl font-normal text-white">
            Needs Better Apps
          </h1>
          <p className="text-[18px] md:text-lg font-normal text-[#FFFFFF]">
            We build impactful Apps
          </p>

          <button className="bg-[#634C9F] hover:bg-[#513a88] transition-colors px-6 py-2 rounded-md text-white font-medium text-sm md:text-base">
            Contact Us
          </button>
        </div>

        {/* Image */}
        <div className="mt-[148px] md:mt-0">
          <img
            src={mobile2}
            alt="Mobile App Preview"
            className="w-[400px] md:w-80 lg:w-96 h-[729px] pt-9 "
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;

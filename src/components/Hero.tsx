import img25 from "../imports/AdhaneFoodSolutions.tsx";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-24 pb-16 sm:pt-32 lg:pt-40 lg:pb-24"
    >
      {/* Center the entire content */}
      <div className="max-w-[1152px] mx-auto px-6 sm:px-8">
        <div className="grid items-center justify-center gap-12 lg:grid-cols-2">
          
          {/* Left Content */}
          <div className="flex flex-col space-y-6 text-center lg:text-left items-center lg:items-start">
            <h1 className="font-poppins font-bold text-[#2E2E2E] tracking-[0.09px] text-[32px] sm:text-[44px] md:text-[52px] lg:text-[58px] leading-[42px] sm:leading-[54px] md:leading-[62px] lg:leading-[68px] w-full max-w-[614.944px]">
              <span className="block">Delivering Complete Food industry Solutions</span>
              <span className="block text-[#00F510]">with Innovation & Expertise.</span>
            </h1>

            <p className="font-poppins text-[#676767] text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] font-normal leading-[26px] sm:leading-[28px] md:leading-[30px] w-full max-w-[622.515px]">
              At Adhane Food Solutions, we help food businesses build safe, sustainable, and profitable operations through compliance, innovation, and turnkey expertise — reducing risk, speeding time-to-market, and boosting product value.
            </p>

            <div className="flex justify-center lg:justify-start w-full">
              <button className="rounded-full bg-[#00F510] px-8 py-4 text-white font-poppins text-[18px] font-semibold transition-all hover:bg-[#00d010] hover:shadow-lg">
                Get in Touch
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] rounded-[32px] bg-[#D9D9D9] overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800&q=80"
                alt="Food solutions"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

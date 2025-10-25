import { ImageWithFallback } from "./figma/ImageWithFallback";
import ctaImage from "../assets/CTA.png"; // ✅ Your image

export default function CTASection() {
  return (
    <section className="flex justify-center py-16 lg:py-20 bg-white">
      <div
        className="relative flex flex-col lg:flex-row justify-between items-center rounded-[20px] bg-[#00F510] px-6 lg:px-16"
        style={{
          width: "100%",
          maxWidth: "1152px",
          height: "auto",
          minHeight: "350px",
        }}
      >
        {/* Right Image Box */}
        <div
          className="rounded-[20px] overflow-hidden bg-white flex items-center justify-center mt-6 lg:mt-0 mb-8 lg:mb-0 lg:order-2"
          style={{
            width: "250px",
            height: "250px",
          }}
        >
          <ImageWithFallback
            src={ctaImage}
            alt="CTA Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Left Content */}
        <div className="flex flex-col justify-center text-white text-center lg:text-left lg:order-1" style={{ maxWidth: "600px" }}>
          <h2
            className="font-inter font-bold text-white mb-6"
            style={{
              fontSize: "32px",
              lineHeight: "1.2",
            }}
          >
            Ready to empower
            <br />
            your tender teams?
          </h2>

          {/* Buttons */}
          <div className="flex flex-col lg:flex-row gap-4 mt-10 items-center lg:items-start">
            <button className="w-full lg:w-auto rounded-full bg-white px-6 py-4 text-black font-semibold hover:bg-gray-100 transition-all shadow-sm">
              Book A Demo
            </button>
            <button className="w-full lg:w-auto rounded-full border border-white bg-transparent px-6 py-4 text-white font-semibold hover:bg-white hover:text-black transition-all mb-6 lg:mb-0">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

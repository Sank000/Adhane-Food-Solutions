import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function AboutUs() {
  return (
    <section id="about" className="bg-[#a4ffaa] py-16 lg:py-24">
      {/* ✅ max-width 1152px and centered */}
      <div className="mx-auto w-full max-w-[1152px] px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Image */}
          <div className="relative order-2 lg:order-1 flex justify-center">
            <div className="w-full max-w-[450px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[500px] aspect-square rounded-[20px] bg-[#D9D9D9] overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80"
                alt="About Us"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <h2 className="text-[#000000] font-poppins font-bold text-[32px] sm:text-[36px] lg:text-[40px] leading-tight">
              About Us
            </h2>

            <p className="text-[#000000] font-poppins text-[16px] sm:text-[18px] lg:text-[20px] leading-relaxed max-w-[600px]">
              Adhane Food Solutions is a professional consultancy and turnkey 
              project specialist dedicated to transforming the food industry through compliance, 
              innovation, and technical excellence. We partner with businesses of all sizes — from 
              startups to established brands — to deliver custom-built, sustainable, 
              and scalable food manufacturing solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

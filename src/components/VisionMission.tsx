import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function VisionMission() {
  return (
    <section className="bg-white py-16 lg:py-24 flex justify-center">
      <div className="flex flex-col w-full max-w-[1152px] gap-[70px] px-4 sm:px-6 lg:px-0">

        {/* Our Vision */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center w-full lg:w-auto">
            <div className="w-full max-w-[500px] aspect-square rounded-[20px] bg-[#D9D9D9] overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80"
                alt="Our Vision"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-6 items-center lg:items-start text-center lg:text-left w-full lg:w-auto">
            <h2 className="text-[#000000] font-['Inter'] text-[40px] font-bold leading-normal">
              Our Vision
            </h2>

            <p className="text-[#000000] font-['Inter'] text-[20px] font-light leading-normal max-w-[600px]">
              To become a global leader in driving transformation within the food industry through safety, innovation, and sustainability.
We aspire to create a world where every food business — from startups to global brands — operates responsibly, efficiently, and with a deep commitment to public health and environmental stewardship.
By continuously innovating and setting new benchmarks in compliance, quality, and product excellence, we aim to shape the future of food and inspire trust, transparency, and progress across the global food ecosystem.
            </p>
          </div>
        </div>

        {/* Our Mission */}
        <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center w-full lg:w-auto">
            <div className="w-full max-w-[500px] aspect-square rounded-[20px] bg-[#D9D9D9] overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800&q=80"
                alt="Our Mission"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-6 items-center lg:items-start text-center lg:text-left w-full lg:w-auto">
            <h2 className="text-[#000000] font-['Inter'] text-[40px] font-bold leading-normal">
              Our Mission
            </h2>

            <p className="text-[#000000] font-['Inter'] text-[20px] font-light leading-normal max-w-[600px]">
              To empower food businesses with end-to-end solutions that are technically sound, compliant, and innovation-driven.
We are dedicated to helping organizations achieve operational excellence, regulatory confidence, and consumer satisfaction by combining our deep industry expertise with practical, measurable strategies.
Through collaboration, technology, and a strong commitment to continuous improvement, we strive to make food operations safer, smarter, and more sustainable — enabling our partners to thrive in a competitive and ever-evolving marketplace.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

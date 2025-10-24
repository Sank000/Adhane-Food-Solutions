"use client";
import { 
  ShieldCheck, 
  Settings, 
  FlaskRound, 
  CheckCircle, 
  BarChart3, 
  Leaf 
} from "lucide-react"; // ✅ Importing icons
import { useEffect } from "react";

export default function Services() {
  const services = [
    {
      title: "Food Safety & Compliance",
      description:
        "We help you meet all regulatory standards, ensuring food safety, legal compliance, and consumer trust.",
      icon: ShieldCheck,
    },
    {
      title: "Operational Optimization",
      description:
        "Streamline your processes to improve efficiency, reduce costs, and enhance productivity across your operations.",
      icon: Settings,
    },
    {
      title: "Product Development & Innovation",
      description:
        "Turn ideas into market-ready products with our expert guidance in formulation, testing, and innovation.",
      icon: FlaskRound,
    },
    {
      title: "Quality Assurance Systems",
      description:
        "Build strong quality systems to maintain consistency, traceability, and excellence in every batch.",
      icon: CheckCircle,
    },
    {
      title: "Business Growth Support",
      description:
        "Empowering your brand with strategic insights, scalability solutions, and go-to-market strategies for sustainable growth.",
      icon: BarChart3,
    },
    {
      title: "Sustainability & Nutrition",
      description:
        "Integrating eco-friendly practices and balanced nutrition to create responsible and future-ready food products.",
      icon: Leaf,
    },
  ];

  return (
    <section id="services" className="bg-white py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1152px] px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2e2e2e] font-poppins">
            Our Services
          </h2>
          <p className="mt-3 text-[#676767] text-base sm:text-lg">
            Discover the benefits we provide to make your experience seamless.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group rounded-2xl bg-white p-5 sm:p-6 md:p-8 
                           shadow-[0_0_8px_rgba(0,0,0,0.1)] transition-all duration-300 
                           hover:-translate-y-2 hover:shadow-[0_0_15px_4px_rgba(0,245,16,0.6)]"
              >
                {/* Icon */}
                <div className="mb-4 sm:mb-6 flex justify-center">
                  <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-[#e8ffe9]">
                    <Icon className="h-10 w-10 sm:h-12 sm:w-12 text-[#00F510]" strokeWidth={1.8} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="mb-2 sm:mb-3 text-center text-base sm:text-xl font-semibold text-[#2e2e2e] font-poppins">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-center text-[#676767] text-sm sm:text-base leading-relaxed font-poppins">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Button */}
        <div className="mt-12 flex justify-center">
          <button className="rounded-full bg-[#00f510] px-8 py-3 text-white font-medium 
                             transition-all duration-300 hover:bg-[#00d010] hover:shadow-lg">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}

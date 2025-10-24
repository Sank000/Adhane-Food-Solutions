"use client";
import { useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// ✅ Import local partner logos
import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.png";
import partner3 from "../assets/partner3.png";
import partner4 from "../assets/partner4.png";
import partner5 from "../assets/partner5.png";

export default function Stats() {
  const stats = [
    { id: "counter1", end: 20, suffix: "+", label: "Completed Projects" },
    { id: "counter2", end: 200, suffix: "+", label: "Products Developed" },
    { id: "counter3", end: 20, suffix: "+", label: "Years of Combined Expertise" },
  ];

  const partners = [partner1, partner2, partner3, partner4, partner5];

  useEffect(() => {
    const animateValue = (id, end, duration, suffix = "") => {
      const el = document.getElementById(id);
      if (!el) return;
      let start = 0;
      const startTime = performance.now();

      const step = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        el.textContent = Math.floor(progress * end + start) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          stats.forEach((s) => animateValue(s.id, s.end, 1500, s.suffix));
          observer.disconnect();
        }
      });
    });

    const section = document.querySelector("#trusted-partners");
    if (section) observer.observe(section);
  }, []);

  return (
    <section
      id="trusted-partners"
      className="bg-white py-16 lg:py-20 font-inter flex justify-center items-center"
    >
      <div className="w-full max-w-[1152px] flex flex-col items-center px-4 lg:px-8">
        {/* Heading */}
        <h2 className="text-[38px] font-semibold text-black mb-8 text-center md:text-[32px] sm:text-[26px]">
          Trusted by our Partners
        </h2>

        {/* Partner Logos */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-10">
          {partners.map((partner, i) => (
            <div
              key={i}
              className="bg-[#f4f4f4] rounded-xl p-3 sm:p-2 flex items-center justify-center"
            >
              <ImageWithFallback
                src={partner}
                alt={`Partner ${i + 1}`}
                className="h-10 sm:h-8 object-contain"
              />
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="bg-[#00F510] text-white rounded-[14px] w-full flex flex-wrap justify-around items-center gap-6 px-6 py-8">
          {/* ✅ Achievements Title (centered on mobile, left on desktop) */}
          <div className="text-center md:text-left min-w-[200px] w-full md:w-auto">
            <p className="text-lg font-semibold leading-tight">
              Achievements:<br />
            </p>
          </div>

          {/* Stats */}
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center min-w-[140px]"
            >
              <p
                id={stat.id}
                className="text-[40px] font-bold leading-none"
              >
                0
              </p>
              <p className="text-base font-medium mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

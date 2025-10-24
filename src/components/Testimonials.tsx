import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

// ✅ Import local images
import customer1 from "../assets/customersaresaying1.png";
import customer2 from "../assets/customersaresaying2.png";
import customer3 from "../assets/customersaresaying3.png";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Flavosys",
      text: "Adhane Food Solutions helped us streamline our confectionery flavour application setup and providing techno commercial solution to our End to end activity. Their technical expertise and practical approach made a real difference.",
      rating: 5,
      img: customer1,
    },
    {
      name: "Baldaniya",
      text: "Working with Adhane Food Solutions was a game changer. From product development to packaging guidance, their support helped us bring innovative products to market faster.",
      rating: 5,
      img: customer2,
    },
    {
      name: "RDP Food Industries",
      text: "Adhane Food Solutions guided us through every stage of our new plant setup. Their turnkey expertise and compliance support were instrumental to our success.",
      rating: 5,
      img: customer3,
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-[#a4ffaa] py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#343951] text-[40px] font-bold leading-normal">
            What customers are saying
          </h2>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-lg border border-[#f6fbfd] bg-white p-8 text-center transition-all hover:shadow-lg"
            >
              <img
                src={t.img} // ✅ fixed: removed .src
                alt={t.name}
                className="mx-auto mb-4 h-20 w-20 rounded-full object-cover"
              />
              <h3 className="text-[#343951] font-semibold">{t.name}</h3>
              <div className="flex justify-center gap-1 my-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-[#00F510] text-[#00F510]"
                  />
                ))}
              </div>
              <p className="text-[rgba(0,0,0,0.75)]">{t.text}</p>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="relative md:hidden overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="min-w-full flex-shrink-0 flex justify-center"
              >
                <div className="w-[90%] max-w-[320px] rounded-2xl border border-[#f6fbfd] bg-white p-6 text-center shadow-md transition-all">
                  <img
                    src={t.img} // ✅ fixed: removed .src
                    alt={t.name}
                    className="mx-auto mb-4 h-20 w-20 rounded-full object-cover"
                  />
                  <h3 className="text-[#343951] font-semibold">{t.name}</h3>
                  <div className="flex justify-center gap-1 my-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-[#00F510] text-[#00F510]"
                      />
                    ))}
                  </div>
                  <p className="text-[rgba(0,0,0,0.75)] text-sm">{t.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-white rounded-full p-2 shadow-[0_0_10px_#00F51055] active:scale-95"
          >
            <ChevronLeft className="text-[#00F510]" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-white rounded-full p-2 shadow-[0_0_10px_#00F51055] active:scale-95"
          >
            <ChevronRight className="text-[#00F510]" />
          </button>
        </div>
      </div>
    </section>
  );
}

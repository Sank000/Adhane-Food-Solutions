import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function CTASection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-[20px] bg-[#00f510] px-8 py-16 lg:px-16 lg:py-20">
          {/* Background Decoration */}
          <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-white/10 to-transparent"></div>

          <div className="relative grid items-center gap-8 lg:grid-cols-2">
            {/* Left Content */}
            <div className="space-y-8">
              <h2 className="text-white">Ready to Transform Your Food Business?</h2>

              <p className="text-white/90">
                Partner with us to unlock innovative solutions that drive growth, compliance, and sustainability
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="rounded-full bg-white px-8 py-4 text-[#000000] transition-all hover:bg-gray-100 hover:shadow-lg">
                  Book a Demo
                </button>
                <button className="rounded-full border-2 border-white bg-transparent px-8 py-4 text-white transition-all hover:bg-white hover:text-[#000000]">
                  Contact Us
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-64 overflow-hidden rounded-[20px] bg-white lg:h-80">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80"
                alt="Food Solutions"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

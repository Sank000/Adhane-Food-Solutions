import { Coffee, IceCream, Box, Activity, ShoppingBag, Framer } from "lucide-react";

export default function Industries() {
  const industries = [
    {
      icon: Activity, // Namkeen & Snacks
      title: "Namkeen & Snacks",
      color: "green",
    },
    {
      icon: IceCream, // Bakery & Confectionery
      title: "Bakery & Confectionery",
      color: "orange",
    },
    {
      icon: Coffee, // Beverages
      title: "Beverages",
      color: "green",
    },
    {
      icon: Box, // Dairy & Frozen Foods
      title: "Dairy & Frozen Foods",
      color: "orange",
    },
    {
      icon: Framer, // Spices & Condiments
      title: "Spices & Condiments",
      color: "green",
    },
    {
      icon: ShoppingBag, // Ready-to-Eat & Ready-to-Cook Foods
      title: "Ready-to-Eat & Ready-to-Cook Foods",
      color: "orange",
    },
  ];

  return (
    <section className="bg-[#a4ffaa] py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-16">
          {/* Header */}
          <div className="space-y-6 text-center">
            <div className="inline-block rounded-full bg-white px-6 py-2">
              <p className="uppercase tracking-wider text-[#00f510]">Who We Work With</p>
            </div>

            <h2 className="text-[#1a1a1a] text-3xl sm:text-4xl font-bold">Industries We Serve</h2>

            <p className="text-gray-500 text-base sm:text-lg">
              Delivering specialized solutions across the entire food ecosystem
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group rounded-3xl border-2 border-gray-200 bg-white p-6 text-center transition-all hover:border-[#00f510] hover:shadow-lg"
              >
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div
                    className={`flex h-20 w-20 items-center justify-center rounded-3xl shadow-lg transition-transform group-hover:scale-110 ${
                      industry.color === "green"
                        ? "bg-[rgba(34,197,94,0.1)]"
                        : "bg-[rgba(254,215,170,0.3)]"
                    }`}
                  >
                    <industry.icon
                      className={`h-9 w-9 ${
                        industry.color === "green" ? "text-[#00F510]" : "text-[#FB923C]"
                      }`}
                      strokeWidth={2}
                    />
                  </div>
                </div>

                {/* Title */}
                <p className="text-gray-500 font-medium">{industry.title}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <button className="rounded-full bg-[#00f510] px-8 py-4 text-white font-medium transition-all hover:bg-[#00d010] hover:shadow-lg">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

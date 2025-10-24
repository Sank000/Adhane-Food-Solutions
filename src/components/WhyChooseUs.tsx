import { Check } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Expertise across the food value chain",
      description: "Decades of combined experience in food manufacturing, quality assurance, and regulatory compliance",
      color: "green",
    },
    {
      title: "Tailored strategies for every business",
      description: "Customized solutions that fit your unique needs, whether you're a startup or an established enterprise",
      color: "green",
    },
    {
      title: "Innovation aligned with global trends",
      description: "Stay ahead with insights on emerging technologies, consumer preferences, and sustainability practices",
      color: "green",
    },
    {
      title: "Trusted partner for compliance & growth",
      description: "Proven track record of helping businesses achieve certifications, scale operations, and enter new markets",
      color: "green",
    },
    
    
  ];

  return (
    <section className="bg-[#a4ffaa] py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-16">
          {/* Header */}
          <div className="space-y-4 text-center">
            <h2 className="text-[#1a1a1a]">Why Choose Us</h2>
            <p className="text-gray-500">
              Partner with a team that understands your challenges and delivers results
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group rounded-3xl border-2 border-gray-200 bg-white p-8 transition-all hover:border-[#00f510] hover:shadow-lg"
              >
                <div className="flex gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00f510] shadow-lg transition-transform group-hover:scale-110">
                      <Check className="h-8 w-8 text-white" strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-[#1a1a1a]">{feature.title}</h3>
                    <p className="text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

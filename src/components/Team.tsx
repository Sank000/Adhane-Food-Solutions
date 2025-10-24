import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function Team() {
  const teamMembers = [
    {
      name: "Alison Kiara",
      location: "Michigan, TX",
      phone: "989-653-2986",
      email: "alisonkiara@hommy.com",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    },
    {
      name: "Dianne Sabin",
      location: "New Jersey, TX",
      phone: "989-653-2550",
      email: "hidianne@hommy.com",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    },
    {
      name: "Shawn Ramirez",
      location: "Illinois, NZ",
      phone: "989-653-2986",
      email: "iamrami@hommy.com",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    },
  ];

  return (
    <section id="team" className="relative bg-white py-16 lg:py-24">
      {/* Decorative Dots - positioned so they sit BEHIND the rightmost (last) card */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute right-8 top-28 z-0 pointer-events-none"
        style={{ width: 220, height: 220 }}
      >
        <div className="grid grid-cols-5 gap-4">
          {[...Array(25)].map((_, i) => (
            <span
              key={i}
              className="block h-2 w-2 rounded-full bg-[#CFFFD6] opacity-80"
            />
          ))}
        </div>
      </div>

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-16">
          {/* Header */}
          <div className="space-y-3 text-center relative z-10">
            <h2
              className="text-[#343951]"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "40px",
                fontWeight: 700,
                fontStyle: "normal",
                lineHeight: "normal",
              }}
            >
              Our Featured Agents
            </h2>
            <p
              className="text-[#343951] opacity-80"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "20px",
                fontWeight: 400,
                fontStyle: "normal",
                lineHeight: "normal",
                letterSpacing: "1px",
              }}
            >
              Meet our amazing team members
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative z-10 rounded-xl border border-[#f6fbfd] bg-white p-8 shadow-[0px_7px_18px_0px_rgba(0,245,16,0.4)] transition-all hover:-translate-y-2 hover:shadow-[0px_10px_25px_0px_rgba(0,245,16,0.8)]"
              >
                {/* Profile Image */}
                <div className="mb-6 flex justify-center">
                  <div className="relative h-32 w-32 overflow-hidden rounded-full shadow-lg ring-4 ring-[#f6fbfd]">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                {/* Name */}
                <h3
                  className="mb-2 text-center text-[#343951]"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "20px",
                    fontWeight: 600,
                  }}
                >
                  {member.name}
                </h3>

                {/* Location */}
                <p
                  className="mb-6 text-center text-[#343951] opacity-80"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "16px",
                    fontWeight: 400,
                  }}
                >
                  {member.location}
                </p>

                {/* Contact Info */}
                <div className="space-y-2 text-center">
                  <p
                    className="text-[#343951] opacity-90"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "15px",
                    }}
                  >
                    {member.phone}
                  </p>
                  <a
                    href={`mailto:${member.email}`}
                    className="block text-[#0056d6] hover:underline"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "15px",
                    }}
                  >
                    {member.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Mail, Phone, MapPin } from "lucide-react";
import { useEffect } from "react";

export default function ContactUs() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section
      id="contact"
      style={{ backgroundColor: "hsla(124, 100%, 82%, 1)" }}
      className="py-16 lg:py-24"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-12">
          {/* Header */}
          <div className="space-y-4 text-center">
            <h1 className="text-[#000000] text-3xl font-bold">CONTACT US</h1>
            <p className="text-[#000000]">
              If you have any questions, please feel free to get in touch with
              us via phone, email, or schedule a meeting directly using the form
              below!
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid gap-8 lg:grid-cols-2 items-start">
            {/* Left Column - Calendly Form */}
            <div className="flex flex-col items-center bg-white rounded-[20px] shadow-sm p-3 overflow-hidden">
              <div className="text-center pt-8 mb-3">
                <p className="text-lg text-[#000000] leading-tight">
                  Try It Out With A Risk-Free Trial.
                </p>
                <p className="text-2xl font-bold text-[#000000] mb-2">
                  Book A FREE DEMO
                </p>
              </div>

              {/* Calendly Inline Widget */}
              <div
                className="calendly-inline-widget w-full rounded-[12px] overflow-hidden"
                data-url="https://calendly.com/bhusaresanket08/30min?hide_event_type_details=1&hide_gdpr_banner=1"
                style={{
                  minWidth: "320px",
                  height: "620px",
                  marginBottom: "0",
                  paddingBottom: "0",
                }}
              ></div>
            </div>

            {/* Right Column - Contact Info & Map */}
            <div className="flex flex-col justify-start space-y-8 lg:mt-20">
              {/* Contact Information */}
              <div className="space-y-6 rounded-[20px] bg-white p-8 shadow-sm">
                <h3 className="text-[#000000] text-xl font-semibold">
                  CONTACT INFORMATION
                </h3>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00f510]/10">
                      <Phone className="h-5 w-5 text-[#00F510]" />
                    </div>
                    <div>
                      <p className="mb-1 text-[#000000] font-medium">PHONE</p>
                      <p className="text-[#000000] opacity-90">
                        +91-8586927394, 0129-4014466
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00f510]/10">
                      <Mail className="h-5 w-5 text-[#00F510]" />
                    </div>
                    <div>
                      <p className="mb-1 text-[#000000] font-medium">Email</p>
                      <a
                        href="mailto:sales@systemengineers.co.in"
                        className="text-[#000000] underline opacity-90 hover:text-[#00f510]"
                      >
                        sales@systemengineers.co.in
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00f510]/10">
                      <MapPin className="h-5 w-5 text-[#00F510]" />
                    </div>
                    <div>
                      <p className="mb-1 text-[#000000] font-medium">Address</p>
                      <p className="text-[#000000] opacity-90">
                        System Engineers Cutting and Welding Pvt. Ltd.
                        <br />
                        Plot No.24, Pragati Vihar, Sector-59, Faridabad
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="overflow-hidden rounded-[20px] bg-white shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.775942323075!2d77.31231577504947!3d28.608864375687684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce45c1a92dbef%3A0xeda92d502e6d1d1f!2sSystem%20Engineers%20Cutting%20%26%20Welding%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1697302562704!5m2!1sen!2sin"
                  width="100%"
                  height="360"
                  allowFullScreen=""
                  loading="lazy"
                  className="rounded-[20px] shadow-md border-none"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

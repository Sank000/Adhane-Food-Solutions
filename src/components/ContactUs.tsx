import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactUs() {
  return (
    <section id="contact" className="bg-[#e6e6e6] py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-[#000000]">CONTACT US</h1>
            <p className="text-[#000000]">
              If you have any questions, please feel free to get in touch with us via phone, text, email, the form below, or even on social media!
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left Column - Form */}
            <div className="space-y-8 rounded-xl bg-[#e6e6e6] p-8">
              <div>
                <h3 className="mb-6 text-[#000000]">GET IN TOUCH</h3>

                <form className="space-y-6">
                  {/* Name & Phone */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-[#000000]">NAME</label>
                      <input
                        type="text"
                        placeholder="Enter your name*"
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-[#000000] transition-colors focus:border-[#00f510] focus:outline-none focus:ring-2 focus:ring-[#00f510]/20 placeholder:text-[#000000] placeholder:opacity-60"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-[#000000]">PHONE NUMBER</label>
                      <input
                        type="tel"
                        placeholder="Enter your phone number*"
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-[#000000] transition-colors focus:border-[#00f510] focus:outline-none focus:ring-2 focus:ring-[#00f510]/20 placeholder:text-[#000000] placeholder:opacity-60"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="mb-2 block text-[#000000]">EMAIL</label>
                    <input
                      type="email"
                      placeholder="Enter your email*"
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-[#000000] transition-colors focus:border-[#00f510] focus:outline-none focus:ring-2 focus:ring-[#00f510]/20 placeholder:text-[#000000] placeholder:opacity-60"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="mb-2 block text-[#000000]">YOUR MESSAGE</label>
                    <textarea
                      rows={4}
                      placeholder="Enter your message"
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-[#000000] transition-colors focus:border-[#00f510] focus:outline-none focus:ring-2 focus:ring-[#00f510]/20 placeholder:text-[#000000] placeholder:opacity-60"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="rounded-lg bg-[#00f510] px-8 py-3 text-white transition-all hover:bg-[#00d010] hover:shadow-lg"
                  >
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </div>

            {/* Right Column - Contact Info & Map */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="space-y-6 rounded-xl bg-white p-8 shadow-sm">
                <h3 className="text-[#000000]">CONTACT INFORMATION</h3>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#00f510]/10">
                      <Phone className="h-5 w-5 text-[#00F510]" />
                    </div>
                    <div>
                      <p className="mb-1 text-[#000000]">PHONE</p>
                      <p className="text-[#000000] opacity-90">+91-8586927394, 0129-4014466</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#00f510]/10">
                      <Mail className="h-5 w-5 text-[#00F510]" />
                    </div>
                    <div>
                      <p className="mb-1 text-[#000000]">Email</p>
                      <a
                        href="mailto:sales@systemengineers.co.in"
                        className="text-[#000000] underline opacity-90 transition-colors hover:text-[#00f510]"
                      >
                        sales@systemengineers.co.in
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#00f510]/10">
                      <MapPin className="h-5 w-5 text-[#00F510]" />
                    </div>
                    <div>
                      <p className="mb-1 text-[#000000]">Address</p>
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
              <div className="h-56 overflow-hidden rounded-xl bg-[#d9d9d9] shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.5!2d77.3!3d28.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzAwLjAiTiA3N8KwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Check, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-12">
          {/* Top Section */}
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Company Info */}
            <div className="space-y-6">
              {/* Logo/Icon */}
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00f510] shadow-lg">
                  <Check className="h-7 w-7 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-[#1a1a1a]">Adhane Food Solutions</h3>
              </div>

              <p className="text-gray-500">
                Delivering safe, sustainable, and innovative food solutions to empower businesses across the food value chain.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[rgba(34,197,94,0.1)] text-green-500 transition-all hover:bg-[#00f510] hover:text-white"
                >
                  <span>f</span>
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[rgba(254,215,170,0.3)] text-orange-400 transition-all hover:bg-[#FB923C] hover:text-white"
                >
                  <span>in</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-[#1a1a1a]">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-500 transition-colors hover:text-[#00f510]">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-500 transition-colors hover:text-[#00f510]">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-[#1a1a1a]">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 text-[#00F510]" />
                  <a
                    href="mailto:info@adhanefood.com"
                    className="text-gray-500 transition-colors hover:text-[#00f510]"
                  >
                    info@adhanefood.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 text-[#00F510]" />
                  <span className="text-gray-500">+1 (234) 567-890</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-[#00F510]" />
                  <span className="text-gray-500">
                    123 Food Innovation Hub
                    <br />
                    Business District, City 12345
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col items-center justify-between gap-4 border-t-2 border-[#00f510] pt-8 md:flex-row">
            <p className="text-gray-500">© 2025 Adhane Food Solutions. All rights reserved.</p>

            <div className="flex gap-6">
              <a href="#" className="text-gray-500 transition-colors hover:text-[#00f510]">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 transition-colors hover:text-[#00f510]">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

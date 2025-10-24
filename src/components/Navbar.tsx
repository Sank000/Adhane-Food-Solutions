import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png"; // 🟢 your logo

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 lg:px-8">
        <nav className="flex items-center justify-between gap-8 rounded-3xl bg-white px-5 py-4 shadow-sm">
          
          {/* ✅ Logo only (Brand name removed) */}
          <a href="#" className="flex items-center gap-3 flex-shrink-0">
            <img
              src={logo}
              alt="Adhane Foods Solutions"
              className="h-10 w-auto max-w-[100px] object-contain"
            />
          </a>

          {/* ✅ Desktop Nav Links */}
          <div className="hidden items-center gap-8 lg:flex">
            <a
              href="#home"
              className="text-[#00f510] transition-colors hover:text-[#00d010]"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-[#4d4d4d] transition-colors hover:text-[#00f510]"
            >
              About
            </a>
            <a
              href="#services"
              className="text-[#4d4d4d] transition-colors hover:text-[#00f510]"
            >
              Our Service
            </a>
            <a
              href="#team"
              className="text-[#4d4d4d] transition-colors hover:text-[#00f510]"
            >
              Team
            </a>
            <a
              href="#contact"
              className="text-[#4d4d4d] transition-colors hover:text-[#00f510]"
            >
              Contact us
            </a>
          </div>

          {/* ✅ CTA Button */}
          <button className="hidden rounded-full bg-[#00f510] px-6 py-3 text-white transition-all hover:bg-[#00d010] hover:shadow-lg lg:block">
            Get in Touch
          </button>

          {/* ✅ Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-[#4d4d4d] transition-colors hover:text-[#00f510] lg:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* ✅ Mobile Menu */}
        {isMenuOpen && (
          <div className="mt-4 rounded-3xl bg-white p-6 shadow-sm lg:hidden">
            <div className="flex flex-col gap-4">
              {["Home", "About", "Our Service", "Team", "Contact us"].map(
                (item, i) => (
                  <a
                    key={i}
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    className={`${
                      item === "Home" ? "text-[#00f510]" : "text-[#4d4d4d]"
                    } transition-colors hover:text-[#00f510]`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                )
              )}
              <button className="rounded-full bg-[#00f510] px-6 py-3 text-white transition-all hover:bg-[#00d010] hover:shadow-lg">
                Get in Touch
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

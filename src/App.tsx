import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import VisionMission from "./components/VisionMission";
import Industries from "./components/Industries";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <AboutUs />
        <Services />
        <WhyChooseUs />
        <VisionMission />
        <Industries />
        <Testimonials />
        <ContactUs />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

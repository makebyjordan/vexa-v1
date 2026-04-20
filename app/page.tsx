import GlassesScroll from "@/components/GlassesScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Features, HowItWorks, Specs, Testimonials, FinalCTA } from "@/components/LandingSections";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#ECECEC] font-sans selection:bg-black/10">
      
      <Navbar />

      {/* Hero estático con la imagen inicial */}
      <section className="relative w-full h-screen bg-[#ECECEC] flex items-center justify-center">
        <img 
          src="/hero.png" 
          alt="VEXA AI Logo" 
          className="w-full h-full object-cover object-center" 
        />
      </section>

      <GlassesScroll />

      <Features />
      <HowItWorks />
      <Specs />
      <Testimonials />
      <FinalCTA />

      <Footer />

    </main>
  );
}

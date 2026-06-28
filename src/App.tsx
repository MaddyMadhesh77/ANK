import { Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Toaster } from "@/components/ui/sonner";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Packages from "@/pages/Packages";
import BusHire from "@/pages/BusHire";
import Contact from "@/pages/Contact";
import PlanTrip from "@/pages/PlanTrip";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/bus-hire" element={<BusHire />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/plan-trip" element={<PlanTrip />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
      <Toaster richColors position="top-center" />
    </div>
  );
}

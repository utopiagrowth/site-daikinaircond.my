import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileCTABar from "@/components/layout/MobileCTABar";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import Hero from "@/components/sections/Hero";
import ServiceStrip from "@/components/sections/ServiceStrip";
import ProofBar from "@/components/sections/ProofBar";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WarrantyStrip from "@/components/sections/WarrantyStrip";
import ProductCatalog from "@/components/sections/ProductCatalog";
import ProductRange from "@/components/sections/ProductRange";
import RentVsBuy from "@/components/sections/RentVsBuy";
import POASBanner from "@/components/sections/POASBanner";
import HowItWorks from "@/components/sections/HowItWorks";
import CoverageArea from "@/components/sections/CoverageArea";
import BeforeAfter from "@/components/sections/BeforeAfter";
import SocialProof from "@/components/sections/SocialProof";
import FAQ from "@/components/sections/FAQ";
import Comparison from "@/components/sections/Comparison";
import SmartControl from "@/components/sections/SmartControl";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServiceStrip />
        <ProofBar />
        <div className="gradient-divider" />
        <ServicesGrid />
        <WarrantyStrip />
        <ProductCatalog />
        <ProductRange />
        <div className="gradient-divider" />
        <RentVsBuy />
        <POASBanner />
        <div className="gradient-divider" />
        <HowItWorks />
        <div className="gradient-divider" />
        <CoverageArea />
        <div className="gradient-divider" />
        <BeforeAfter />
        <div className="gradient-divider" />
        <SocialProof />
        <div className="gradient-divider" />
        <FAQ />
        <div className="gradient-divider" />
        <Comparison />
        <SmartControl />
        <div className="gradient-divider" />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTABar />
      <FloatingWhatsApp />
    </>
  );
}

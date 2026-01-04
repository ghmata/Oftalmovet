import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import SpecialtiesSection from "@/components/home/SpecialtiesSection";
import ServicesSection from "@/components/home/ServicesSection";
import CTASection from "@/components/home/CTASection";
import LocationSection from "@/components/home/LocationSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <SpecialtiesSection />
      <ServicesSection />
      <CTASection />
      <LocationSection />
    </Layout>
  );
};

export default Index;

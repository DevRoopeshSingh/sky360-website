import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import SocialMediaLinks from "./components/SocialMediaLinks";
import WhyChooseUs from "./components/WhyChooseUs";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import { ScrollToTop } from "./components/scrollToTop";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <Box>
      {/* Navbar Section */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Overview of Services */}
      <ServicesSection />

      {/* Client Testimonials */}
      <TestimonialsSection />

      {/* Social Media Links */}
      <SocialMediaLinks />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer Section */}
      <FooterSection />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </Box>
  );
}

import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

function HeroSection() {
  const MotionBox = motion(Box);
  return (
    <MotionBox
      textAlign="center"
      py={{ base: 8, md: 16 }}
      px={8}
      position="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}>
      {/* Video Background */}
      <Box
        position="absolute"
        top={0}
        left={{ base: 0, lg: "10%" }}
        width={{ base: "100%", lg: "80%" }}
        height="100%"
        overflow="hidden"
        zIndex={-2}
        display={{ base: "none", md: "block" }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}>
          <source src="/heroBackground.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>

      {/* Fallback image for mobile devices */}
      <Box
        position="relative"
        zIndex={-1}
        bgImage="url('/images/hero-fallback.jpg')"
        bgSize="cover"
        bgPosition="center"
        height={{ base: "300px", md: "0" }}
      />

      {/* Dark Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bgGradient="linear(to-b, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))"
        zIndex={-1}
      />

      {/* Hero Content */}
      <Box position="relative" zIndex={1} color="white" px={4}>
        <Heading as="h2" size="2xl" mb={6} fontWeight="bold">
          Empowering Your Business with Digital Innovation
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} mb={8}>
          At Sky360 Digital Solutions, we specialize in helping businesses
          thrive in the digital landscape. From stunning websites to impactful
          marketing strategies, our goal is to empower your business to reach
          new heights.
        </Text>
        <Button colorScheme="green" size={{ base: "md", md: "lg" }}>
          Get a Free Consultation
        </Button>
      </Box>
    </MotionBox>
  );
}

export default HeroSection;

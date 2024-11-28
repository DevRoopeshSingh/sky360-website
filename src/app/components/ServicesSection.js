import {
  Box,
  Heading,
  SimpleGrid,
  VStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRevealAnimation } from "../hooks/useRevealAnimation";
import { useMotionFadeIn } from "../hooks/useMotionFadeIn";
const serviceDetails = [
  {
    title: "Web Development",
    description:
      "Building responsive, modern websites that provide an engaging user experience.",
    image: "/images/web-development.jpg",
  },
  {
    title: "Digital Marketing",
    description:
      "Improving brand visibility and driving traffic through tailored digital strategies.",
    image: "/images/digital-marketing.jpg",
  },
  {
    title: "IT Solutions",
    description:
      "Customized software solutions and consulting to meet your unique business needs.",
    image: "/images/it-solutions.jpg",
  },
];

const ServicesSection = () => {
  const MotionVStack = motion(VStack);
  const controls = useMotionFadeIn();
  return (
    <Box py={16} px={8} textAlign="center">
      <Heading as="h2" size="xl" mb={8} fontWeight="bold">
        Our Services
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {serviceDetails.map((service, index) => (
          <MotionVStack
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            viewport={{ once: true }}
            bg="gray.50"
            p={8}
            rounded="lg"
            shadow="md"
            _hover={{ transform: "scale(1.05)", transition: "0.3s" }}>
            <Image
              src={service.image}
              alt={service.title}
              boxSize="80px"
              mb={4}
              loading="lazy"
            />
            <Heading as="h3" size="md" color="blue.600" mb={2}>
              {service.title}
            </Heading>
            <Text>{service.description}</Text>
          </MotionVStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ServicesSection;

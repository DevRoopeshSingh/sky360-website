import {
  Box,
  Button,
  Heading,
  Input,
  Textarea,
  VStack,
  Text,
} from "@chakra-ui/react";

const ContactSection = () => {
  return (
    <Box
      bgGradient="linear(to-r, blue.600, teal.500)"
      color="white"
      py={20}
      textAlign="center">
      <Heading as="h2" size="xl" mb={6} fontWeight="bold">
        Ready to take your business to the next level?
      </Heading>
      <Button size="lg" colorScheme="green" _hover={{ boxShadow: "lg" }}>
        Contact Us Today
      </Button>
      <Text mt={4} fontSize="lg">
        Get in touch to learn how we can create solutions that work for your
        business.
      </Text>

      {/* Contact Form */}
      <Box
        bg="white"
        color="black"
        p={8}
        mt={10}
        rounded="lg"
        shadow="md"
        maxW="600px"
        mx="auto">
        <Heading as="h3" size="lg" mb={6} textAlign="center" color="blue.600">
          Contact Us
        </Heading>
        <VStack spacing={4}>
          <Input
            placeholder="Your Name"
            size="lg"
            focusBorderColor="blue.500"
          />
          <Input
            placeholder="Your Email"
            size="lg"
            focusBorderColor="blue.500"
            type="email"
          />
          <Textarea
            placeholder="Your Message"
            size="lg"
            focusBorderColor="blue.500"
            rows={6}
          />
          <Button size="lg" colorScheme="teal" w="full">
            Send Message
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default ContactSection;

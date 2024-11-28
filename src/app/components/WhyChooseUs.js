import { Box, Heading, SimpleGrid, VStack, Text } from "@chakra-ui/react";

const WhyChooseUs = () => {
  return (
    <Box py={16} px={8} textAlign="center">
      <Heading as="h2" size="xl" mb={8} fontWeight="bold">
        Why Sky360 Digital Solutions?
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} textAlign="left">
        <VStack
          align="start"
          spacing={4}
          bg="gray.50"
          p={8}
          rounded="lg"
          shadow="md">
          <Text fontWeight="bold">Expert Team</Text>
          <Text>A skilled team of developers, marketers, and consultants.</Text>
        </VStack>
        <VStack
          align="start"
          spacing={4}
          bg="gray.50"
          p={8}
          rounded="lg"
          shadow="md">
          <Text fontWeight="bold">Results-Driven</Text>
          <Text>Our strategies focus on delivering measurable results.</Text>
        </VStack>
        <VStack
          align="start"
          spacing={4}
          bg="gray.50"
          p={8}
          rounded="lg"
          shadow="md">
          <Text fontWeight="bold">Client-Focused Approach</Text>
          <Text>
            We believe in collaboration to achieve your business goals.
          </Text>
        </VStack>
        <VStack
          align="start"
          spacing={4}
          bg="gray.50"
          p={8}
          rounded="lg"
          shadow="md">
          <Text fontWeight="bold">Cutting-Edge Tools</Text>
          <Text>
            Utilizing the latest technologies to give your business a
            competitive edge.
          </Text>
        </VStack>
        <VStack
          align="start"
          spacing={4}
          bg="gray.50"
          p={8}
          rounded="lg"
          shadow="md">
          <Text fontWeight="bold">End-to-End Solutions</Text>
          <Text>
            From planning to execution, we handle it all to ensure your success.
          </Text>
        </VStack>
      </SimpleGrid>
    </Box>
  );
};

export default WhyChooseUs;

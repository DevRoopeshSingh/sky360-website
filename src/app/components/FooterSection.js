import { Box, Flex, Stack, Text, Link } from "@chakra-ui/react";

const FooterSection = () => {
  return (
    <Box bg="gray.800" color="gray.200" py={10} textAlign="center">
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        px={{ base: 4, md: 16 }}>
        <Text>
          &copy; {new Date().getFullYear()} Sky360 Digital Solutions. All rights
          reserved.
        </Text>
        <Stack direction="row" mt={{ base: 4, md: 0 }} spacing={6}>
          <Link href="#" _hover={{ textDecoration: "underline" }}>
            Privacy Policy
          </Link>
          <Link href="#" _hover={{ textDecoration: "underline" }}>
            Terms of Service
          </Link>
        </Stack>
      </Flex>
    </Box>
  );
};

export default FooterSection;

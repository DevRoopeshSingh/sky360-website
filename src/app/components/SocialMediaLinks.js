// components/SocialMediaLinks.js
import { Box, Text, Stack, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const SocialMediaLinks = () => {
  return (
    <Box py={8} textAlign="center">
      <Text fontSize="lg" mb={4}>
        Follow us on:
      </Text>
      <Stack direction="row" justify="center" spacing={6}>
        <IconButton
          as="a"
          href="https://facebook.com/sky360digitalsolutions"
          icon={<FaFacebook />}
          aria-label="Facebook"
          colorScheme="facebook"
          size="lg"
          _hover={{ transform: "scale(1.2)", transition: "0.3s" }}
        />
        <IconButton
          as="a"
          href="https://instagram.com/sky360digitalsolutions"
          icon={<FaInstagram />}
          aria-label="Instagram"
          colorScheme="pink"
          size="lg"
          _hover={{ transform: "scale(1.2)", transition: "0.3s" }}
        />
        <IconButton
          as="a"
          href="https://linkedin.com/company/sky360digitalsolutions"
          icon={<FaLinkedin />}
          aria-label="LinkedIn"
          colorScheme="linkedin"
          size="lg"
          _hover={{ transform: "scale(1.2)", transition: "0.3s" }}
        />
        <IconButton
          as="a"
          href="https://twitter.com/sky360digital"
          icon={<FaTwitter />}
          aria-label="Twitter"
          colorScheme="twitter"
          size="lg"
          _hover={{ transform: "scale(1.2)", transition: "0.3s" }}
        />
      </Stack>
    </Box>
  );
};

export default SocialMediaLinks;

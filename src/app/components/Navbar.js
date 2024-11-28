// Navbar.js
import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="nav" bg="blue.600" color="white" py={4} px={8}>
      <Flex justify="space-between" align="center">
        <Heading as="h1" size="lg">
          Sky360 Digital Solutions
        </Heading>
        <Box display={{ base: "block", md: "none" }}>
          {/* Hamburger Menu for Mobile */}
          <IconButton
            icon={<HamburgerIcon />}
            variant="outline"
            colorScheme="whiteAlpha"
            aria-label="Open Menu"
            onClick={onOpen}
          />
        </Box>
        <HStack spacing={8} display={{ base: "none", md: "flex" }}>
          <ScrollLink href="#services" _hover={{ textDecoration: "underline" }}>
            Services
          </ScrollLink>
          <ScrollLink
            href="#testimonials"
            _hover={{ textDecoration: "underline" }}>
            Testimonials
          </ScrollLink>
          <ScrollLink href="#contact" _hover={{ textDecoration: "underline" }}>
            Contact
          </ScrollLink>
        </HStack>
      </Flex>

      {/* Mobile Drawer Menu */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <Flex justify="space-between" align="center">
              <Heading as="h2" size="md">
                Menu
              </Heading>
              <IconButton
                icon={<CloseIcon />}
                variant="outline"
                onClick={onClose}
                aria-label="Close Menu"
              />
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="start">
              <ScrollLink href="#services" onClick={onClose}>
                Services
              </ScrollLink>
              <ScrollLink href="#testimonials" onClick={onClose}>
                Testimonials
              </ScrollLink>
              <Link href="#contact" onClick={onClose}>
                Contact
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;

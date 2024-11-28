import { Box, Heading, SimpleGrid, VStack, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Box py={20} px={8} textAlign="center">
      <Heading as="h2" size="xl" mb={8} fontWeight="bold">
        Client Testimonials
      </Heading>
      <Slider {...settings}>
        <Box>
          <Text fontSize="lg" fontStyle="italic" mb={4}>
            "Sky360 Digital Solutions exceeded our expectations. The website
            they built is stunning, and the marketing strategies really improved
            our brand's visibility!"
          </Text>
          <Text fontWeight="bold">- John Doe, CEO of TechNova</Text>
        </Box>
        {/* Add more testimonials here */}
        <Box>
          <Text fontSize="lg" fontStyle="italic" mb={4}>
            "Sky360 Digital Solutions exceeded our expectations. The website
            they built is stunning, and the marketing strategies really improved
            our brand's visibility!"
          </Text>
          <Text fontWeight="bold">- John Doe, CEO of TechNova</Text>
        </Box>
        <Box>
          <Text fontSize="lg" fontStyle="italic" mb={4}>
            "Sky360 Digital Solutions exceeded our expectations. The website
            they built is stunning, and the marketing strategies really improved
            our brand's visibility!"
          </Text>
          <Text fontWeight="bold">- John Doe, CEO of TechNova</Text>
        </Box>
        <Box>
          <Text fontSize="lg" fontStyle="italic" mb={4}>
            "Sky360 Digital Solutions exceeded our expectations. The website
            they built is stunning, and the marketing strategies really improved
            our brand's visibility!"
          </Text>
          <Text fontWeight="bold">- John Doe, CEO of TechNova</Text>
        </Box>
      </Slider>
    </Box>
  );
};

export default TestimonialsSection;

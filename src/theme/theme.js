import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
  colors: {
    brand: {
      100: "#EBF8FF",
      500: "#007BFF",
      600: "#28A745",
    },
    green: {
      500: "#28A745",
    },
  },
});

export default theme;

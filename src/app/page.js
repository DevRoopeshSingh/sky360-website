"use client";

import dynamic from "next/dynamic";

// Dynamically import IconButton to prevent SSR issues
const IconButton = dynamic(
  () => import("@chakra-ui/react").then((mod) => mod.IconButton),
  { ssr: false }
);

const LandingPage = dynamic(() => import("./LandingPageComponent"), {
  ssr: false,
});

export default LandingPage;

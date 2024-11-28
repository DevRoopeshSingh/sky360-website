import { useState, useEffect } from "react";
import { IconButton } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";

export function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showButton && (
        <IconButton
          icon={<ArrowUpIcon />}
          colorScheme="blue"
          size="lg"
          position="fixed"
          bottom={8}
          right={8}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      )}
    </>
  );
}

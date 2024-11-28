"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { Global } from "@emotion/react"; 
import theme from "../theme/theme";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Sky360 Digital Solutions | Empowering Your Business</title>
        <meta
          name="description"
          content="Sky360 Digital Solutions provides web development, digital marketing, and IT solutions to help your business grow in the digital landscape."
        />
        <meta
          name="keywords"
          content="web development, digital marketing, IT solutions, business growth"
        />
        <meta name="author" content="Sky360 Digital Solutions" />

        {/* Google Analytics Tracking */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=YOUR_TRACKING_ID"></script>
        <script>
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'YOUR_TRACKING_ID');
    `}
        </script>
      </head>

      <body>
        <ChakraProvider theme={theme}>
          {/* Global Styles for Smooth Scrolling */}
          <Global
            styles={{
              html: {
                scrollBehavior: "smooth",
              },
            }}
          />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}

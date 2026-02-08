import React from "react";
import { AppShell, Container, Text, Image, Box } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import HeaderMain from "../Components/Header";

export default function Layout({
  children,
  show_carousel = false,
}: {
  children: React.ReactNode;
  show_carousel?: boolean;
}) {
  return (
    <AppShell
      padding="md"
      header={<HeaderMain />}
      // footer={
      //   <Box bg="dark.9" py="sm">
      //     <Text size="sm" color="white" align="center">
      //       &copy; 2024 BIG TOYS STOP. All rights reserved.
      //     </Text>
      //   </Box>
      // }
      styles={{
        main: {
          paddingTop: 0, // prevent double spacing if HeaderMain has padding
          flex: 1,
        },
      }}
    >
      {/* Full-width carousel */}
      {show_carousel && (
        <Box display={{ base: "none", lg: "grid" }} mx={195} mt={130}>
          <Carousel
            withIndicators
            height={350}
            slideSize="100%"
            loop
            align="start"
            slideGap="md"
            styles={{
              indicator: { backgroundColor: "#fff" },
            }}
          >
            {[1, 2, 3].map((i) => (
              <Carousel.Slide key={i}>
                <Image
                  src="https://images.ctfassets.net/mmeshd7gafk1/7KykGDFIzL0ZXJGQsGTiBU/3d3691e94d8377ec08b2468964c605d4/WEB___HP_Banner_-_desktop_US.jpg"
                  alt={`Slide ${i}`}
                  radius="md"
                  fit="cover"
                  height={350}
                  w="100%"
                />
              </Carousel.Slide>
            ))}
          </Carousel>
        </Box>
      )}
      {/* Page content */}
      <Container size={"xl"} mt="xl" mb="xl">
        {children}
      </Container>
    </AppShell>
  );
}

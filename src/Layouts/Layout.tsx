import React, { Fragment } from "react";
import HeaderMain from "../Components/Header";
import { Box, Container, Flex, Text } from "@mantine/core";
import HomeSlider from "../Components/HomeSlider";

export default function Layout({ children }: any) {
  return (
    <Fragment>
      <HeaderMain />
      {/* <Flex>
        <HomeSlider />
      </Flex> */}

      {/* <Box mt={30} display={{ base: "none", lg: "flex", md: "flex" }}>
        <Flex></Flex>
      </Box> */}
      <Container size="lg">{children}</Container>
      <Box mt={159} style={{ backgroundColor: "#2e2e2e" }} p={10}>
        <Text size={14} color="white" align="center">
          &copy; 2024 BIG TOYS STOP. All rights reserved.
        </Text>
      </Box>
    </Fragment>
  );
}

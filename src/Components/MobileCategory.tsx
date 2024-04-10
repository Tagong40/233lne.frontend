import { Box, Card, Flex, Grid, Text } from "@mantine/core";
import React, { Fragment } from "react";
import { useProduct } from "../Store/useProduct";

export default function MobileCategory({}: any) {
  const category = useProduct((state) => state.category);
  return (
    <Fragment>
      <Box display={{ base: "flex", lg: "none", sm: "none", xs: "none" }}>
        <Text size="sm" mt={15} mb={-9} fw={"600"} color="dark">
          Store Category
        </Text>
      </Box>

      <Grid
        display={{ base: "flex", lg: "none", sm: "none", xs: "none" }}
        mt={10}
      >
        {category
          .map((res: { name: string }, index: number) => (
            <Grid.Col key={index} span={6} sm={2} xs={2}>
              <Card
                h={80}
                sx={{
                  cursor: "pointer",
                  border: "1px solid #eee",
                  borderRadius: 10,
                }}
                p={20}
              >
                <Text size="sm" align="center">
                  {" "}
                  {res?.name}
                </Text>
              </Card>
            </Grid.Col>
          ))
          .slice(0, 4)}
      </Grid>
      <Box display={{ base: "flex", lg: "none", sm: "none", xs: "none" }}>
        <Text mt={5} fw="normal" size="xs" color="cyan">
          Load more
        </Text>
      </Box>
    </Fragment>
  );
}

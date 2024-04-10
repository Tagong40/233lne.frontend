import React from "react";
import { List, Text, ThemeIcon } from "@mantine/core";
import { Container } from "@mantine/core";
import { Flex } from "@mantine/core";
import { IconPackage, IconPhone, IconShoppingBag } from "@tabler/icons";
import { MediaQuery } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../Store/useProduct";

export function AppHeader() {
  const navigate = useNavigate();
  const { store } = useProduct((state) => state) as any;

  return (
    <MediaQuery smallerThan="md" styles={{ display: "none" }}>
      <Container size="lg">
        {/* <Button
            leftIcon={}
            size="xl"
            variant="subtle"
            color="white"
            compact
          >

          </Button> */}
        <Flex
          sx={{ cursor: "pointer" }}
          m={0}
          p={8}
          onClick={() => navigate("/")}
          gap={5}
          align="center"
          justify={"space-between"}
        >
          <Flex gap={5} align="center">
            <IconShoppingBag color="white" size={27} />
            <Text color="white" size={21} fw="bold">
              The MiniVel Shop
            </Text>
          </Flex>

          <Flex gap={20} align={"center"}>
            <Flex gap={2} justify={"center"} align={"center"}>
              <ThemeIcon color="pink" size={22} radius="md">
                <IconShoppingBag stroke={1.5} size={18.5} />
              </ThemeIcon>
              <Text fw={400} lts={0.5} color="white" size="sm">
                Get A Store
              </Text>
            </Flex>
            <Flex gap={2} justify={"center"} align={"center"}>
              <ThemeIcon color="pink" size={22} radius="md">
                <IconPackage stroke={1.5} size={18.5} />
              </ThemeIcon>
              <Text fw={400} lts={0.5} color="white" size="sm">
                Track Shipping
              </Text>
            </Flex>
            <Flex gap={2} justify={"center"} align={"center"}>
              <ThemeIcon color="pink" size={22} radius="md">
                <IconPhone stroke={1.5} size={18.5} />
              </ThemeIcon>
              <Text fw={400} lts={0.5} color="white" size="sm">
                Talk To Us
              </Text>
            </Flex>
          </Flex>
        </Flex>

        {/*
                <Group sx={{ height: '100%' }} px={20} position="apart">
                    <ActionIcon variant="light" color="teal" size={22}>
                        <IconUser size={16} />

                    </ActionIcon>

                </Group> */}
      </Container>
    </MediaQuery>
  );
}

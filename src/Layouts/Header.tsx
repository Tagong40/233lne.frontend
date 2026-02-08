import React from "react";
import {
  Container,
  Text,
  Flex,
  ThemeIcon,
  MediaQuery,
  Box,
  ActionIcon,
  Indicator,
  Menu,
  Button,
  TextInput,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../Store/useProduct";
import {
  IconPackage,
  IconPhone,
  IconSearch,
  IconShoppingBag,
  IconShoppingCart,
} from "@tabler/icons";
import { HeaderCategory } from "../Components/Category/HeaderCategory";

export function AppHeader() {
  const navigate = useNavigate();
  const { store } = useProduct((state) => state) as any;

  return (
    <MediaQuery smallerThan="md" styles={{ display: "none" }}>
      <Box
        sx={(theme) => ({
          backgroundColor: theme.white,
          padding: "10px 0",
        })}
      >
        <Container size="xl">
          <Flex justify="space-between" align="center">
            {/* Logo */}
            <Flex sx={{ flex: 0.6 }} gap={10}>
              <Flex
                align="center"
                gap={8}
                sx={{ cursor: "pointer", flex: 1 }}
                onClick={() => navigate("/")}
              >
                {/* <IconShoppingBag size={24} color="black" /> */}
                <Text size="xl" weight={700} color="black">
                  MiniVel Shop
                </Text>
              </Flex>
              <HeaderCategory />
              <Button color="dark" variant="subtle">
                About Us
              </Button>
              <Button color="dark" variant="subtle">
                Contact Us
              </Button>
            </Flex>

            {/* Actions */}
            <Flex gap={32} align="center">
              <Flex gap={6} align="center" sx={{ cursor: "pointer" }}>
                {/* <ThemeIcon variant="light" color="pink" size="sm" radius="md">
                  <IconShoppingBag size={16} />
                </ThemeIcon>
                <Text size="sm" color="dimmed" weight={500}>
                  Get a Store
                </Text> */}
                <TextInput
                  placeholder="Search for products"
                  variant="filled"
                  radius={14}
                  rightSection={<IconSearch size={20} color="gray" />}
                />
              </Flex>

              {/* <Flex gap={6} align="center" sx={{ cursor: "pointer" }}>
                <ThemeIcon variant="light" color="pink" size="sm" radius="md">
                  <IconPackage size={16} />
                </ThemeIcon>
                <Text size="sm" color="dimmed" weight={500}>
                  Track Shipping
                </Text>
              </Flex> */}

              <Flex gap={0} align="center" sx={{ cursor: "pointer" }}>
                <ActionIcon
                  variant="transparent"
                  color="gray.7"
                  size="md"
                  radius="md"
                >
                  <IconShoppingCart size={23} />
                </ActionIcon>
                <Text size="sm" color="dimmed" weight={500}>
                  Cart
                </Text>
              </Flex>
              {/* <Flex gap={6} align="center" sx={{ cursor: "pointer" }}>
                <Indicator inline label="0" processing color="teal" size={16}>
                  <ActionIcon
                    variant="light"
                    color="gray"
                    size="xl"
                    radius="md"
                  >
                    <IconShoppingBag color="black" size={24} />
                  </ActionIcon>
                </Indicator>
              </Flex> */}
            </Flex>
          </Flex>
        </Container>
      </Box>
    </MediaQuery>
  );
}

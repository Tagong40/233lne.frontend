import React, { useState } from "react";
import {
  Header,
  MediaQuery,
  Burger,
  Group,
  ActionIcon,
  Flex,
  Text,
  Card,
} from "@mantine/core";
import { IconPhone, IconShoppingBag } from "@tabler/icons";
import { AppHeader } from "../Layouts/Header";
import { useProduct } from "../Store/useProduct";
import { useNavigate } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import SideBar from "../Layouts/SideBar";

export default function HeaderMain() {
  const [burgerOpened, setBurgerOpened] = useState(false);
  const { store } = useProduct((state) => state) as any;
  const navigate = useNavigate();
  const [sidebarOpened, { open, close }] = useDisclosure(false);

  return (
    <>
      <SideBar
        closeIcon={setBurgerOpened}
        open={open}
        close={close}
        opened={sidebarOpened}
      />

      <Header
        height={"auto"}
        // style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
        withBorder={false}
        bg={{ bsse: "gray", lg: "inherit" }}
        p="0"
      >
        <Card
          display={{ base: "none", lg: "block" }}
          radius={0}
          p={7}
          px={200}
          bg={"teal.9"}
        >
          <Flex justify={"space-between"}>
            <Flex gap={5} align={"center"}>
              <IconPhone color="white" size={15} />
              <Text fz={14} c={"white"} fw={500}>
                +2333992002002
              </Text>
            </Flex>
            <Text fz={14} c={"white"}>
              Get 50% off on Selected items | Shop Now
            </Text>
            <Text fz={14} c={"white"} fw={600}>
              Location
            </Text>
          </Flex>
        </Card>

        {/* Mobile Header */}
        <MediaQuery largerThan="md" styles={{ display: "none" }}>
          <Group p={10} position="apart" align="center" h="100%">
            <Burger
              opened={burgerOpened}
              onClick={() => {
                setBurgerOpened((prev) => !prev);
                open();
              }}
              size="sm"
              color="black"
            />

            <Text
              onClick={() => navigate("/")}
              sx={{ cursor: "pointer" }}
              size="lg"
              fw="bold"
              color="dark"
              tt="uppercase"
            >
              The MiniVel Shop
            </Text>

            <Flex gap={15} align="center">
              <ActionIcon color="dark" variant="transparent">
                <IconShoppingBag size={24} stroke={1.5} />
              </ActionIcon>
            </Flex>
          </Group>
        </MediaQuery>

        {/* Desktop Header */}
        <MediaQuery smallerThan="md" styles={{ display: "none" }}>
          <AppHeader />
        </MediaQuery>
      </Header>
    </>
  );
}

import React, { useEffect, useRef, useState } from "react";
import {
  Card,
  Image,
  Badge,
  Button,
  Group,
  Text,
  Box,
  Center,
  Flex,
} from "@mantine/core";
import { Rating } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { IconHeart } from "@tabler/icons";

interface response {
  response: {
    name?: string;
    productId: any;
    price: string;
    description: string;
    rate: number;
    product_img1: string;
    currency: string;
  };
  index: number;
}

export default function KartCard({ response, index }: response) {
  const truncate = (str: any) => {
    return str.length > 52 ? str.substring(0, 52) + "..." : str;
  };

  const truncatMobile = (str: any) => {
    return str.length > 25 ? str.substring(0, 25) + "..." : str;
  };
  const navigate = useNavigate();
  const homeRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<string>("home");

  const handleScrollToSection = (
    sectionRef: React.RefObject<HTMLDivElement>,
    section: string
  ) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
      setActiveSection(section);
    }
  };

  const values = [] as any;
  for (let i = 0; i < 50; i++) {
    values.push(Math.floor(Math.random() * 30) + 1);
  }

  return (
    <div style={{ width: "100%", marginBottom: 20 }}>
      <Card
        display={{ base: "none", lg: "grid", sm: "none", xs: "none" }}
        sx={{
          cursor: "pointer",
          position: "relative",
          boxShadow:
            "rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset;",
          borderColor: "#efefef91",
          ":hover": {
            boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
          },
        }}
        radius="md"
        withBorder
        w={"100%"}
        h={400}
        onClick={() => {
          navigate(`/${response?.productId}`);
        }}
        p={20}
        maw={"100%"}
      >
        <div className="wishlist-icon">
          <Button fw="500" size="xs" variant="light" color="pink">
            Best Sellers
          </Button>
        </div>
        <Card.Section
          onClick={() => {
            handleScrollToSection(homeRef, "home");
          }}
        >
          <Center mt={40}>
            <Image
              src={`${response?.product_img1}`}
              alt="p_img"
              width="100%"
              height={170}
              fit="contain"
            />
          </Center>
        </Card.Section>
        <Flex></Flex>
        <Group position="apart" spacing={2} mb={6}>
          <Text
            fw="540"
            color="#343a40"
            className="text__cuis"
            mt={8}
            size={15}
          >
            {truncate(response.name)}
          </Text>
          <Flex align="center">
            <Rating
              value={values[index]}
              defaultValue={response?.rate}
              size="xs"
              color="dark"
            />
            <Text size={11}>({values[index]})</Text>
          </Flex>
        </Group>
        <Flex>
          <Text
            mt={10}
            mb={15}
            color="#212529"
            size={17}
            fw="700"
            sx={{ lineHeight: 0 }}
          >
            {response?.currency} {Number(response.price)?.toFixed(2)}
          </Text>
        </Flex>
      </Card>

      <Card
        display={{ base: "grid", lg: "none", sm: "grid", xs: "none" }}
        sx={{
          cursor: "pointer",
          position: "relative",
          boxShadow:
            "rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset;",
          borderColor: "#efefef91",
          ":hover": {
            boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
          },
        }}
        radius="md"
        withBorder
        w={"100%"}
        maw={"100%"}
        h={330}
        p={20}
      >
        <div className="wishlist-icon">
          <Button fw="500" size="xs" variant="light" color="pink">
            Best Sellers
          </Button>
        </div>
        <Card.Section
          onClick={() => {
            handleScrollToSection(homeRef, "home");
            navigate(`/${response?.productId}`);
          }}
        >
          <Center mt={40}>
            <Image
              src={`${response?.product_img1}`}
              alt="p_img"
              width="100%"
              height={150}
              fit="contain"
            />
          </Center>
        </Card.Section>
        <Flex></Flex>
        <Group position="apart" spacing={2} mb={6}>
          <Text align="left" fw="600" className="text__cuis" mt={8} size="sm">
            {truncatMobile(response.name)}
          </Text>
          <Flex mt={5} align="center">
            <Rating defaultValue={response?.rate} size="xs" color="dark" />
            <Text size={11}>(0)</Text>
          </Flex>
        </Group>
        <Flex>
          <Text
            mt={10}
            mb={15}
            color="#212529"
            size={16}
            fw="500"
            sx={{ lineHeight: 0 }}
          >
            {response?.currency} {response.price}
          </Text>
        </Flex>
      </Card>
      {/* <Box sx={{ display: "block" }}>
        <Button
          variant="light"
          color="teal"
          sx={{ fontSize: "13px", fontWeight: "normal", float: "right" }}
          radius="xl"
          size="sm"
          leftIcon={<IconShoppingCart size={14} />}
          compact
        >
          Add to Kart
        </Button>
      </Box> */}
    </div>
  );
}

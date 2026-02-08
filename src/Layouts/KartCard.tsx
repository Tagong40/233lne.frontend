import React, { useRef, useState } from "react";
import {
  Card,
  Image,
  Button,
  Group,
  Text,
  Center,
  Flex,
  Skeleton,
} from "@mantine/core";
import { Rating } from "@mantine/core";
import { useNavigate } from "react-router-dom";

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
  loading?: boolean;
}

export default function KartCard({
  response,
  index,
  loading = false,
}: response) {
  const truncate = (str: any) =>
    str.length > 52 ? str.substring(0, 52) + "..." : str;
  const truncatMobile = (str: any) =>
    str.length > 25 ? str.substring(0, 25) + "..." : str;
  const navigate = useNavigate();
  const homeRef = useRef<HTMLDivElement>(null);

  const handleScrollToSection = (
    sectionRef: React.RefObject<HTMLDivElement>,
    section: string
  ) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{ width: "100%", marginBottom: 20 }}>
      <Card
        display={{ base: "none", lg: "grid", sm: "none", xs: "none" }}
        withBorder={false}
        radius={0}
        bg={"inherit"}
        onClick={() => {
          if (!loading) navigate(`/${response?.productId}`);
        }}
        p={0}
        w={300}
      >
        <Card.Section
          bg={"white"}
          style={{ borderRadius: 10 }}
          mb={10}
          onClick={() => {
            handleScrollToSection(homeRef, "home");
          }}
        >
          <Center p={30}>
            {loading ? (
              <Skeleton height={170} width="100%" />
            ) : (
              <Image
                src={response?.product_img1}
                alt="p_img"
                width="100%"
                height={170}
                fit="contain"
              />
            )}
          </Center>
        </Card.Section>

        <Flex gap={2} mb={10} direction={"column"}>
          <Flex align="center" justify="space-between">
            {loading ? (
              <Skeleton height={20} width="60%" />
            ) : (
              <Text fw="700" tt="capitalize" color="#343a40" size={16}>
                {truncate(response?.name?.slice(0, 25)?.toLowerCase())}
              </Text>
            )}
            {loading ? (
              <Skeleton height={20} width={50} />
            ) : (
              <Text color="#212529" size={16} fw="700">
                ₵{Number(response.price)?.toFixed(2)}
              </Text>
            )}
          </Flex>

          {loading ? (
            <Skeleton height={14} width="90%" />
          ) : (
            <Text
              dangerouslySetInnerHTML={{
                __html: response.description?.slice(0, 35),
              }}
              fz={13}
              c={"dark.3"}
              fw={600}
            />
          )}

          <Flex align="center">
            {loading ? (
              <Skeleton height={10} width={80} />
            ) : (
              <>
                <Rating defaultValue={response?.rate} size="xs" color="dark" />
                <Text size={11}>(0)</Text>
              </>
            )}
          </Flex>
        </Flex>

        <Flex>
          {loading ? (
            <Skeleton height={30} width={100} radius={30} />
          ) : (
            <Button
              variant="outline"
              fw={700}
              size="xs"
              color="teal.9"
              radius={30}
            >
              Add to Cart
            </Button>
          )}
        </Flex>
      </Card>

      {/* MOBILE VERSION */}
      <Card
        display={{ base: "grid", lg: "none", sm: "grid", xs: "none" }}
        radius="md"
        withBorder={false}
        bg={"inherit"}
        w={"100%"}
        p={0}
        onClick={() => {
          if (!loading) {
            handleScrollToSection(homeRef, "home");
            navigate(`/${response?.productId}`);
          }
        }}
      >
        {/* <div className="wishlist-icon">
          <Skeleton height={20} width={80} />
        </div> */}

        <Card.Section style={{ borderRadius: 10 }} p={20} bg={"white"}>
          <Center>
            {loading ? (
              <Skeleton height={150} width="100%" />
            ) : (
              <Image
                src={response?.product_img1}
                alt="p_img"
                width="100%"
                height={125}
                fit="contain"
              />
            )}
          </Center>
        </Card.Section>

        <Group position="apart" spacing={2} mb={6}>
          {loading ? (
            <Skeleton height={15} width="70%" />
          ) : (
            <Text align="left" fw="600" mt={8} size="sm">
              {truncatMobile(response.name)}
            </Text>
          )}

          {loading ? (
            <Skeleton height={10} width={60} />
          ) : (
            <Flex mt={5} align="center">
              <Rating defaultValue={response?.rate} size="xs" color="dark" />
              <Text size={11}>(0)</Text>
            </Flex>
          )}
        </Group>

        <Flex>
          {loading ? (
            <Skeleton height={20} width={70} />
          ) : (
            <Text mb={15} color="#212529" size={13} fw="700">
              {response?.currency} {response.price}
            </Text>
          )}
        </Flex>
      </Card>
    </div>
  );
}

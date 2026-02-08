import {
  Badge,
  Box,
  Button,
  Card,
  Center,
  Divider,
  Flex,
  Grid,
  Image,
  LoadingOverlay,
  Rating,
  Text,
} from "@mantine/core";
import React, { Fragment, useEffect, useState } from "react";
import Layout from "../Layouts/Layout";
import HomeObjs from "../Components/HomeObjs";
import { useCategory } from "../Store/useCategory";
import { useProduct } from "../Store/useProduct";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IconArrowBack, IconArrowLeft, IconShoppingBag } from "@tabler/icons";

export default function Details() {
  const { getCategory, category } = useCategory((state) => state);
  const { productDetails, details, load_details } = useProduct(
    (state) => state
  );
  const [img_select, setImgSelect] = useState(details?.product_img1);
  const [readmore, setReadMore] = useState(390);

  const { uid, storeName } = useParams();
  const navgate = useNavigate();

  const scrollToSection = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    productDetails({ uid, storeName });
    setImgSelect(details?.product_img1);
  }, []);

  useEffect(() => {
    setImgSelect(details?.product_img1);
    scrollToSection("section1");
  }, [details]);

  if (details?.options) {
    var options = JSON?.parse(details?.options);
  }

  const truncate = (str: any) => {
    return str?.length > readmore ? str?.substring(0, readmore) + "..." : str;
  };

  const generateRandomValue = () => {
    return Math.floor(Math.random() * 18) + 1;
  };

  const randomValue = generateRandomValue();

  return (
    <Layout>
      {/* <HomeObjs category={category} /> */}
      <div id="section1"> </div>

      <Flex pt={120} display="flex" gap={10} align="center">
        <IconArrowLeft
          size={27}
          style={{ cursor: "pointer" }}
          onClick={() => navgate(-1)}
        />
        <Text fw="bold" size={18}>
          Product Details
        </Text>
      </Flex>
      <Box p={30} pos="relative" mb={200} mt={30}>
        <LoadingOverlay
          overlayBlur={2}
          transitionDuration={500}
          visible={load_details}
        />

        <Grid gutter="xs">
          <Grid.Col lg={1}>
            <Flex gap={5} direction={{ lg: "column" }} p={0}>
              <Image
                sx={{
                  border: `${
                    img_select === details?.product_img1 ? "2px solid teal" : ""
                  }`,
                  borderRadius: 10,
                }}
                radius={10}
                onClick={() => setImgSelect(details?.product_img1)}
                mb={10}
                fit="cover"
                src={details?.product_img1}
              />
              <Image
                sx={{
                  border: `${
                    img_select === details?.product_img2 ? "2px solid teal" : ""
                  }`,
                  borderRadius: 10,
                }}
                radius={10}
                onClick={() => setImgSelect(details?.product_img2)}
                mb={10}
                fit="cover"
                src={details?.product_img2}
              />
              <Image
                sx={{
                  border: `${
                    img_select === details?.product_img3 ? "2px solid teal" : ""
                  }`,
                  borderRadius: 10,
                }}
                radius={10}
                mb={10}
                onClick={() => setImgSelect(details?.product_img3)}
                fit="cover"
                src={details?.product_img3}
              />
            </Flex>
          </Grid.Col>
          <Grid.Col lg={6}>
            <Center>
              <Image
                fit="contain"
                radius={10}
                width={"100%"}
                height={500}
                src={img_select}
              />
            </Center>
          </Grid.Col>
          <Grid.Col
            bg={"white"}
            sx={{ borderRadius: 10 }}
            px={{ lg: 30 }}
            lg={5}
          >
            <Box mt={20} w={"100%"}>
              <Text size={18} fw="600">
                {details?.name}
              </Text>
              <Flex mt={10} gap={5} align="center">
                <Rating
                  defaultValue={details?.rate}
                  size="xs"
                  value={randomValue}
                  color="teal"
                />
                <Text size="xs">({randomValue})</Text>
              </Flex>
            </Box>
            <Box mb={15} mt={15} w={"100%"}>
              <Text fw="bold" size={20}>
                {details?.currency} {Number(details?.price).toFixed(2)}
              </Text>
            </Box>
            {options?.color?.length ? (
              <Box mt={10} w={"100%"}>
                <Text fw="600" size={13}>
                  Color Available:
                </Text>

                <Flex>
                  {options?.color?.map((res: any, index: number) => (
                    <div key={index} className="color-selector">
                      <Box
                        mt={10}
                        display="flex"
                        className="color-option"
                        bg={res?.type?.toLowerCase()}
                        key={res?.type}
                      ></Box>
                    </div>
                  ))}
                </Flex>
              </Box>
            ) : (
              ""
            )}

            <Divider color="#eee" mt={10} mb={20} />

            <Box mb={15} mt={15} w={"100%"}>
              <Text mb={8} fw="600" size={13}>
                Description
              </Text>
              <Text
                sx={{ transition: "linear", fontWeight: 550 }}
                transform="capitalize"
                size={13}
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: truncate(details?.description?.toLowerCase()),
                  }}
                />
                {/* {truncate(details?.description?.toLowerCase())} */}
                {details?.description?.length > readmore ? (
                  <Text
                    onClick={() => setReadMore(readmore + readmore)}
                    sx={{ cursor: "pointer" }}
                    color="teal"
                    size={13}
                  >
                    read more
                  </Text>
                ) : details?.description?.length > 190 ? (
                  <Text
                    onClick={() => setReadMore(180)}
                    sx={{ cursor: "pointer" }}
                    color="teal"
                    size={13}
                  >
                    showless
                  </Text>
                ) : (
                  ""
                )}
              </Text>
            </Box>
            <Box mb={15} mt={70} w={"100%"}>
              <Link target="_blank" to={"#"}>
                <Button
                  color="teal.9"
                  size="lg"
                  fullWidth
                  radius={"lg"}
                  leftIcon={<IconShoppingBag stroke={1.3} size={22} />}
                >
                  <Text fw="normal" size={14}>
                    {" "}
                    Add to Cart
                  </Text>
                </Button>
              </Link>
            </Box>
          </Grid.Col>
        </Grid>
      </Box>
    </Layout>
  );
}

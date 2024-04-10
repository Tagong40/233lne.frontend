import React, { useEffect } from "react";
import { Search } from "../Layouts/Search";
import { useState } from "react";
import {
  Text,
  Burger,
  Box,
  Grid,
  Center,
  SimpleGrid,
  Flex,
  Button,
  LoadingOverlay,
} from "@mantine/core";
import KartCard from "../Layouts/KartCard";
import Layout from "../Layouts/Layout";
import { useProduct } from "../Store/useProduct";
import { useCategory } from "../Store/useCategory";
import HomeObjs from "../Components/HomeObjs";
import { Transition } from "@mantine/core";
import { useParams } from "react-router-dom";

export default function Home() {
  const { getProducts, product, category, getProductCategoy } = useProduct(
    (state) => state
  );
  const { storeName } = useParams();

  useEffect(() => {
    getProducts({ pagId: storeName });
    getProductCategoy();
  }, []);

  const objects = () => {
    return product.map((res: any, index) => {
      return (
        <Grid.Col key={index} span={6} md={6} lg={3}>
          <KartCard response={res} index={index} />
        </Grid.Col>
      );
    });
  };

  const [loading, setLoading] = useState(true);

  const scrollToSection = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Layout>
      <HomeObjs category={category} />
      <div id="home"> </div>

      <Box mt={15}>
        <Text fw="500" size={18}>
          Store Products
        </Text>
      </Box>
      <Transition
        mounted={product?.length ? true : false}
        transition="fade"
        duration={400}
        timingFunction="ease"
      >
        {(styles) => (
          <div style={styles}>
            <Box mt={30}>
              <Grid>{objects()}</Grid>
            </Box>
          </div>
        )}
      </Transition>
    </Layout>
  );
}

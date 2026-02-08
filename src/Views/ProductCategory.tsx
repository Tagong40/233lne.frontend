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
  Loader,
  LoadingOverlay,
  Rating,
  Text,
  Transition,
} from "@mantine/core";
import React, { Fragment, useEffect, useState } from "react";
import Layout from "../Layouts/Layout";
import HomeObjs from "../Components/HomeObjs";
import { useCategory } from "../Store/useCategory";
import { useProduct } from "../Store/useProduct";
import { Link, useNavigate, useParams } from "react-router-dom";
import KartCard from "../Layouts/KartCard";

export default function ProductCategory() {
  const { category } = useCategory((state) => state);
  const { details } = useProduct((state) => state);
  const { getCategoryProduct, fetch_cate_products, loading } = useCategory(
    (state) => state
  );

  const [img_select, setImgSelect] = useState(details?.product_img1);

  const { uid } = useParams();

  useEffect(() => {
    getCategoryProduct({ name: uid });
  }, [uid]);

  useEffect(() => {
    setImgSelect(details?.product_img1);
  }, [uid]);

  if (details?.options) {
    var options = JSON?.parse(details?.options);
  }

  const objects = () => {
    return fetch_cate_products.map((res: any, index: any) => {
      return (
        <Grid.Col key={index} span={6} md={6} lg={3}>
          <KartCard loading={loading} response={res} index={index} />
        </Grid.Col>
      );
    });
  };

  return (
    <Layout>
      <HomeObjs uuid={uid} category={category} />

      <Flex gap={5} align={"center"} mt={{ base: 40, lg: 100 }}>
        <Text fw="500" size={18}>
          {uid}
        </Text>
      </Flex>
      <Transition
        mounted={true}
        transition="fade"
        duration={400}
        timingFunction="ease"
      >
        {(styles) => (
          <div style={styles}>
            {fetch_cate_products.length ? (
              <Box mt={30}>
                <Grid>{objects()}</Grid>
              </Box>
            ) : (
              <Flex mt={30} justify="center">
                <Text fw={300}>No product found!</Text>
              </Flex>
            )}
          </div>
        )}
      </Transition>
    </Layout>
  );
}

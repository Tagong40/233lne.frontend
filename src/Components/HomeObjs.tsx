import {
  ActionIcon,
  Box,
  Card,
  Divider,
  Flex,
  Grid,
  ScrollArea,
  Text,
} from "@mantine/core";
import React from "react";
import { Search } from "../Layouts/Search";
import {
  IconBrandWhatsapp,
  IconCategory,
  IconHeart,
  IconPhone,
  IconShoppingBag,
} from "@tabler/icons";
import { Breadcrumb } from "../Layouts/Breadcrumbs";
import HomeSlider from "./HomeSlider";
import CategorySlider from "./CategorySlider";
import MobileCategory from "./MobileCategory";
import { useProduct } from "../Store/useProduct";
import HomeSliderMobile from "./HomeSliderMobile";

interface Props {
  category: [];
  uuid?: any;
}

export default function HomeObjs({ category, uuid }: Props) {
  const { store } = useProduct((state) => state);
  return (
    <div>
      <Flex justify="start" direction="row" align="center" mt={0} gap={15}>
        {/* <Box
          display={{ base: "none", lg: "flex", sm: "none", xs: "none" }}
          sx={{ flex: 1.2 }}
        >
          <Flex align="center">
            <IconPhone stroke={1} />
            <Text fw="500" color="#2e2e2e" size={14}>
              +233 53 144 6631
            </Text>
          </Flex>
        </Box> */}
        {/* <Box
          display={{ base: "none", lg: "flex", sm: "none", xs: "none" }}
          sx={{ flex: 1.2 }}
        >
          <Flex align="center">
            <IconBrandWhatsapp stroke={1} />
            <Text fw="500" color="#2e2e2e" size={14}>
              +233 53 144 6631
            </Text>
          </Flex>
        </Box> */}

        {/* <Search />

        <Box display={{ base: "none", lg: "flex", sm: "none", xs: "none" }}>
          <Flex sx={{ flex: 1 }} gap={20} justify="center" align="center">
            <IconShoppingBag size={25} stroke={1} />
            <IconHeart size={25} stroke={1} />
          </Flex>
        </Box> */}
      </Flex>
      {/* <Box
        mt={30}
        w={"100%"}
        display={{ base: "none", lg: "grid", sm: "none", xs: "none" }}
      >
        <CategorySlider uuid={uuid} category={category} />
      </Box>

      <Divider
        display={{ base: "none", lg: "flex", sm: "none", xs: "none" }}
        mt={20}
        mb={20}
        color="#eee"
      /> */}

      {/* <Box
        mt={30}
        display={{ base: "flex", lg: "none", sm: "flex", xs: "none" }}
      >
        <HomeSliderMobile />
      </Box> */}

      {/* <Box display={{ base: "none", lg: "flex", sm: "none", xs: "none" }}>
        <Breadcrumb />
      </Box> */}

      {/* <MobileCategory category={category} /> */}
    </div>
  );
}

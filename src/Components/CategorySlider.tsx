import { Carousel } from "@mantine/carousel";
import { Card, Flex, Grid, Image, ScrollArea, Text } from "@mantine/core";
import { useCategory } from "../Store/useCategory";
import { useProduct } from "../Store/useProduct";
import { useNavigate } from "react-router-dom";

interface Props {
  category: [];
  uuid: any;
}

function CategorySlider({ uuid }: Props) {
  const category = useProduct((state) => state.category);
  const navigate = useNavigate();
  return (
    <ScrollArea scrollHideDelay={0} offsetScrollbars scrollbarSize={2}>
      <Flex p={3} bg={"white"} gap={10} justify="center">
        {category?.map((rs: any, index) => (
          <Card
            onClick={() => navigate(`/category/${rs?.name}`)}
            key={index}
            sx={{
              borderColor: "teal",
              cursor: "pointer",
              borderRadius: 0,
              transition: "4s ease-out",
              borderBottom: uuid === rs.name ? "1px solid #333" : "",
            }}
          >
            <Card.Section
              sx={{
                padding: "5px 10px 5px 10px",
                textAlign: "center",
                transition: "4s ease",
              }}
            >
              <Text
                sx={{
                  lineBreak: "normal",
                  whiteSpace: "nowrap",
                  letterSpacing: 0.5,
                }}
                align="center"
                fw="bold"
                color="gray.7"
                tt="uppercase"
                size={13.5}
              >
                {" "}
                {rs?.name}
              </Text>
            </Card.Section>
          </Card>
        ))}

        {/* <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide> */}
        {/* ...other slides */}
      </Flex>
    </ScrollArea>
  );
}
export default CategorySlider;

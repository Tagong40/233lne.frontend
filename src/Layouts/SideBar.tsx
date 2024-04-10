import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button, Flex, Text, Divider, Transition } from "@mantine/core";
import { useCategory } from "../Store/useCategory";
import { useProduct } from "../Store/useProduct";
import { IconCategory, IconDashboard, IconMenu } from "@tabler/icons";
import { useNavigate } from "react-router-dom";

interface Props {
  open: () => void;
  close: () => void;
  opened: boolean;
  closeIcon: any;
}

function SideBar({ open, opened, close, closeIcon }: Props) {
  const category = useProduct((state) => state.category);
  const navigate = useNavigate();
  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => {
          close();
          closeIcon(false);
        }}
      >
        <Flex
          gap={20}
          align="center"
          justify={"center"}
          p={20}
          direction="column"
        >
          <Flex
            style={{ borderBottom: "1px solid #333" }}
            gap={5}
            mb={20}
            align="center"
            justify="center"
          >
            <Text fw="500" size="lg">
              Store Cateogory
            </Text>
            <IconCategory size={20} />
          </Flex>

          {category.map((results: { name: string }) => (
            <Transition
              mounted={opened}
              transition="pop"
              key={results.name}
              duration={400}
              timingFunction="ease"
            >
              {(styles) => (
                <div style={styles}>
                  <Text
                    style={{ cursor: "pointer" }}
                    fw={600}
                    tt={"uppercase"}
                    color="#333"
                    onClick={() => {
                      close();
                      closeIcon(false);
                      navigate(`/category/${results?.name}`);
                    }}
                    size="md"
                  >
                    {results?.name}
                  </Text>
                </div>
              )}
            </Transition>
          ))}
        </Flex>
      </Drawer>
    </>
  );
}

export default SideBar;

// import React, { useState } from "react";
// import {
//   Header,
//   MediaQuery,
//   Burger,
//   Group,
//   ActionIcon,
//   Box,
//   Flex,
// } from "@mantine/core";
// import { IconHeart, IconShoppingBag } from "@tabler/icons";
// import { AppHeader } from "../Layouts/Header";

// export default function HeaderMain() {
//   const [opened, setOpened] = useState(false);

//   return (
//     <>
//       <Header height={{ base: 50, md: 50 }} bg="#343a40" withBorder={false}>
//         <MediaQuery largerThan="sm" styles={{ display: "none" }}>
//           <Group position="apart" spacing="xl">
//             <Burger
//               opened={opened}
//               onClick={() => setOpened((o) => !o)}
//               size="sm"
//               color="teal"
//               m="sm"
//             />
//             <Flex mr={15} gap={15} justify="flex-end" align="center">
//               <ActionIcon color="teal" variant="transparent">
//                 <IconHeart size={23} />
//               </ActionIcon>
//               <ActionIcon color="teal" radius="md">
//                 <IconShoppingBag size={23} />
//               </ActionIcon>
//             </Flex>
//           </Group>
//         </MediaQuery>
//         <AppHeader />
//       </Header>
//     </>
//   );
// }

import React, { useState } from "react";
import {
  Header,
  MediaQuery,
  Burger,
  Group,
  ActionIcon,
  Box,
  Flex,
  Text,
} from "@mantine/core";
import { IconHeart, IconShoppingBag } from "@tabler/icons";
import { AppHeader } from "../Layouts/Header";
import { useProduct } from "../Store/useProduct";
import { useNavigate } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import SideBar from "../Layouts/SideBar";

export default function HeaderMain() {
  const [opens, setOpened] = useState(false);
  const { store } = useProduct((state) => state) as any;
  const navigate = useNavigate();

  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <SideBar
        closeIcon={setOpened}
        open={open}
        close={close}
        opened={opened}
      />
      <Header
        height={{ base: "100%", md: 50 }}
        bg={{ lg: "dark.4", base: "#fafafb" }}
        withBorder={false}
      >
        <MediaQuery largerThan={"md"} styles={{ display: "none" }}>
          <Group position="apart" spacing="xl">
            <Burger
              opened={opens}
              onClick={() => {
                setOpened((o) => !o);
                open();
              }}
              size={22}
              color="black"
              m="sm"
            />
            <Text
              onClick={() => navigate(`/`)}
              sx={{ cursor: "pointer" }}
              size="lg"
              fw={"bold"}
              color="#333"
              tt="uppercase"
            >
              The MiniVel Shop
            </Text>

            <Flex mr={12} gap={15} justify="center" align="center">
              {/* <IconHeart color="black" size={28} stroke={1} /> */}
              <IconShoppingBag color="black" size={28} stroke={1} />
            </Flex>
          </Group>
        </MediaQuery>
        <AppHeader />
      </Header>
    </>
  );
}

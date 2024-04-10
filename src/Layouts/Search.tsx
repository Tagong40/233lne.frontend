import { Box, Input, Tooltip } from "@mantine/core";
import { IconBrandTwitter, IconAlertCircle, IconSearch } from "@tabler/icons";

export function Search() {
  return (
    <Box w={"100%"} sx={{ flex: 5 }} className="header__search">
      <Input
        placeholder="Search Products"
        size="md"
        radius={5}
        rightSection={
          <div>
            <IconSearch size={16} style={{ display: "block", opacity: 0.5 }} />
          </div>
        }
      />
    </Box>
  );
}

import { Menu, Button, Text } from "@mantine/core";
import {
  IconArrowsLeftRight,
  IconChevronDown,
  IconChevronsDown,
  IconMessageCircle,
  IconPhoto,
  IconSearch,
  IconSettings,
  IconTrash,
} from "@tabler/icons";
import { useProduct } from "../../Store/useProduct";
import { useNavigate } from "react-router-dom";

export function HeaderCategory() {
  const category = useProduct((state) => state.category);
  const navigate = useNavigate();

  return (
    <Menu withArrow shadow="md" width={200}>
      <Menu.Target>
        <Button
          color="dark"
          rightIcon={<IconChevronDown size={17} />}
          variant="subtle"
        >
          Categories
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        {category.map((res: { name: string }, index) => (
          <Menu.Item
            onClick={() => navigate(`/category/${res?.name}`)}
            key={index}
          >
            {res.name}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}

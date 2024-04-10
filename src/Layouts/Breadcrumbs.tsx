import { Breadcrumbs, Anchor } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export function Breadcrumb() {
  const navigate = useNavigate();

  const items = [
    { title: "Home", href: "/" },
    { title: "Kartel Sell", href: "#" },
    { title: "Store Items", href: "#" },
  ].map((item, index) => (
    <Anchor
      onClick={() => navigate(`${item.href}`)}
      color="teal"
      size={12.5}
      key={index}
    >
      {item.title}
    </Anchor>
  ));

  return (
    <div
      style={{
        marginBottom: "2em",
      }}
    >
      <Breadcrumbs sx={{ fontSize: "14px", color: "teal" }}>
        {items}
      </Breadcrumbs>
    </div>
  );
}

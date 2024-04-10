import {
  IconClothesRack,
  IconDeviceComputerCamera,
  IconDeviceLaptop,
  IconDeviceMobile,
  IconDeviceTv,
  IconHomeShield,
  IconMicrowave,
  IconShirt,
  IconWashMachine,
} from "@tabler/icons";
import React from "react";

interface Props {
  type: string;
}

export default function IconBase({ type }: Props) {
  switch (type) {
    case "Computers & Accessories":
      return <IconDeviceLaptop stroke={1.2} size={50} />;
    case "TV, Audio & Video":
      return <IconDeviceTv size={50} stroke={1.2} />;
    case "Home Appliances":
      return <IconWashMachine size={50} stroke={1.2} />;
    case "Mobile Phones & Tablets":
      return <IconDeviceMobile size={50} stroke={1.2} />;
    case "Electronics":
      return <IconMicrowave size={50} stroke={1.2} />;
    case "Clothing & Fashion":
      return <IconShirt size={50} stroke={1.2} />;

    default:
      return null;
  }
}

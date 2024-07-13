import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { useMemo } from "react";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    playstation3: FaPlaystation,
    playstation4: FaPlaystation,
    playstation5: FaPlaystation,
    xbox: FaXbox,
    xbox360: FaXbox,
    "xbox-one": FaXbox,
    "xbox-series-x": FaXbox,
    nintendo: SiNintendo,
    "nintendo-switch": SiNintendo,
    mac: FaApple,
    macos: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
  };

  const uniquePlatforms = useMemo(() => {
    const seenIcons = new Set();
    return platforms.filter(({ slug }) => {
      const icon = iconMap[slug];
      if (icon && !seenIcons.has(icon)) {
        seenIcons.add(icon);
        return true;
      }
      return false;
    });
  }, []);

  return (
    <HStack marginY={2}>
      {uniquePlatforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color={"gray.500"} />
      ))}
    </HStack>
  );
};

export default PlatformIconList;

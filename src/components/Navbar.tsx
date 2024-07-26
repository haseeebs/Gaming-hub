import { HStack, Image, Link } from "@chakra-ui/react";
import logo from "../assets/Gemini_Generated_Image.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <HStack padding={"15px"}>
      <Link top={'/'}>
        <Image src={logo} boxSize={"100px"} />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;

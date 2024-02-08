import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import useGameQueryStore from "../storeGameQuery";

const NavBar = () => (
  // Hstack allows us to add components and elements horizontally in it
  <HStack padding="10px">
    <Image src={logo} boxSize="60px"></Image>
    <SearchInput />
    <ColorModeSwitch />
  </HStack>
);

export default NavBar;

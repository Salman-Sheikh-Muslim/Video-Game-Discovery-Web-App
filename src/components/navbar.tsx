import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import useGameQueryStore from "../storeGameQuery";
import { Link } from "react-router-dom";

const NavBar = () => (
  // Hstack allows us to add components and elements horizontally in it
  <HStack padding="10px">
    <Link to="/">
      <Image src={logo} boxSize="60px"></Image>
    </Link>
    <SearchInput />
    <ColorModeSwitch />
  </HStack>
);

export default NavBar;

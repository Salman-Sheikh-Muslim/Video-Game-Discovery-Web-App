import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => (
  // Hstack allows us to add components and elements horizontally in it
  <HStack justifyContent="space-between" padding="10px">
    <Image src={logo} boxSize="60px"></Image>
    <ColorModeSwitch />
  </HStack>
);

export default NavBar;

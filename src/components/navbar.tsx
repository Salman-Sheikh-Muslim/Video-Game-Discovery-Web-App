import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => (
  // Hstack allows us to add components and elements horizontally in it
  <HStack>
    <Image src={logo} boxSize="60px"></Image>
    <Text>Navbar</Text>
  </HStack>
);

export default NavBar;

import { BsGlobe2 } from "react-icons/bs";
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
import { HStack, Icon, Text } from "@chakra-ui/react";
import { Platform } from "../Hooks/useGames";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  //annotating iconMap
  /*
    This is called index signature [key: string].
    This represents a key or property in this object
    */
  //   const iconMap: { pc: string } = {
  const iconMap: { [key: string]: IconType } = {
    // This index signature means this object has any number of keys/properties of type string.

    /*
    By using index signature syntax we do not have to specify the name
    of these keys.
    */

    //Its better to rely on the slug than the name because slug is not supposed to change.
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    ninteno: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <HStack marginY={1}>
      {/*  marginY={1} // 1 is multipled by themespace=4px value define in chakra. So marginY will be 4px. */}
      {platforms.map((platform) => (
        //   <Text>{platform.name}</Text>
        <Icon as={iconMap[platform.slug]} color="gray.500" />
        // In chakra we have various colors and each color comes in different shades.
      ))}
    </HStack>
  );
};

export default PlatformIconList;

import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatforms from "../Hooks/usePlatforms";
import { Platform } from "../Hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platform) => void; //this function takes a platform object of type Platform
  selectedPlatform: Platform | null;
}
const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    //Menu chakra defined component can be used to render a beauiful drop down list.
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        {/* {selectedPlatform?.name ? selectedPlatform.name : "Platforms"} */}
        {selectedPlatform?.name || "All Platforms"}
      </MenuButton>

      <MenuList>
        {/* <MenuItem onClick={() => onSelectPlatform(platform)} key={"All Platforms"}>
          All Platforms
        </MenuItem> */}
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;

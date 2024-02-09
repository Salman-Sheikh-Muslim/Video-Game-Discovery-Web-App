import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatforms from "../Hooks/usePlatforms";
import { Platform } from "../entities/Platform";
import useLookUpPlatform from "../Hooks/useLookUp";
import useGameQueryStore from "../storeGameQuery";

const PlatformSelector = () => {
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const { data, error } = usePlatforms();
  //const selectedPlatform = useLookUp<Platform>(data, selectedPlatformId);
  const selectedPlatform = useLookUpPlatform(selectedPlatformId);
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
            onClick={() => setPlatformId(platform.id)}
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

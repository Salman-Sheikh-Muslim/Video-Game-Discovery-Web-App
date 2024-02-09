import {
  Grid,
  GridItem,
  useBreakpointValue,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";
import CriticScore from "./CriticScore";
import Platform from "../entities/Platform";

export interface Props {
  parent_platforms: { platform: Platform }[];
  metascore: number;
}

const RectangleUI: React.FC<Props> = ({ parent_platforms, metascore }) => {
  const columns = useBreakpointValue({ base: 1, md: 2 });
  return (
    <>
      <Grid
        templateColumns={`repeat(${columns}, 1fr)`}
        templateRows={columns === 1 ? "repeat(4, 175px)" : "repeat(2, 175px)"} // Change the height as needed
        gap={4} // Adjust the gap between cells as needed
      >
        <GridItem bg="blue.200" borderRadius="md">
          <Heading>Platforms</Heading>
          {parent_platforms?.map(({ platform }) => (
            <Text key={platform.id}>{platform.name}</Text>
          ))}
        </GridItem>
        <GridItem borderRadius="md">
          <Heading>Metascore</Heading>
          <CriticScore score={metascore} />
        </GridItem>
        <GridItem bg="yellow.200" borderRadius="md" />
        <GridItem bg="red.200" borderRadius="md" />
      </Grid>
    </>
  );
};

export default RectangleUI;

import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const GameCardContainer = ({ children }: Props) => {
  return (
    // When Box component is rendered it retuns a div
    <Box
      borderRadius={10}
      overflow="hidden"
      cursor="pointer"
      _hover={{
        transform: "scale(1.05)",
      }}
      transition="transform 0.3s ease, box-shadow 0.3s ease"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;

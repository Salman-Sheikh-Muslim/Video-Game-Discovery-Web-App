import { Box } from "@chakra-ui/react";
import { MouseEventHandler, ReactNode } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

interface Props {
  children: ReactNode;
}
const GameCardContainer = ({ children }: Props) => {
  return (
    // When Box component is rendered it retuns a div
    <Box
      borderRadius={10}
      overflow="hidden"
      _hover={{
        transform: "scale(1.05)",
        transition: "transform 0.15s ease-in",
      }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;

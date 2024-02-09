import { Box } from "@chakra-ui/react";
import { MouseEventHandler, ReactNode } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

interface Props {
  children: ReactNode;
  gameId?: number;
}
const GameCardContainer = ({ children, gameId }: Props) => {
  const navigate = useNavigate();

  const handleClick: MouseEventHandler<HTMLDivElement> = () => {
    if (gameId !== undefined) {
      console.log(gameId);
      navigate(`games/${gameId}`);
    }
  };
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
      onClick={handleClick}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;

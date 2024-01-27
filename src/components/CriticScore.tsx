import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius="4px">
      {/* if we use color attribute/property it only changes the foreground color while
        colorScheme includes all kinds of colors foreground, background, border color etc. */}
      {score}
    </Badge>
  );
};

export default CriticScore;

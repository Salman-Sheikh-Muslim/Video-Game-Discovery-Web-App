import React, { useState } from "react";
import { Text, Button } from "@chakra-ui/react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [isExpanded, setExpanded] = useState(false);
  const maxChars = 300;

  if (!children) return null; //if children is falsey return null

  if (children.length <= maxChars) return <Text>{children}</Text>;
  const text = isExpanded ? children : children.substring(0, maxChars) + "...";
  return (
    <>
      <Text>
        {" "}
        {text}
        <Button
          size="xs"
          fontWeight="bold"
          colorScheme="yellow"
          marginLeft={1}
          onClick={() => setExpanded(!isExpanded)}
        >
          {isExpanded ? "Show Less" : "Read More"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;

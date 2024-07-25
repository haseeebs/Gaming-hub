import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;

  const summary = expanded ? children : children.slice(0, limit) + "...";

  return (
    <Text>
      {summary}
      <Button
        onClick={() => setExpanded(!expanded)}
        marginLeft={1}
        colorScheme="yellow"
        size="xs"
        aria-expanded={expanded}
      >
        {expanded ? "Show less" : "Read more"}
      </Button>
    </Text>
  );
};

export default ExpandableText;

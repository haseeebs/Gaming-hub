// src/components/GameScreenshots.tsx
import { Box, Image, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useScreenshot from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data: screenshots, error, isLoading } = useScreenshot(gameId);

  if (isLoading) return <Spinner />;
  if (error) return <Text>{error.message}</Text>;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4}>
      {screenshots?.results.map((screenshot) => (
        <Box key={screenshot.id} borderRadius="md" overflow="hidden">
          <Image src={screenshot.image} alt={`Screenshot ${screenshot.id}`} />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;

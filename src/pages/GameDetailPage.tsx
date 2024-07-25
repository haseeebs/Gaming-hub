import { useParams } from "react-router-dom";
import { Heading, Spinner, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <div>
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
    </div>
  );
};

export default GameDetailPage;
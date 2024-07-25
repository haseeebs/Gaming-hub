import { SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import CriticScore from "./CriticScore";
import DefinationItem from "./DefinationItem";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as={"dl"}>
      <DefinationItem
        text="Platform"
        children={game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      />

      <DefinationItem
        text="MetaScore"
        children={<CriticScore score={game.metacritic} />}
      />

      <DefinationItem
        text="Genre"
        children={game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      />

      <DefinationItem
        text="Publisher"
        children={game.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      />
    </SimpleGrid>
  );
};

export default GameAttributes;

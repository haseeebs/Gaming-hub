import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import GenreListSkeleton from "./GenreListSkeleton";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const setSelectedGenreId = useGameQueryStore(store => store.setGenreId)
  const selectedGenreId = useGameQueryStore(store => store.gameQuery.genreId)

  if (error) return null;

  if (isLoading) return <GenreListSkeleton />;

  return (
    <List>
      {data?.results.map((genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              src={genre.image_background}
              boxSize={"32px"}
              borderRadius={8}
              objectFit={"cover"}
            />
            <Button
              fontSize={"large"}
              variant={"ghost"}
              onClick={() => setSelectedGenreId(genre.id)}
              fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
              whiteSpace={"normal"}
              textAlign={"left"}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;

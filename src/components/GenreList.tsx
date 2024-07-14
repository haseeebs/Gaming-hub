import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  if(error) return null;

  return (
    <List>

    {isLoading && <GenreListSkeleton />}

      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={'5px'}>
          <HStack>
            <Image src={genre.image_background} boxSize={'32px'} borderRadius={8}/>
            <Text fontSize={'large'}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;

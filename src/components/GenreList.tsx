import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres from "../Hooks/useGenres";
import Genre from "../entities/Genre";
import getCroppedImageURL from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";
import useGameQueryStore from "../storeGameQuery";

// interface Props {
//   onSelectGenre: (genre: Genre) => void;
//   selectedGenreId?: number;
// }
const GenreList = () => {
  //   const { genres } = useGenres();
  const { data, isLoading, error } = useGenres();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return null;
  if (isLoading) return <Spinner />;

  /* {isLoading &&
        skeletons.map((skeleton) => (
          <List>
          <ListItem key={skeleton} paddingY="5px">
          <GenreListSkeleton />
          </ListItem>
          </List>
        ))} */
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {/* List chakra component renders a list without bullet points. */}
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageURL(genre.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                onClick={() => setGenreId(genre.id)}
                fontSize="lg"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;

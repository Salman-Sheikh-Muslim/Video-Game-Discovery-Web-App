import {
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres from "../Hooks/useGenres";
import getCroppedImageURL from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";
const GenreList = () => {
  //   const { genres } = useGenres();
  const { data, isLoading, error } = useGenres();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return null;
  //if (isLoading) return <Spinner />;

  return (
    <>
      {isLoading &&
        skeletons.map((skeleton) => (
          <>
            <List>
              <ListItem key={skeleton} paddingY="5px">
                <GenreListSkeleton />
              </ListItem>
            </List>
          </>
        ))}

      <List>
        {/* List chakra component renders a list without bullet points. */}
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageURL(genre.image_background)}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;

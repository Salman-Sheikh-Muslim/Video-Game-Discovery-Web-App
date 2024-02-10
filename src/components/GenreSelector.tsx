import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronBarDown } from "react-icons/bs";
import useGenres from "../Hooks/useGenres";
import Genre from "../entities/Genre";
import useLookUpGenre from "../Hooks/useLookUp";
import useGameQueryStore from "../storeGameQuery";

const GenreSelector = () => {
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  const { data, error } = useGenres();
  //const selectedGenre = useLookUp<Genre>(data, selectedGenreId);
  const selectedGenre = useLookUpGenre(selectedGenreId);
  if (error) return null;

  console.log("Genre Selector Default Value: " + selectedGenre);
  return (
    //Menu chakra defined component can be used to render a beauiful drop down list.
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        {/* {selectedGenre?.name ? selectedGenre.name : "Genres"} */}
        {selectedGenre?.name || "All Genres"}
      </MenuButton>

      <MenuList>
        {/* <MenuItem onClick={() => onSelectGenre(Genre)} key={"All Genres"}>
          All Genres
        </MenuItem> */}
        {data?.results.map((genre) => (
          <MenuItem onClick={() => setGenreId(genre.id)} key={genre.id}>
            {genre.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default GenreSelector;

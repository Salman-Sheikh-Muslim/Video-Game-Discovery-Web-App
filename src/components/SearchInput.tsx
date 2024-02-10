import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import useGameQueryStore from "../storeGameQuery";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText); //This component will only re-render if setSearchText function is called.
  const ref = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value);
          navigate("/");
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          onChange={(event) => {
            if (event.target.value.length >= 3) {
              setSearchText(event.target.value);
              navigate("/");
            }
            if (event.target.value.length <= 2) {
              setSearchText(undefined);
              navigate("/");
            }
          }}
          ref={ref}
          borderRadius={20}
          placeholder="Search Games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;

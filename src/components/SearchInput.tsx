import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import useGameQueryStore from "../storeGameQuery";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText); //This component will only re-render if setSearchText function is called.
  const ref = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const handleBlur = () => {
    if (ref.current && ref.current.value.length !== 0) {
      ref.current.value = "";
      setSearchText(undefined);
    }
  };

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
          onBlur={handleBlur}
          ref={ref}
          borderRadius={20}
          placeholder="Search Games... Type at least 3 characters"
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;

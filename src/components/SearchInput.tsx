import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { useRef } from "react";
import { BiSearch } from "react-icons/bi";
import useMovieStore from "../store";

const SearchInput = () => {
  const updateSearchQuery = useMovieStore((s) => s.updateSearchQuery);
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        // setting the movieQuery to empty string to fetch the latest movies
        if (ref.current && ref.current.value)
          updateSearchQuery(ref.current.value);
        else updateSearchQuery("");
      }}
    >
      <InputGroup
        width={{
          base: "100%",
          lg: "60%",
        }}
      >
        <InputLeftElement>
          <BiSearch />
        </InputLeftElement>
        <Input ref={ref} variant="filled" placeholder="Search Movies...." />
      </InputGroup>
    </form>
  );
};

export default SearchInput;

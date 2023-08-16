import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { useRef } from "react";
import { BiSearch } from "react-icons/bi";
import useMovieStore from "../store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const updateSearchQuery = useMovieStore((s) => s.updateSearchQuery);
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        // setting the movieQuery to empty string to fetch the latest movies
        if (ref.current) {
          updateSearchQuery(ref.current.value);
          navigate("/");
        } else updateSearchQuery("");
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

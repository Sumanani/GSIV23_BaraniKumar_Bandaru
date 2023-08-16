import { HStack, IconButton } from "@chakra-ui/react";
import { BiSolidHome } from "react-icons/bi";
import SearchInput from "./SearchInput";
import { useNavigate } from "react-router-dom";
import useMovieStore from "../store";

const NavBar = () => {
  const updateSearchQuery = useMovieStore((s) => s.updateSearchQuery);
  const navigate = useNavigate();
  return (
    <HStack
      w="100%"
      justify={{
        base: "flex-start",
        lg: "space-between",
      }}
    >
      <SearchInput />
      <IconButton
        onClick={() => {
          updateSearchQuery("");
          navigate("/");
        }}
        aria-label="Home"
        icon={<BiSolidHome />}
      />
    </HStack>
  );
};

export default NavBar;

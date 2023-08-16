import { HStack, IconButton } from "@chakra-ui/react";
import { BiSolidHome } from "react-icons/bi";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack
      w="100%"
      justify={{
        base: "flex-start",
        lg: "space-between",
      }}
    >
      <SearchInput />
      <IconButton aria-label="Home" icon={<BiSolidHome />} />
    </HStack>
  );
};

export default NavBar;

import { HStack, IconButton } from "@chakra-ui/react";
import { BiSolidHome } from "react-icons/bi";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (query: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack
      width="100%"
      justify={{
        base: "flex-start",
        lg: "space-between",
      }}
    >
      <SearchInput onSearch={onSearch} />
      <IconButton aria-label="Home" icon={<BiSolidHome />} />
    </HStack>
  );
};

export default NavBar;

import {
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { BiSolidHome, BiSearch } from "react-icons/bi";

const NavBar = () => {
  return (
    <HStack
      width="100%"
      justify={{
        base: "flex-start",
        xl: "space-between",
      }}
    >
      <InputGroup
        width={{
          base: "100%",
          xl: "60%",
        }}
      >
        <InputLeftElement>
          <BiSearch />
        </InputLeftElement>
        <Input placeholder="Search Movies...." />
      </InputGroup>
      <IconButton aria-label="Home" icon={<BiSolidHome />} />
    </HStack>
  );
};

export default NavBar;

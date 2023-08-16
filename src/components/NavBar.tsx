import { HStack, IconButton } from "@chakra-ui/react";
import { BiSolidHome } from "react-icons/bi";
import SearchInput from "./SearchInput";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
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
        onClick={() => navigate("/")}
        aria-label="Home"
        icon={<BiSolidHome />}
      />
    </HStack>
  );
};

export default NavBar;

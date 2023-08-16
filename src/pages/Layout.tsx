import { Outlet } from "react-router-dom";
import { Box, VStack } from "@chakra-ui/react";
import NavBar from "./../components/NavBar";

const Layout = () => {
  return (
    <Box
      padding={{
        base: "4",
        md: "6",
        xl: "8",
      }}
    >
      <VStack spacing={8} alignItems="flex-start">
        <NavBar />
        <Outlet />
      </VStack>
    </Box>
  );
};

export default Layout;

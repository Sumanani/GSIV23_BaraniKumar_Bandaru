import { Box, VStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import MovieGrid from "./components/MovieGrid";
import { useState } from "react";

export interface MovieQuery {
  query?: string;
}

const App = () => {
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
        <MovieGrid />
      </VStack>
    </Box>
  );
};

export default App;

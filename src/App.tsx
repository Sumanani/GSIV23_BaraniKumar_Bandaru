import { Box, VStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import MovieGrid from "./components/MovieGrid";

const App = () => {
  return (
    <Box
      width="100vw"
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

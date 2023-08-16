import { Box, VStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

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
      <VStack alignItems="flex-start">
        <NavBar />
        <Box width="100%" backgroundColor="blue">
          Main
        </Box>
      </VStack>
    </Box>
  );
};

export default App;

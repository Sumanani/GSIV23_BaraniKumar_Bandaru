import { Box, VStack } from "@chakra-ui/react";

const App = () => {
  return (
    <VStack alignItems="flex-start" width="100vw">
      <Box width="100%" backgroundColor="green">
        Nav Bar
      </Box>
      <Box width="100%" backgroundColor="blue">
        Main
      </Box>
    </VStack>
  );
};

export default App;

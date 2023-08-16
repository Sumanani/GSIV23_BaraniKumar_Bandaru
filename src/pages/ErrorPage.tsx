import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  const message = isRouteErrorResponse(error)
    ? "Sorry, the page does not exist."
    : "Something went wrong.";
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
        <Box>
          <Heading>Oops...</Heading>
          <Text>{message}</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default ErrorPage;

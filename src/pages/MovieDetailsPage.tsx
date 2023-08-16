import { Box, HStack, Image, Spinner, Stack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import MovieDetailsAttributes from "../components/MovieDetailsAttributes";
import useMovie from "../hooks/useMovie";
import noImage from "../assets/no-image.png";

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const { data, error, isLoading } = useMovie(movieId!);

  if (error) throw error;

  if (isLoading)
    return (
      <HStack justify="center" w="100%" h="500px">
        <Spinner />
      </HStack>
    );

  const imageUrl = data.poster_path
    ? "https://image.tmdb.org/t/p/w500" + data.poster_path
    : noImage;

  const imageHeight = data.poster_path ? "520px" : "250px";

  return (
    <Stack
      direction={{
        base: "column",
        md: "row",
      }}
      justify={{
        base: "center",
        md: "flex-start",
      }}
      align={{
        base: "center",
        md: "flex-start",
      }}
    >
      <Image
        h={imageHeight}
        objectFit="cover"
        borderRadius="12px"
        src={imageUrl}
      />
      <Box marginTop={5}>
        <MovieDetailsAttributes movieDetails={data} />
      </Box>
    </Stack>
  );
};

export default MovieDetailsPage;

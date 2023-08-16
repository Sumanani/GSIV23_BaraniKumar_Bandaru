import { HStack, Heading, Text, Box, Stack } from "@chakra-ui/react";
import RatingBadge from "../components/RatingBadge";
import { Movie } from "../hooks/useMovies";

interface Props {
  movieDetails: Movie;
}

const MovieDetailsAttributes = ({ movieDetails }: Props) => {
  const {
    original_title,
    overview,
    runtime,
    release_date,
    genres,
    vote_average,
  } = movieDetails;

  const year = release_date.slice(0, 4);
  const length = `${Math.floor(runtime / 60).toString()}h ${runtime % 60}m`;

  return (
    <>
      <Stack
        direction={{
          base: "column",
          md: "row",
        }}
        align={{
          base: "start",
          md: "flex-end",
        }}
      >
        <Heading
          size={{
            base: "xl",
            lg: "2xl",
          }}
        >
          {original_title}
        </Heading>
        <Box marginLeft={2} paddingBottom="3px">
          <RatingBadge vote_average={vote_average} />
        </Box>
      </Stack>
      <Box paddingX={3}>
        <Text
          marginTop={5}
          marginBottom={4}
          fontSize="lg"
        >{`${year} | ${length}`}</Text>
        <HStack>
          <Text fontSize="lg">Genre: </Text>
          {genres?.map((genre, index) => {
            return (
              <Text
                fontSize="lg"
                color={"gray.500"}
                fontWeight="bold"
                key={genre.id}
              >
                {index === genres.length - 1
                  ? `${genre.name}`
                  : `${genre.name},`}
              </Text>
            );
          })}
        </HStack>
        <Text marginY={4} fontSize="lg">{`Description: ${overview}`}</Text>
      </Box>
    </>
  );
};

export default MovieDetailsAttributes;

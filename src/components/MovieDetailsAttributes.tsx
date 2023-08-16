import { Heading, Text, Box, Stack } from "@chakra-ui/react";
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

  const genreList = genres?.reduce((accumulator, genre, index) => {
    const result = index === genres.length - 1 ? genre.name : `${genre.name}, `;
    return accumulator + result;
  }, "");

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
          color={"gray.500"}
          marginTop={5}
          marginBottom={4}
          fontSize="lg"
        >{`${year} | ${length}`}</Text>

        <Text fontSize="lg" color={"gray.500"}>{`Genres: ${genreList} `}</Text>

        <Text
          marginY={4}
          color={"gray.600"}
          fontSize="lg"
        >{`Description: ${overview}`}</Text>
      </Box>
    </>
  );
};

export default MovieDetailsAttributes;

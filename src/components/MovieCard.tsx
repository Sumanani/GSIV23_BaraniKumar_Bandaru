import { Card, CardBody, HStack, Text, Image, Heading } from "@chakra-ui/react";
import { Movie } from "../hooks/useMovies";
import RatingBadge from "./RatingBadge";
import { easeIn, transform } from "framer-motion";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  const summary =
    movie.overview.length >= 100
      ? movie.overview.slice(0, 100) + "..."
      : movie.overview;
  return (
    <Card
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
      }}
      borderRadius="10px"
      overflow="hidden"
    >
      <Image src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} />
      <CardBody>
        <HStack marginY={2} justify="space-between">
          <Heading fontSize="xl">{movie.original_title}</Heading>
          <RatingBadge vote_average={movie.vote_average} />
        </HStack>
        <Text>{summary}</Text>
      </CardBody>
    </Card>
  );
};

export default MovieCard;

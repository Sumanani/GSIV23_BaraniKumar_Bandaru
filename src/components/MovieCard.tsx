import { Card, CardBody, HStack, Text, Image, Heading } from "@chakra-ui/react";
import noImage from "../assets/no-image.png";
import { Movie } from "../hooks/useMovies";
import RatingBadge from "./RatingBadge";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  const { overview, backdrop_path } = movie;

  const imageUrl = backdrop_path
    ? "https://image.tmdb.org/t/p/w500" + backdrop_path
    : noImage;

  const summary =
    overview.length >= 100 ? overview.slice(0, 100) + "..." : overview;

  return (
    <Card
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
      }}
      borderRadius="10px"
      overflow="hidden"
    >
      <Image src={imageUrl} />
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

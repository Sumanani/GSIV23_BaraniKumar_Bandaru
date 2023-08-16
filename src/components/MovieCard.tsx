import {
  Button,
  Card,
  CardBody,
  HStack,
  Text,
  Image,
  Heading,
} from "@chakra-ui/react";
import { Movie } from "../hooks/useMovies";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card borderRadius="10px" overflow="hidden">
      <Image src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} />
      <CardBody>
        <HStack marginY={2} justify="space-between">
          <Heading fontSize="xl" color={"gray.700"}>
            {movie.original_title}
          </Heading>
          <Button size={"xs"}>{movie.vote_average}</Button>
        </HStack>
        <Text>{movie.overview}</Text>
      </CardBody>
    </Card>
  );
};

export default MovieCard;

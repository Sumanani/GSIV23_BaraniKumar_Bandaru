import { Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useMovie from "../hooks/useMovie";

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const { data } = useMovie(movieId!);
  console.log(data);

  return <Text>{"Movie Details Page: " + movieId}</Text>;
};

export default MovieDetailsPage;

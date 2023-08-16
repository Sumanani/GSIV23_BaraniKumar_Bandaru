import { Badge } from "@chakra-ui/react";

interface Props {
  vote_average: number;
}

const RatingBadge = ({ vote_average }: Props) => {
  const color =
    vote_average > 8 ? "green" : vote_average > 5 ? "yellow" : "red";
  return (
    <Badge
      variant="outline"
      colorScheme={color}
      fontSize="14px"
      paddingX={2}
      borderRadius="4px"
    >
      {vote_average}
    </Badge>
  );
};

export default RatingBadge;

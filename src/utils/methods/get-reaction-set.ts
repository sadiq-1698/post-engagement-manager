import { ReactionsType } from "types/global";
import { POSITIVE_REACTIONS } from "enums/index";

const getReactionSet = (key: string): ReactionsType => {
  switch (key) {
    case "positive":
      return POSITIVE_REACTIONS;
    case "negative":
      return [];
    default:
      return POSITIVE_REACTIONS;
  }
};

export default getReactionSet;

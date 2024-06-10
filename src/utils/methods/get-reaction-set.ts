import { POSITIVE_REACTIONS } from "enums/index";

const getReactionSet = (key: string): Array<{ key: string; label: string }> => {
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

import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaAndroid,
  FaLinux,
} from "react-icons/fa";
import { SiNintendo, SiAtari } from "react-icons/si";
import { GoBrowser } from "react-icons/go";
import { MdComputer } from "react-icons/md";

export const MetacriticStyle = (metacritic) =>
  metacritic === null
    ? {
        border: "none",
      }
    : metacritic >= 75
    ? {
        borderColor: "#66CC33",
        color: "#66CC33",
      }
    : metacritic >= 50 && metacritic < 75
    ? {
        borderColor: "#FFCC33",
        color: "#FFCC33",
      }
    : {
        borderColor: "#FF0000",
        color: "#FF0000",
      };

export function GetPlatformIcon(platform) {
  switch (platform) {
    case "PC":
      return <FaWindows />;

    case "PlayStation":
      return <FaPlaystation />;

    case "Xbox":
      return <FaXbox />;

    case "iOS":
      return <FaApple />;

    case "Apple Macintosh":
      return <MdComputer />;

    case "Android":
      return <FaAndroid />;

    case "Linux":
      return <FaLinux />;

    case "Nintendo":
      return <SiNintendo />;

    case "Atari":
      return <SiAtari />;

    case "Web":
      return <GoBrowser />;

    default:
      break;
  }
}

export function DateFormatter(date) {
  return new Date(date).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function ProgressBarVariant(title) {
  if (title === "exceptional") return "success";
  else if (title === "meh") return "warning";
  else if (title === "skip") return "danger";
  return;
}

export function UpperCaseFirstLetter(string) {
  return string[0].toUpperCase() + string.substring(1);
}

export function OverallRatingColor(rating) {
  if (rating >= 4) return "#198754";
  else if (rating >= 2 && rating < 4) return "#FFC107";
  return "#EA0202";
}

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

export const metacriticStyle = (metacritic) =>
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

export function getPlatformIcon(platform) {
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

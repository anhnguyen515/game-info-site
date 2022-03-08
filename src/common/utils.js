import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaAndroid,
  FaLinux,
  FaSteamSquare,
  FaGooglePlay,
} from "react-icons/fa";
import {
  SiNintendoswitch,
  SiAtari,
  SiGogdotcom,
  SiEpicgames,
  SiItchdotio,
} from "react-icons/si";
import { GoBrowser } from "react-icons/go";
import { MdComputer } from "react-icons/md";

export const MetacriticStyle = (metacritic) =>
  metacritic === null
    ? {
        border: "none",
      }
    : metacritic >= 75
    ? {
        borderColor: "chartreuse",
        color: "chartreuse",
      }
    : metacritic >= 50 && metacritic < 75
    ? {
        borderColor: "yellow",
        color: "yellow",
      }
    : {
        borderColor: "red",
        color: "red",
      };

/*
  platforms functions 
*/
export function GetPlatformName(id) {
  let name;
  switch (id) {
    case 1:
      name = "PC";
      break;

    case 2:
      name = "PlayStation";
      break;

    case 3:
      name = "Xbox";
      break;

    case 4:
      name = "iOS";
      break;

    case 8:
      name = "Android";
      break;

    case 5:
      name = "Apple Macintosh";
      break;

    case 6:
      name = "Linux";
      break;

    case 7:
      name = "Nintendo";
      break;

    default:
      break;
  }
  return name;
}

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
      return <SiNintendoswitch />;

    case "Atari":
      return <SiAtari />;

    case "Web":
      return <GoBrowser />;

    default:
      break;
  }
}

/*
  genres function
*/
export function GetGenreName(id) {
  switch (id) {
    case 4:
      return "Action";

    case 51:
      return "Indie";

    case 3:
      return "Adventure";

    case 5:
      return "RPG";

    case 10:
      return "Strategy";

    case 2:
      return "Shooter";

    case 40:
      return "Casual";

    case 14:
      return "Simulation";

    case 7:
      return "Puzzle";

    case 11:
      return "Arcade";

    case 83:
      return "Plarformer";

    case 1:
      return "Racing";

    case 59:
      return "Massively Multiplayer";

    case 15:
      return "Sports";

    case 6:
      return "Fighting";

    case 19:
      return "Family";

    case 28:
      return "Board Games";

    case 34:
      return "Educational";

    case 17:
      return "Card";

    default:
      break;
  }
}

/*
  stores function 
*/
export function getStoreIcon(storeId) {
  switch (storeId) {
    case 1:
      return (
        <>
          <span>
            <FaSteamSquare />
          </span>
          Steam
        </>
      );

    case 3:
      return (
        <>
          <span>
            <FaPlaystation />
          </span>
          PlayStation Store
        </>
      );

    case 2:
      return (
        <>
          <span>
            <FaXbox />
          </span>
          Xbox Store
        </>
      );

    case 7:
      return (
        <>
          <span>
            <FaXbox />
          </span>
          Xbox 360 Store
        </>
      );

    case 4:
      return (
        <>
          <span>
            <FaApple />
          </span>
          App Store
        </>
      );

    case 5:
      return (
        <>
          <span>
            <SiGogdotcom />
          </span>
          GOG
        </>
      );

    case 6:
      return (
        <>
          <span>
            <SiNintendoswitch />
          </span>
          Nintendo Store
        </>
      );

    case 8:
      return (
        <>
          <span>
            <FaGooglePlay />
          </span>
          Google Play
        </>
      );

    case 9:
      return (
        <>
          <span>
            <SiItchdotio />
          </span>
          itch.io
        </>
      );

    case 11:
      return (
        <>
          <span>
            <SiEpicgames />
          </span>
          Epic Games
        </>
      );

    default:
      break;
  }
}

/*
  other functions
*/
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
  if (rating >= 4) return "chartreuse";
  else if (rating >= 2 && rating < 4) return "yellow";
  return "red";
}

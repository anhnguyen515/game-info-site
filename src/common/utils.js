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
  SiNintendo,
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

export function getStoreIcon(storeId) {
  switch (storeId) {
    case 1:
      return (
        <span>
          <FaSteamSquare /> Steam
        </span>
      );

    case 3:
      return (
        <span>
          <FaPlaystation /> PlayStation Store
        </span>
      );

    case 2:
      return (
        <span>
          <FaXbox /> Xbox Store
        </span>
      );

    case 7:
      return (
        <span>
          <FaXbox /> Xbox 360 Store
        </span>
      );

    case 4:
      return (
        <span>
          <FaApple /> App Store
        </span>
      );

    case 5:
      return (
        <span>
          <SiGogdotcom /> GOG
        </span>
      );

    case 6:
      return (
        <span>
          <SiNintendo /> Nintendo Store
        </span>
      );

    case 8:
      return (
        <span>
          <FaGooglePlay /> Google Play
        </span>
      );

    case 9:
      return (
        <span>
          <SiItchdotio /> itch.io
        </span>
      );

    case 11:
      return (
        <span>
          <SiEpicgames /> Epic Games
        </span>
      );

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
  if (rating >= 4) return "chartreuse";
  else if (rating >= 2 && rating < 4) return "yellow";
  return "red";
}

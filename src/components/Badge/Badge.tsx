import { BadgeColor, BadgeStyle } from "../../types/type";
import "./Badge.css";

export default function Badge({
  text,
  style = "pill",
  color = "gray",
}: {
  text: string;
  style?: BadgeStyle;
  color?: BadgeColor;
}) {
  let badgeStyle = {};

  switch (color) {
    case "gray":
      badgeStyle = {
        ...badgeStyle,
        backgroundColor: "#F3F4F6",
        color: "#1F2937",
      };
      break;
    case "red":
      badgeStyle = {
        ...badgeStyle,
        backgroundColor: "#FEE2E2",
        color: "#991B1B",
      };
      break;
    case "yellow":
      badgeStyle = {
        ...badgeStyle,
        backgroundColor: "#FEF3C7",
        color: "#92400E",
      };
      break;
    case "green":
      badgeStyle = {
        ...badgeStyle,
        backgroundColor: "#D1FAE5",
        color: "#065F46",
      };
      break;
    case "blue":
      badgeStyle = {
        ...badgeStyle,
        backgroundColor: "#DBEAFE",
        color: "#1E40AF",
      };
      break;
    case "indigo":
      badgeStyle = {
        ...badgeStyle,
        backgroundColor: "#E0E7FF",
        color: "#3730A3",
      };
      break;
    case "purple":
      badgeStyle = {
        ...badgeStyle,
        backgroundColor: "#EDE9FE",
        color: "#5B21B6",
      };
      break;
    case "pink":
      badgeStyle = {
        ...badgeStyle,
        backgroundColor: "#FCE7F3",
        color: "#9D174D",
      };
      break;
  }

  switch (style) {
    case "pill":
      badgeStyle = {
        ...badgeStyle,
        borderRadius: "1rem",
      };
      break;
    case "square":
      badgeStyle = {
        ...badgeStyle,
        borderRadius: "4px",
      };
      break;
  }

  return (
    <div className="badge" style={badgeStyle}>
      {text}
    </div>
  );
}

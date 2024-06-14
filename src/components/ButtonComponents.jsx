import React from "react";

export default function ButtonComponent({
  name,
  onClickHandler,
  style,
  type,
  colorType,
}) {
  const colorCode = (() => {
    switch (colorType) {
      case "blue":
        return {
          backgroundColor: "blue",
          color: "white",
        };
      case "black":
        return {
          backgroundColor: "#2C3335",
          color: "white",
        };
      case "red":
        return {
          backgroundColor: "red",
          color: "white",
        };
      case "yellow":
        return {
          backgroundColor: "black",
          color: "white",
        };
        case "green":
        return {
          backgroundColor: "green",
          color: "white",
        };
      default:
        return {
          backgroundColor: "#2C3335",
          color: "white",
        };
    }
  })();

  return (
    <button
      className="btn"
      type={type || "button"}
      onClick={() => typeof onClickHandler == "function" && onClickHandler()}
      style={{
        backgroundColor: colorCode?.backgroundColor,
        color: colorCode?.color,
        ...style,
      }}
    >
      {name}
    </button>
  );
}

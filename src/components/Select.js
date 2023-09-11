import React from "react";
import ColorPic from "./ColorPic";

export default function Select({
  onClick,
  bg,
  colors,
  setColors,
  initialColors,
}) {
  const handleChange = (e) => {
    console.log(initialColors);
    if (e.target.value === "") {
      setColors(initialColors);
    } else {
      setColors(colors.filter((color) => color.name.includes(e.target.value)));
    }
  };
  return (
    <div
      style={{
        background: "white",
        display: "flex",
        width: "80%",
        alignItems: "center",
        gap: "0.5rem",
        padding: "1rem",
      }}
      onClick={onClick}
    >
      <ColorPic bg={bg} />

      <input
        placeholder={bg ? bg.name : "Select"}
        style={{ width: "inherit", border: "none" }}
        name="filter"
        type="text"
        onChange={handleChange}
      />
    </div>
  );
}

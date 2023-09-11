import React, { useState, useRef } from "react";
import Select from "./Select";
import Dropdown from "./Dropdown";

export default function Box({ initialState }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [bg, setBg] = useState(false);
  const [colors, setColors] = useState(initialState);
  const inputRef = useRef(null);
  console.log(colors);
  function setColor(str) {
    setBg(str);
    setShowDropdown((prev) => !prev);
  }
  function setColorsHandler(newColorArray) {
    setShowDropdown(true);
    console.log(newColorArray);

    setColors(newColorArray);
  }
  return (
    <div
      style={{
        background: bg.value,
        width: "20rem",

        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "1rem",
      }}
    >
      <Select
        colors={colors}
        setColors={setColorsHandler}
        initialColors={initialState}
        bg={bg}
        onClick={() => setShowDropdown((prev) => !prev)}
      />
      {showDropdown && (
        <Dropdown ref={inputRef} setBg={setColor} colors={colors} />
      )}
    </div>
  );
}

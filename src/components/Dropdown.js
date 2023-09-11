import React, { useEffect, useState } from "react";
import ColorPic from "./ColorPic";

export default function Dropdown({ setBg, colors }) {
  return (
    <div
      style={{
        background: "white",
        width: "80%",
        height: "60%",
        marginTop: "1rem",
        padding: "1rem",
        zIndex: "10",
      }}
    >
      <ul>
        {colors.map((color) => (
          <li
            style={{ display: "flex", gap: "5px", alignItems: "center" }}
            key={color.value}
            onClick={() => setBg(color)}
          >
            <div>
              <ColorPic bg={color} />
            </div>
            {color.name}
          </li>
        ))}
      </ul>
    </div>
  );
  return <div>empty</div>;
}

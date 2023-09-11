import React from "react";

export default function ColorPic({ bg }) {
  return (
    <div
      style={{
        height: "1rem",
        width: "1rem",
        background: bg.value,
      }}
    >
      {" "}
    </div>
  );
}

import React, { useState } from "react";

export default function SnakLedder() {
  const [box, setbox] = useState([]);
  return (
    <div>
      <img
        src={require("../../Assets/snakLadder.jpg")}
        height={500}
        width={500}
      />
      <div>{}</div>
    </div>
  );
}

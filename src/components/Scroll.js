import React from "react";

function Scroll(prop) {
  return (
    <div
      style={{ overflowY: "scroll", border: "3px solid black", height: "500px" }}
    >
      {prop.children}
    </div>
  );
}

export default Scroll;

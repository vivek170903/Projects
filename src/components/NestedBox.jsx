import { useState } from "react";

export default function NestedBox({ level, parentColor }) {
  const [color, setColor] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setColor(inputValue);
      // setInputValue("");
    }
  };

  const backgroundColor = color || parentColor || "white";
  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        padding: "20px",
        margin: "10px",
        border: "2px solid black",
      }}
    >
      <input
        type="text"
        placeholder="Enter color"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        style={{ marginBottom: "10px" }}
      />

      {level > 1 && <NestedBox level={level - 1} parentColor={backgroundColor} />}
    </div>
  );
}

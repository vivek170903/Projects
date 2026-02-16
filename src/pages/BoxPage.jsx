import { useParams } from "react-router-dom";
import NestedBox from '../components/NestedBox.jsx';
import { useState } from "react";
export default function BoxPage() {
  const { number } = useParams();
  const depth = parseInt(number, 10);

const [color,setColor] = useState(
  Array(depth).fill("white")
) 
  if (isNaN(depth) || depth <= 0) {
    return <h2>Enter a valid number in URL.</h2>;
  }

  return (
    <div style={{ padding: "40px" }}>
      <NestedBox level={depth} />
    </div>
  );
}

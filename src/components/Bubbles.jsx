import "./bubbles.css";

function Bubbles() {
  const bubbles = Array.from({ length: 50 });

  return (
    <div className="bubbles">
      {bubbles.map((_, i) => (
        <span key={i} className="bubble"></span>
      ))}
    </div>
  );
}

export default Bubbles;
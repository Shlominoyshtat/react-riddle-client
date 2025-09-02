import Navbar from "../components/Navbar";
import { useRef } from "react";

export default function Play() {
  const inputRef = useRef<HTMLInputElement>(null);
  const riddle = "I’m tall when I’m young, and I’m short when I’m old. What am I?";

  const handleSubmit = () => {
    const answer = inputRef.current?.value;
    alert(`You answered: ${answer}`);
  };

  return (
    <div>
      <Navbar />
      <h1>Welcome to play</h1>

      <h2>Riddle:</h2>
      <p>{riddle}</p>

      <input type="text" placeholder="Your answer..." ref={inputRef} />

      <button onClick={handleSubmit}>Submit Answer</button>
    </div>
  );
}

import Navbar from "../components/Navbar";

export default function Menu() {
  return (
    <div>
      <Navbar />
      <h1>Welcome to menu game!</h1>
      <label htmlFor="input">select a number</label>
      <input type="number" id="input"/>
      <pre
        style={{ background: "#f5f5f5", padding: "10px", borderRadius: "8px" }}
      >
        {` 1. Start game
 2. Create a new riddle
 3. Read all riddles
 4. Update a riddle
 5. Delete a riddle
 6. View leaderboard`}
      </pre>
    </div>
  );
}

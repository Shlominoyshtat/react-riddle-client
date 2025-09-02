import Navbar from "../components/Navbar";

export default function LiverBord() {
  return (
    <div>
      <Navbar />
      <h1>Welcome to leaderboard</h1>

      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>Player</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Game Time (minutes)</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }}>Alex</td>
            <td style={{ border: "1px solid black", padding: "8px" }}>1.42</td>
            <td style={{ border: "1px solid black", padding: "8px", color: "green" }}>✔️ Yes</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }}>Brian</td>
            <td style={{ border: "1px solid black", padding: "8px" }}>2.15</td>
            <td style={{ border: "1px solid black", padding: "8px", color: "green" }}>✔️ Yes</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }}>Chris</td>
            <td style={{ border: "1px solid black", padding: "8px" }}>3.68</td>
            <td style={{ border: "1px solid black", padding: "8px", color: "red" }}>❌ No</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }}>David</td>
            <td style={{ border: "1px solid black", padding: "8px" }}>5.27</td>
            <td style={{ border: "1px solid black", padding: "8px", color: "green" }}>✔️ Yes</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }}>Edward</td>
            <td style={{ border: "1px solid black", padding: "8px" }}>6.91</td>
            <td style={{ border: "1px solid black", padding: "8px", color: "red" }}>❌ No</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }}>Frank</td>
            <td style={{ border: "1px solid black", padding: "8px" }}>8.34</td>
            <td style={{ border: "1px solid black", padding: "8px", color: "green" }}>✔️ Yes</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }}>George</td>
            <td style={{ border: "1px solid black", padding: "8px" }}>9.76</td>
            <td style={{ border: "1px solid black", padding: "8px", color: "red" }}>❌ No</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

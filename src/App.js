import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import TikTok from "./Games/TikTio/TikTok";
import SnakLedder from "./Games/SnakLadder/SnakLedder";

function App() {
  return (
    <div className="App">
      <h2>Games</h2>
      <Link to="Tiktok" className="pages-link">
        TikTok
      </Link>
      <Link to="Snak-Ladder" className="pages-link">
        Skan & Ladder
      </Link>

      <Routes>
        <Route path="/Tiktok" element={<TikTok />} />
        <Route path="/Snak-Ladder" element={<SnakLedder />} />
      </Routes>
    </div>
  );
}

export default App;

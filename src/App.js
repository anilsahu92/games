import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import TikTok from "./Games/TikTio/TikTok";
import SnakLedder from "./Games/SnakLadder/SnakLedder";

function App() {
  return (
    <div className="App">
      <h2 className=" text-2xl text-amber-800 font-semibold">Games</h2>
      <Link to="Tiktok" className="pages-link  underline">
        TikTok
      </Link>
      <Link to="Snak-Ladder" className="pages-link underline">
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

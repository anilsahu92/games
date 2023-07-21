import Box from "./Box";
import "./App.css";
import { useEffect, useState } from "react";

const dataSet = [
  { id: 1, user: null },
  { id: 2, user: null },
  { id: 3, user: null },
  { id: 4, user: null },
  { id: 5, user: null },
  { id: 6, user: null },
  { id: 7, user: null },
  { id: 8, user: null },
  { id: 9, user: null },
];

function App() {
  const [data, setData] = useState(dataSet);

  const [activeUser, setActiveUser] = useState(2);
  const [win, setWin] = useState(null);
  const [gameOver, setGameOver] = useState(null);

  const winSet = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  function result() {
    winSet.forEach((item) => {
      const first = data[item[0] - 1];
      const check = item.every((it) => data[it - 1].user === first.user);
      if (first.user && check) {
        //console.log("Win", first.user);
        setWin(first.user);
      }
    });
    const updatedData = data.filter((item) => item.user);
    if (updatedData.length === 9 && win === null) {
      setGameOver(true);
    }
  }

  useEffect(() => {
    setActiveUser(activeUser === 2 ? 1 : 2);
    result();
  }, [data]);

  //console.log("activeUser", activeUser);
  function resetGame() {
    setData(dataSet);
    setWin(null);
    setGameOver(null);
    setActiveUser(2);
  }

  return (
    <div className="App">
      <h2>TikTok Game</h2>
      {(win || gameOver) && (
        <div className="userWinInfo">
          <div className="win-details">
            {win && "User " + win + " Win the game."}
            {gameOver && "Game is over."}
          </div>
          <button className="resetBtn" onClick={() => resetGame()}>
            Restart
          </button>
        </div>
      )}

      <div className="game-box">
        <div className="box-wrapper">
          {data.map((item) => (
            <Box
              key={item.id}
              item={item}
              data={data}
              setData={setData}
              activeUser={activeUser}
              win={win}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

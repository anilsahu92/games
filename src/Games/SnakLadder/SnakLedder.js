import React, { useState } from "react";
import User from "./User";
import Dise from "./Dise";

export default function SnakLedder() {
  //const [box, setbox] = useState([]);
  const [input, setInput] = useState(null);
  const [users, setUsers] = useState([]);
  const [paly, setPlay] = useState(null);

  function AddUser(users) {
    if (parseInt(input) <= 5) {
      setPlay(true);
      let user = [];
      for (let i = 1; i <= input; i++) {
        // setbox((item) => [...item, { id: i }]);
        user.push({ id: i, point: null });
      }
      setUsers(user);
    }
  }
  console.log("users", users);

  return (
    <div className="snak-ladder-game">
      {paly ? (
        <div>
          <div className="box-area">
            <div style={{ width: 500, height: 500, position: "relative" }}>
              <img
                alt="snak-ladder-img"
                src={require("../../Assets/snakLadder.jpg")}
                height={500}
                width={500}
                className="mx-auto mt-4"
              />
              <div>
                <span className=" flex">
                  {users.map((item) => (
                    <User data={item} />
                  ))}
                </span>
              </div>
            </div>
          </div>
          <div className="diseArea">
            <Dise users={users} setUsers={setUsers} />
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="flex  w-60">
            <input
              type="number"
              placeholder="Max 5 Users"
              className=" p-2 border-2 text-black min-w-full"
              max="5"
              min="1"
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              onClick={() => AddUser()}
              className=" bottom-auto p-2 px-6  bg-blue-700 text-white"
            >
              Add
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

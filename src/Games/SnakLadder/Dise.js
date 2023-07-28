import React, { useEffect, useState } from "react";

export default function Dise({ users, setUsers, setPlay }) {
  //console.log("seUsers", users.length);
  const [state, setState] = useState({
    loading: false,
    gameOver: false,
  });
  const [chal, setChal] = useState(false);
  const [activeUser, setActiveUser] = useState(0);
  const [last, setLast] = useState([]);

  const updown = {
    4: 25,
    13: 46,
    27: 5,
    33: 49,
    40: 3,
    42: 63,
    43: 18,
    50: 69,
    54: 31,
    62: 81,
    66: 45,
    74: 92,
    76: 58,
    89: 53,
    99: 41,
  };

  function disePay() {
    setState({
      loading: true,
      gameOver: false,
    });
    const newDise = Math.floor(Math.random() * 6 + 1);
    setTimeout(() => {
      setState({
        loading: false,
        gameOver: false,
      });
      setLast((item) => [...item, { [activeUser]: newDise }]);
      setChal(newDise);

      const update = users.map((item) => {
        if (item.id === activeUser + 1) {
          if (item.point + newDise > 100) {
            return { ...item };
          }
          if (item.point + newDise === 100) {
            setState({ loading: false, gameOver: true });
          }
          if (updown[item.point + newDise])
            return { ...item, point: updown[item.point + newDise] };
          return { ...item, point: item.point + newDise };
        } else {
          return { ...item };
        }
      });
      //console.log("update", update);
      setUsers(update);
      if (newDise !== 6 && state.gameOver !== true) {
        setActiveUser((item) => (item + 1 + users.length) % users.length);
      }
    }, 2000);
  }

  function SwtBg(item) {
    switch (item) {
      case 1:
        return " bg-red-600";
      case 2:
        return " bg-blue-600";
      case 3:
        return " bg-green-600";
      case 4:
        return " bg-orange-600";
      default:
        return " bg-pink-600";
    }
  }
  function restGame() {
    setPlay(false);
    setActiveUser(null);
    setLast([]);
    setChal(false);
  }

  console.log(last);

  return (
    <div>
      {state.gameOver === true ? (
        <>
          <h1 className=" text-2xl font-bold">
            Game Over: User {activeUser} Win{" "}
          </h1>
          <button
            className={`bg-green-600 rounded-e-full mt-6 rounded-t-full rounded-b-full  text-2xl  text-white w-48 h-20`}
            onClick={() => restGame()}
          >
            Reset Game
          </button>
        </>
      ) : (
        <>
          <div className=" text-xl">
            {`Click Play User  ${activeUser !== null ? activeUser + 1 : "1"} `}
          </div>
          <button
            disabled={state.loading}
            className={`bg-blue-600 rounded-e-full mt-6 rounded-t-full rounded-b-full   text-2xl text-white w-36 h-20`}
            onClick={() => disePay()}
          >
            Play
          </button>
          {/* <h1 className=" text-2xl">Last point : {chal}</h1> */}
          {<img alt="dise spinner" src={require("../../Assets/dise.gif")} />}
          {chal && state.loading === false && (
            <div className="dishWrapperBox ">
              <div className={`DiseOn dis-${chal}`} />
            </div>
          )}
        </>
      )}

      <div className="flex flex-wrap">
        {last.slice(-6).map((item, index) => (
          <span className="userPointItem " key={index}>
            {Object.keys(item).map((it) => (
              <>
                <div className="pnt">{users[it].point}</div>
                <div className={`w-7 h-7 ${SwtBg(it)}`}>
                  {" "}
                  {parseInt(it) + 1}{" "}
                </div>
                <div className="pnt">{item[it]}</div>
              </>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}

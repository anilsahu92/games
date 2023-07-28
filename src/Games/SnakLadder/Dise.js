import React, { useEffect, useState } from "react";

export default function Dise({ users, setUsers }) {
  //console.log("seUsers", users.length);
  const [state, setState] = useState({
    loading: false,
  });
  const [chal, setChal] = useState(false);
  const [activeUser, setActiveUser] = useState(0);
  const [last, setLast] = useState([]);

  function disePay() {
    const newDise = Math.floor(Math.random() * 6 + 1);
    setLast((item) => [...item, { [activeUser]: newDise }]);
    setChal(newDise);

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

    const update = users.map((item) => {
      //const pp = item.point + newDise;
      if (item.id === activeUser + 1) {
        if (item.point + newDise > 100) return { ...item };
        if (updown[item.point + newDise])
          return { ...item, point: updown[item.point + newDise] };
        return { ...item, point: item.point + newDise };
      } else {
        return { ...item };
      }
    });
    //console.log("update", update);
    setUsers(update);
    if (newDise !== 6) {
      setActiveUser((item) => (item + 1 + users.length) % users.length);
    }
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

  console.log(last);

  return (
    <div>
      <div className=" text-xl">
        {`Next Click Play, User  ${
          activeUser !== null ? activeUser + 1 : "1"
        } `}
      </div>
      <button
        className={`bg-blue-600 text-2xl text-white w-36 h-20`}
        onClick={() => disePay()}
      >
        Play
      </button>

      <h1 className=" text-2xl">Last point : {chal}</h1>
      <img alt="dise spinner" src={require("../../Assets/dise.gif")} />
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

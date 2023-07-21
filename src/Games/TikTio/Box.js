import React from "react";

export default function Box({ item, data, setData, activeUser, win }) {
  function handleClick(id) {
    console.log(id);
    let set = data.map((item) =>
      item.id === id ? { ...item, user: activeUser } : item
    );
    if (!win) setData(set);
  }

  return (
    <div
      className={`box-item item-${item.id} user-${item.user}`}
      onClick={() => handleClick(item.id)}
    >
      Box {item.id}
    </div>
  );
}

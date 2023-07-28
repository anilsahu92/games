import React from "react";

export default function User({ data }) {
  const { id, point } = data;

  const setPosition = () => {
    let cc = [];
    if (point === null) {
      cc = [null, null];
    } else if (point === 100) {
      cc = ["ts-10", "ls-10"];
    } else {
      const cl =
        point <= 9 ? point.toString().padStart(2, "0") : point.toString();

      cc.push("ts-" + cl[0]);
      if ((parseInt(cl[0]) + 2) % 2 === 0) {
        if (cl[1] == "0") {
          cc.pop();
          cc.push("ts-" + (parseInt(cl[0]) - 1));
          cc.push("ls-" + (parseInt(cl[1]) + 1));
        } else {
          cc.push("ls-" + cl[1]);
        }

        //cc.push("ls-" + cl[1]);
      } else {
        if (cl[1] == "0") {
          cc.pop();
          cc.push("ts-" + (parseInt(cl[0]) - 1));
          cc.push("rs-" + (parseInt(cl[1]) + 1));
        } else {
          cc.push("rs-" + cl[1]);
        }
      }
    }
    console.log("set", cc);
    return cc;
  };

  console.log("return", setPosition()[0]);

  function SwtBg() {
    switch (id) {
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
  return (
    <div
      className={`User ${SwtBg()} text-white  w-7 h-7 ${setPosition()[0]} ${
        setPosition()[1]
      } pt-${point}`}
    >
      {id}
    </div>
  );
}

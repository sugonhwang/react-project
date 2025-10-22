import React from "react";

const Box = (props) => {
  let result;

  if (props.title === "Computer" && props.result !== "tie" && props.result !== "") {
    result = props.result === "win" ? "lose" : "win";
  } else {
    result = props.result;
  }
  return (
    <div className={`box ${result}`}>
      <p>{props.title}</p>
      <div className="item-img">{typeof props.item.img === "string" ? <img src={props.item.img} alt="" /> : props.item.img}</div>
      <p>{result}</p>
    </div>
  );
};

export default Box;

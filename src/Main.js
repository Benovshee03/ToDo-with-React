import React from "react";

export default function Main(props) {
  return (
    <div className="main">
      {props.data && props.data.map((e, i) => {
          return (
            <div className="box" key={i}>
              <input type="checkbox" className="check__box"></input>
              <div className="text__box">{e}</div>
              <i className="fa-solid fa-xmark" onClick={e=>props.del(i,e)}></i>
            </div>

          );
        })}
    </div>
  );
}
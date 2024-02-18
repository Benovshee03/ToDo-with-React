import React from "react";



export default function Top({funcAdd}) {

    const [value,setValue] = React.useState("")



    function sendData(){
        funcAdd(value)
        setValue("")
    }
  return (
    <div className="top">
      <div className="to__do__app">To Do App</div>
      <div className="input__part">
        <input type='text' className="text" value={value} onChange={(e)=>setValue(e.target.value)}></input>
        <button className="add" onClick={sendData}>Add</button>
      </div>
      <div className="line"></div>
    </div>
  );
}

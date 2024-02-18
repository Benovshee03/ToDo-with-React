import logo from "./logo.svg";
import "./App.css";
import Main from "./Main";
import Top from "./Top";
import React from "react";

function App() {
  const [data, setdata] = React.useState("");

  function addnewitem(newText) {
    const newdata = [...data,newText];
    setdata(newdata);

  }
  const deleteItem = (index, e)=>{
    setdata(data.filter((data , i) => i !==index))
  }
  return (
    <div className="cont">
      <div className="container">
        <Top funcAdd={addnewitem} />
        <Main data={data} del={deleteItem}/>
      </div>
    </div>
  );
}


export default App;


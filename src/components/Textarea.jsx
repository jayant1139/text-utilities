import React from "react";
import { useState } from "react";

export default function Textarea(props) {
  const upperCase = () => {
    console.log("Uppercase Button Clicked");
    let upcase = text.toUpperCase();
    setText(upcase);
  };
  const lowerCase = () => {
    console.log("Lowercase Button Clicked");
    let lowcase = text.toLowerCase();
    setText(lowcase);
  };
  const count=()=>{
let word=text.split(" ").length;
 let character=text.length;
 setText(word+" words and "+character+" characters!")
  }
  const textchange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
<>
<div>
      <h1 className="text-center">{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={textchange}
          id="myBox"
          rows="8"
        ></textarea>
    </div>
        <button className="btn btn-primary my-2 mx-2" onClick={upperCase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={lowerCase}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={count}>
          Get Count
        </button>
      </div>
      {/* <div className="container my-3">
        <h3>Words & Characters Count :</h3>
        
      </div> */}

</>    
  );
}

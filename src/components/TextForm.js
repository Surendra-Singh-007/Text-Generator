import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted To UpperCase!', 'success');
  };

  const handleLoClick = () => {
    let lowerText = text.toLowerCase();
    setText(lowerText);
    props.showAlert('Converted To LowerCase!', 'success')
  };

  const handleOnChange = (event) => {
    console.log("Handle On Change");
    setText(event.target.value);
  };

  const handleClear = () => {
    let clearText = " ";
    setText(clearText);
    props.showAlert('Text Cleared!', 'success');
  };

  const [text, setText] = useState("Enter Some Text...");
  return (
    <div>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea style={{background: props.mode==='dark'?'grey':'white'}}
            className="form-control"
            onChange={handleOnChange}
            value={text}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary" onClick={handleLoClick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>
          Clear Text
        </button>
      </div>

      <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter Something in the textbox above to preview it here'}</p>
      </div>
    </div>
  );
}

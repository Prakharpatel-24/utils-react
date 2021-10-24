import React, {useState} from "react";

export default function Textform(props) {
    const handleUpClick = ()=>{
        // console.log('Uppercase was clicked');
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = ()=>{
        // console.log('Uppercase was clicked');
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = ()=>{
        // console.log('Uppercase was clicked');
        let newText = '';
        setText(newText)
    }
    const handleOnChange = (event)=>{
        // console.log('on change ');
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.heading}</h1>
      <div className="mb-3">
        
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Upper case</button>
      <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lower case</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>
            your text summary
        </h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}

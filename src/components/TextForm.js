import React, {useState} from 'react';

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    };
    const handleUpOnChange = (event)=>{
        setText(event.target.value);
    };
    const handleClear = ()=>{
        let newText = "";
        setText(newText)
    };
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    };
    const [text, setText] = useState("");
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>    
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleUpOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-2 my-2' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleLoClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleClear}>Clear Text</button>
        </div>
        <div className="container my-3">
            <h2>Yout text summary</h2>
            <p>{(text.split(" ").length) - 1} words and {text.length} characters</p>
            <p>{(text.split(" ").length - 1)*0.008}  minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>

        </div>
        </>
    );
}

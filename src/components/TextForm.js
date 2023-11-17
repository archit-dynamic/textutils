import React, {useState} from 'react';

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","success");
    };
    const handleUpOnChange = (event)=>{
        setText(event.target.value);
    };
    const handleClear = ()=>{
        let newText = "";
        setText(newText)
        props.showAlert("Text cleared","success");
    };
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase","success");
    };
    const [text, setText] = useState("");
    return (
        <>
        <div className='container' style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
            <h1 className='my-3'>{props.heading}</h1>    
            <div className="mb-3">
                <textarea className="form-control"
                 style={{backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',color: props.mode === 'dark' ? 'white' : '#042743'}} 
                 value={text} onChange={handleUpOnChange}
                  id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button disabled={text.length === 0} className='btn btn-primary mx-2 my-2' onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length === 0} className='btn btn-primary mx-2 my-2' onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length === 0} className='btn btn-primary mx-2 my-2' onClick={handleClear}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
            <h2>Yout text summary</h2>
            <p>{(text.split(" ").filter((element)=>{return element.length!==0;}).length)} words and {text.length} characters</p>
            <p>{(text.split(" ").filter((element)=>{return element.length!==0;}).length)*0.008}  minutes read</p>
            <h2>Preview</h2>
            <p>{text.length === 0 ? "Nothing to preview!" : text}</p>

        </div>
        </>
    );
}

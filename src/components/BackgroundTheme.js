import React, { useEffect } from 'react';

export default function BackgroundTheme(props) {
  return (
    <div className="container">
        <button type="submit" onClick={()=>{props.setBackgroundColor('green')}}><h5 style={{color:'green'}}>Green</h5></button>
        <button type="submit" onClick={()=>{props.setBackgroundColor('purple')}}><h5 style={{color:'purple'}}>Purple</h5></button>
        <button type="submit" onClick={()=>{props.setBackgroundColor('red')}}><h5 style={{color:'red'}}>Red</h5></button>
    </div>
  );
}

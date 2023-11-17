import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import BackgroundTheme from './components/BackgroundTheme';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      message: message,
      type: type
    });
    setTimeout(
      ()=>{
        setAlert(null);
      },1500
    );
  };

  const toggleMode = ()=>{
    if(mode === 'dark'){
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled","success");
      // document.title = "TextUtils-Light Mode";
      // setInterval(()=>{
      //   document.title = "Install TextUtils Now!";
      // },1000);
    }else{
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled","success");
      // document.title = "TextUtils-Dark Mode";
      // setInterval(()=>{
      //   document.title = "TextUtils is Amazing Mode";
      // },1000);
    }
  };

  const setBackgroundColor = (color) => {
    document.body.style.backgroundColor = color;
    showAlert(`Background set to ${color}`,"success");
    console.log(`setBackgroundColor ${color}`);
  };

  return (
    <>
    
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <strong><Alert alert={alert} /></strong>
      {/* <BackgroundTheme setBackgroundColor={setBackgroundColor}/> */}
      <div className="container">
      <Routes>
        <Route exact path="/" element={<TextForm  heading="Enter the text to analyze below" showAlert={showAlert} mode={mode}/>}/>
        <Route exact path="/about" element={<About/>}/>
      </Routes>
      </div>
    
      
    </>
  );
}

export default App;


import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');

  const [text, setText] = useState('dark');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000)
  }

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      setText('light');
      document.body.style.background = '#042743';
      showAlert('Dark mode has been enabled', 'success');
      // document.title = 'TextUtils - DarkMode';
      // setInterval(()=>{
      //   document.title = "Reddit is Amazing!"
      // }, 2000)
      // setInterval(()=>{
      //   document.title = 'Install Reddit Now..'
      // }, 1500)
    }

    else {
      setMode('light');
      setText('dark');
      document.body.style.background = 'white';
      showAlert('Light mode has been enabled', 'success');
      // document.title = 'TextUtils - LightMode';
    }
  }
  return (
   <div>
   <Router>
   <Navbar title="TextUtils" aboutText="About" placeHolder="Search Here" mode={mode} toggleMode={toggleMode} text={text}/>
   <Alert alert={alert}/>
 <div className="container my-4">

  <Switch>
   <Route exact path="/about">
    <About />
   </Route>
   <Route exact path="/">
   <TextForm showAlert={showAlert} heading="Please Give Your Feedback" mode={mode} text={text}/>
   </Route>
  </Switch>
 
 </div>
 </Router>
   </div>
  );
}

export default App;

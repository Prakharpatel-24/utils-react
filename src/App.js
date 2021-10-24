import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react';
// import About from './components/About';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null)

  const showalert = (message, type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setalert(null);
    },1500)
  }
  const togglemode = ()=>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor='#042743'
      showalert("Dark mode has been enabled!","success")
    }else{
      setmode('light')
      document.body.style.backgroundColor='white'
      showalert("Light mode has been enabled!","success")

    }
  }

  

  return (
    <>
    {/* <Router> */}
   <Navbar title="hello" mode={mode } togglemode={togglemode}/>
   <Alert alert= {alert}/>
   {/* yaha pr {alert} use satae wala variable h */}
   <div className="container my-3">
   {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>*/}
          {/* <Route exact path="/"> */}
          <Textform heading="Enter text to analyze below" mode={mode }/>
          {/* </Route> */}
        {/* </Switch>  */}
      {/* <About/> */}
   </div>
   {/* </Router> */}
</>
  );
}

export default App;

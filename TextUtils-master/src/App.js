import './App.css';
import About from './components/About';
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"
import React, {useState} from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode =()=>{
    if(mode === 'light'){
      setmode ('dark');
      document.body.style.backgroundColor = "#042743";
       showAlert("Dark mode has been enabled", "success");
    }
    else{
      setmode ('light');
      document.body.style.backgroundColor = "white";
       showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
   
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container">
{/* <Routes>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <TextForm showAlert={showAlert} heading = "Enter the text to analyze below" mode={mode}/>
          </Route>
        </Routes>
        </div>
        </Router> */}
       <TextForm showAlert={showAlert} heading = "Enter the text to analyze below" mode={mode}/>
        {/* <About/>  */}
     </div>  
    </>
  );
}

export default App;

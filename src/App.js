 // import logo from './logo.svg';
import './App.css';
import Alert from './conpoment/Alert';
import Card from './conpoment/Card';
import Navbar from './conpoment/Navbar';
import About from './conpoment/About';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('dark');
  const [alert, setalert] = useState(null)


  const showalert = (mes, type) => {
    setalert({
      mes: mes,
      type: type,
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }
  const removebg = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
  }

  const toggleMode = (cla) => {
    removebg();
    console.log(cla)
    document.body.classList.add('bg-' + cla)

    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'grey';
      document.body.style.color = 'white';
      showalert("dark mode can be enable", "success")
      document.title = 'textutils - dark mode'
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'grey';
      showalert("lighr mode can be enable", "success")
      document.title = 'textutils- light mode'
    }
  }

  return (
    <>
    <Router>
      <Navbar title=".com"
        link="home" mode={mode} toggleMode={toggleMode} text='enable dark mode' />
      <Alert alert={alert} />

      <Routes>
        <Route path="/" element={ <Card mode={mode} showalert={showalert} />}>

        </Route>
        <Route path="/about" element={<About />}>
        </Route>
      </Routes>

</Router>
   
    </>
  );
}

export default App;

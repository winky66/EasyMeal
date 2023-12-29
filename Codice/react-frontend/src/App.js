import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Prenotazione from './components/prenotazione';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState("")

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/prenotazione" element={<Prenotazione setEmail={setEmail} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


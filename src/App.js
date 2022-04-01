import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Routes, Route} from "react-router-dom";
import Home from './pages/home/Home';
import Login from './pages/login/login';


const App = () => {
  return (
    <Router>
      <div className='App'>

        <h1>Oi</h1>
        <Link to="/home">Home</Link>

        <Routes>
          <Route path="/" caseSensitive={false} element={<Login/>}/>
          <Route path="/home" caseSensitive={false} element={<Home/>}/>  
        </Routes> 

      </div>
    </Router>
  );
}

export default App;

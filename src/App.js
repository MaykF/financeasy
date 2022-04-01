import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/home/Home';
import Login from './pages/login/login';
import Cadastrar from './pages/cadastrar/Cadastrar'


const App = () => {
  return (
    <Router>
      <div className='App'>

        <Routes>
          <Route path="/" caseSensitive={false} element={<Login/>}/>
          <Route path="/login" caseSensitive={false} element={<Login/>}/>
          <Route path="/cadastrar" caseSensitive={false} element={<Cadastrar/>}/>
          <Route path="/home" caseSensitive={false} element={<Home/>}/>  
        </Routes> 

      </div>
    </Router>
  );
}

export default App;

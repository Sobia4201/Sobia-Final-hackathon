import React from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Project from './components/Project';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {  
  // Initialize user name state

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Signup  />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login  />} />
          <Route path='/home' element={<Home/>} />
          <Route path='/project' element={<Project/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
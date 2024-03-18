import React from 'react'
import { Login } from './Login'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Dashboard } from './Dashboard';
import { Home } from './Home';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path ="/dashboard" element={<Dashboard/>}/>
      <Route path="/" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Employee2 } from './Employee2';
import { Login } from './Login'
import { Search } from './Search';
import { Home } from './Home';
import './App.css'

const App = () => {
  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/search' element={<Search />} />
      <Route path='/idcard' element={<Employee2 />} />
    </Routes>


  )
}
export default App;

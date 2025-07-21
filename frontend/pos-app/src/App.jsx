import React from 'react'
import { Routes } from 'react-router'
import { Route } from 'react-router'
import Login from './pages/login'
import Home from './pages/home'

export default function App() {
  return (
    <Routes>
        <Route path='/login' element={<Login/>}/>
        
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<h1>products</h1>}/>
        <Route path='/sales' element={<h1>sales</h1>}/>
    </Routes>
  )
}

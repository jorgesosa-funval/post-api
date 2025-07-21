import React from 'react'
import { Routes } from 'react-router'
import { Route } from 'react-router'
import Login from './pages/login'

export default function App() {
  return (
    <Routes>
        <Route path='/' element={<h1>Home</h1>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/products' element={<h1>products</h1>}/>
        <Route path='/sales' element={<h1>sales</h1>}/>
    </Routes>
  )
}

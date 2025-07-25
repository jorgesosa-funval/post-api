import React from 'react'
import { Routes } from 'react-router'
import { Route } from 'react-router'
import Login from './pages/login'
import Home from './pages/home'
import Products from './pages/products' 
import AuthLayout from './layout/auth-layout'

export default function App() {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route element={<AuthLayout/>}>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Products />} /> 
            </Route>
        </Routes>
    )
}

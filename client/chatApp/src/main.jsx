import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import './index.css'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/about/About'
import Register from './components/register/Register'
import Login from './components/login/Login'
import Dashbboard from './components/dashboard/Dashbboard'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route path='Home' element={<Home/>}/>
    <Route path='About' element={<About/>}/>
    <Route path='register' element={<Register/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='dashboard' element={<Dashbboard/>}/>
  </Route>
))
  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

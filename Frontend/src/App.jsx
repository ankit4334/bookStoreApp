//short comman for rfce
import React from 'react'
import Home from './home/Home';
import {Navigate, Route,Routes} from "react-router-dom";
import Courses from './courses/Courses';
import Signup from './componect/Signup';
import  { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';
function App() {

  const [authUser,setAuthUser]=useAuth();
  console.log(authUser);

  return (
    <>
    
    {/* <Home/>
    <Course /> */}

    {/* 
    
    uper me ham siple call kiye but yeha 
    here rout bana ke kiye hai.

    */}

    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={authUser ? <Courses/> :<Navigate to="/signup"/>}/>
      <Route path="/singup" element={<Signup/>}/>

    </Routes>
    </div>
    <Toaster />
    </>
  )
}

export default App

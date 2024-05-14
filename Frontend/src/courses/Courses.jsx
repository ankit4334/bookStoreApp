import React from 'react'
import Navbar from '../componect/Navbar'
import Course from '../componect/Course'
import Footer from '../componect/Footer'

function Courses() {
  return (
    <>
      <Navbar/>
      <div className='min-h-screen'>
      <Course/>
      </div>
      <Footer/>
    </>
  )
}

export default Courses

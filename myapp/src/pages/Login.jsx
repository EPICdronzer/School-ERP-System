import React from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import AutoCarousel from '../components/AutoCarousel'
import LoginForm from '../components/LoginForm'
function Login() {
  return (
    <>
        
        <div className="flex gap-2 items-center bg-orange-300 p-10 !h-lvh">
            <div className="w-[60%]">
                <AutoCarousel />
            </div>
            <div className="">
                <LoginForm/>
            </div>
        </div>
    </>
  )
}

export default Login
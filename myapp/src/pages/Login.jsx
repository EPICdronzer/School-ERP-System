import React from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import AutoCarousel from '../components/AutoCarousel'
import LoginForm from '../components/LoginForm'
import "../App.css"
function Login() {
  return (
    <>
        
        <div className="login_comp">
            <div class="glass_card flex justify-center items-center">
                {/* <div className="w-[60%]">
                <AutoCarousel />
                </div> */}
                <div>
                    <LoginForm/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login
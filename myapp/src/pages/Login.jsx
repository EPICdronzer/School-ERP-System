import React, { useState } from 'react'
// import Header from "../components/Header"
// import Footer from "../components/Footer"
// import AutoCarousel from '../components/AutoCarousel'
// import LoginForm from '../components/CombineLayoutSignUp'
import "../App.css"
import CombineLayoutSignUp from '../components/CombineLayoutSignUp'
function Login() {
    const [state,signInState]=useState(1);
  return (
    <>
        
        <div className="login_comp">
            <div className="glass_card flex justify-center items-center">
                {/* <div className="w-[60%]">
                <AutoCarousel />
                </div> */}
                <div>
                    <CombineLayoutSignUp state={state} signInState={signInState} />
                </div>
            </div>
        </div>
    </>
  )
}

export default Login
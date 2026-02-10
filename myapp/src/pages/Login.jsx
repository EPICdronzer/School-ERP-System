import React, { useState } from 'react'
import "../App.css"
import CombineLayoutSignUp from '../components/CombineLayoutSignUp'
function Login() {
    const [state,signInState]=useState(1);
  return (
    <>
        
        <div className="login_comp">
            <div className="glass_card flex justify-center items-center">
                <div>
                    <CombineLayoutSignUp state={state} signInState={signInState} />
                </div>
            </div>
        </div>
    </>
  )
}

export default Login
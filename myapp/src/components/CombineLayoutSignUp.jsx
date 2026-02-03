import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignInForm from "../components/SignInForm";

function CombineLayoutSignUp({ state, signInState }) {
  const [animating, setAnimating] = useState(false);

  const handleSwitch = () => {
    setAnimating(true); 

    setTimeout(() => {
      signInState(state === 1 ? 2 : 1);
    }, 150);

    setTimeout(() => {
      setAnimating(false); 
    }, 350); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 font-poppins">
      <div
        className="w-[92%] max-w-md sm:max-w-lg md:max-w-xl
        backdrop-blur-lg bg-white/50 shadow-xl rounded-3xl
        flex flex-col p-6 sm:p-8 md:p-10 gap-4 sm:gap-5"
      >
        <div className="p-2 flex gap-2 justify-center items-center !text-3xl sm:text-3xl font-semibold tracking-wide text-gray-800">
          <span className="opacity-75">
            {state === 1 ? "Login" : "Sign In"}
          </span>

          <button
            onClick={handleSwitch}
            className="!text-sm opacity-50 hover:opacity-100 transition"
          >
            {state === 1 ? "/ Sign In" : "/ Login"}
          </button>
        </div>

        
        <div
          className={`transition-all duration-300 ease-in-out ${
            animating
              ? "blur-sm opacity-40 scale-[0.98]"
              : "blur-0 opacity-100 scale-100"
          }`}
        >
          {state === 1 ? <LoginForm /> : <SignInForm />}
        </div>
      </div>
    </div>
  );
}

export default CombineLayoutSignUp;

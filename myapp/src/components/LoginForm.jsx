function LoginForm() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      
      <div className="w-[92%] max-w-md sm:max-w-lg md:max-w-xl
                      backdrop-blur-lg bg-white/50 shadow-xl rounded-3xl
                      flex flex-col p-6 sm:p-8 md:p-10 gap-4 sm:gap-5">

        <div className="flex justify-center items-center text-2xl sm:text-3xl font-bold">
          Login
        </div>

        <form className="flex gap-3 flex-col">
          
          <div className="flex flex-col gap-3">
            <input
              placeholder="Username/Email"
              className="bg-white shadow-md rounded-full p-2 px-4 text-sm sm:text-base"
            />
            <input
              placeholder="Password"
              type="password"
              className="bg-white shadow-md rounded-full p-2 px-4 text-sm sm:text-base"
            />
          </div>

          <div className="flex gap-2 items-center">
            <input type="checkbox" />
            <div className="text-xs sm:text-sm opacity-75">Remember Me</div>
          </div>

          <div className="text-[10px] sm:text-xs opacity-75 text-center sm:text-left">
            By Logging in, you agree to MyClassboard's{" "}
            <a href="" className="underline">Conditions of Use</a> and{" "}
            <a href="" className="underline">Privacy Policy.</a>
          </div>

          <div className="flex justify-center items-center">
            <button className="bg-gradient-to-r from-orange-500 via-orange-400 to-indigo-900
                               py-2 sm:py-3 px-6 !rounded-4xl
                               w-42 font-bold text-white shadow-lg
                               text-sm sm:text-base">
              Login
            </button>
          </div>

          <div className="text-center opacity-75 text-sm">— or —</div>

          <div className="flex gap-4 justify-center items-center flex-wrap">
            <img src="https://scripts.myclassboard.in/cdndatastatic/MainLogin_Assets/img/google-icon-02.jpg"
                 className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
            <img src="https://scripts.myclassboard.in/cdndatastatic/MainLogin_Assets/img/apple-icon-02.jpg"
                 className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
            <img src="https://scripts.myclassboard.in/cdndatastatic/MainLogin_Assets/img/microsoft-icon-02.jpg"
                 className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
          </div>

        </form>
      </div>
    </div>
  )
}

export default LoginForm

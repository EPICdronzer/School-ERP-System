import LoginData from "../localStorage/LoginData";

function LoginForm(){
  const { formData, handleChange, handleLogin } = LoginData();
    return(
        <>
        <form onSubmit={handleLogin} className="flex gap-4 flex-col">
          <div className="flex flex-col gap-3">
            <input
              name="email"
              placeholder="Username/Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-white shadow-md rounded-full p-2 px-4 text-sm sm:text-base
              focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            />

            <input
              name="password"
              placeholder="Password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="bg-white shadow-md rounded-full p-2 px-4 text-sm sm:text-base
              focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            />

          </div>

          <div className="flex gap-2 items-center text-gray-700">
            <input type="checkbox" className="accent-orange-500" />
            <div className="text-xs  opacity-80">Remember Me</div>
          </div>

          <div className="text-[10px] sm:text-xs opacity-75 text-center sm:text-left text-gray-700 leading-relaxed">
            By Logging in, you agree to MyClassboard's{" "}
            <a href="#" className="underline hover:text-orange-600">
              Conditions of Use
            </a>{" "}
            and{" "}
            <a href="#" className="underline hover:text-orange-600">
              Privacy Policy.
            </a>
          </div>

          <div className="flex justify-center items-center">
            <button
              className="bg-gradient-to-r from-orange-500 via-orange-400 to-indigo-900
              py-2 sm:py-3 px-8 rounded-full w-44 font-semibold text-white shadow-lg
              text-sm sm:text-base hover:scale-105 transition !rounded-4xl"
            >
              Login
            </button>
          </div>

          <div className="text-center opacity-75 text-sm">— or —</div>

          <div className="flex gap-4 justify-center items-center flex-wrap">
            <img
              src="https://scripts.myclassboard.in/cdndatastatic/MainLogin_Assets/img/google-icon-02.jpg"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain shadow-xl hover:scale-110 transition"
              alt="Google login"
            />
            <img
              src="https://scripts.myclassboard.in/cdndatastatic/MainLogin_Assets/img/apple-icon-02.jpg"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain hover:scale-110 transition"
              alt="Apple login"
            />
            <img
              src="https://scripts.myclassboard.in/cdndatastatic/MainLogin_Assets/img/microsoft-icon-02.jpg"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain hover:scale-110 transition"
              alt="Microsoft login"
            />
          </div>
        </form>
        </>
    )
}
export default LoginForm;
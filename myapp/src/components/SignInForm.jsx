function SignInForm(){
    return(
        <>
        <form className="flex gap-4 flex-col">
        <div className="flex flex-col gap-3">
            <input
            placeholder="Full Name"
            className="bg-white shadow-md rounded-full p-2 px-4 text-sm sm:text-base
            focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            />

            <input
            placeholder="Email Address"
            type="email"
            className="bg-white shadow-md rounded-full p-2 px-4 text-sm sm:text-base
            focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            />

            <input
              placeholder="Password"
              type="password"
              className="bg-white shadow-md rounded-full p-2 px-4 text-sm sm:text-base
              focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            />

            <input
            placeholder="Confirm Password"
            type="password"
            className="bg-white shadow-md rounded-full p-2 px-4 text-sm sm:text-base
            focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            />
        </div>

        <div className="flex gap-2 items-center text-gray-700">
            <input type="checkbox" className="accent-orange-500" />
            <div className="text-xs opacity-80">
            I agree to the{" "}
            <a href="#" className="underline hover:text-orange-600">Terms</a> and{" "}
            <a href="#" className="underline hover:text-orange-600">Privacy Policy</a>
            </div>
        </div>

        <div className="flex justify-center items-center">
            <button
            className="bg-gradient-to-r from-indigo-900 via-orange-400 to-orange-500
            py-2 sm:py-3 px-8 !rounded-full w-44 font-semibold text-white shadow-lg
            text-sm sm:text-base hover:scale-105 transition"
            >
            Create Account
            </button>
        </div>

        <div className="text-center opacity-75 text-sm">— or sign up with —</div>

        <div className="flex gap-4 justify-center items-center flex-wrap">
            <img
            src="https://scripts.myclassboard.in/cdndatastatic/MainLogin_Assets/img/google-icon-02.jpg"
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain shadow-xl hover:scale-110 transition"
            alt="Google signup"
            />
            <img
            src="https://scripts.myclassboard.in/cdndatastatic/MainLogin_Assets/img/apple-icon-02.jpg"
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain hover:scale-110 transition"
            alt="Apple signup"
            />
            <img
            src="https://scripts.myclassboard.in/cdndatastatic/MainLogin_Assets/img/microsoft-icon-02.jpg"
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain hover:scale-110 transition"
            alt="Microsoft signup"
            />
        </div>
        </form>

        </>
    )
}
export default SignInForm;
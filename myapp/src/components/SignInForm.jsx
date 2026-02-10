import SignInData from "../localStorage/SignInData";

function SignInForm() {
  const { formData, handleChange, handleSubmit } = SignInData();

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 flex-col">
      <div className="flex flex-col gap-3">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="bg-white shadow-md rounded-full p-2 px-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
        />

        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="bg-white shadow-md rounded-full p-2 px-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
        />

        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="bg-white shadow-md rounded-full p-2 px-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
        />

        <input
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          className="bg-white shadow-md rounded-full p-2 px-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
        />

        {/* Role Select */}
        <div className="relative w-full max-w-xs">
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className={`appearance-none w-full bg-white shadow-md rounded-full py-2 pl-6 pr-10 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-400 hover:shadow-lg transition duration-200 cursor-pointer ${
              formData.role === "" ? "text-gray-400" : "text-gray-700"
            }`}
          >
            <option value="" disabled>Select Role</option>
            <option value="admin">Admin</option>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
          </select>

          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Terms */}
      <div className="flex gap-2 items-center text-gray-700">
        <input
          type="checkbox"
          name="agreed"
          checked={formData.agreed}
          onChange={handleChange}
          className="accent-orange-500"
        />
        <div className="text-xs opacity-80">
          I agree to the{" "}
          <a href="#" className="underline hover:text-orange-600">Terms</a> and{" "}
          <a href="#" className="underline hover:text-orange-600">Privacy Policy</a>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <button
          type="submit"
          className="bg-gradient-to-r from-indigo-900 via-orange-400 to-orange-500 py-2 sm:py-3 px-8 !rounded-full w-44 font-semibold text-white shadow-lg text-sm sm:text-base hover:scale-105 transition"
        >
          Create Account
        </button>
      </div>
    </form>
  );
}

export default SignInForm;

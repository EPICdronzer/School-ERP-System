import { FaGoogle } from "react-icons/fa";
function LoginForm() {
  return (
    <div className=' bg-gray-200 rounded-xl flex flex-col p-10 gap-5'>
        <div className='flex justify-center items-center text-3xl font-bold'>Login</div>
        <form sction="" method="">
            <div className='flex flex-col gap-2'>
                <label>Username/Email</label>
                <input type="" className='border-orange-400 border-2 rounded-2xl'></input>
            </div>
            <div className='flex flex-col gap-2'>
                <label>Password</label>
                <input type="" className='border-orange-400 border-2 rounded-2xl'></input>
            </div>
            <div className='flex gap-2'>
                <input type="checkbox"/><div>Remember Me</div>
            </div>
            
            <button className='bg-orange-200 p-1 !rounded-xl w-sm'>Login</button>
            <div className='text-center'>---------or---------</div>
            <div className='flex gap-3 justify-center items-center'>
                <div >
                    <img src="https://scripts.myclassboard.in/cdndatastatic/MainLogin_Assets/img/google-icon-02.jpg" class="w-10 h-10 object-contain " />
                </div>
                <div >
                    <img src="https://scripts.myclassboard.in/cdndatastatic/MainLogin_Assets/img/apple-icon-02.jpg" class="w-10 h-10 object-contain" />
                </div>
                <div >
                    <img src="https://scripts.myclassboard.in/cdndatastatic/MainLogin_Assets/img/microsoft-icon-02.jpg" class="w-10 h-10 object-contain" />
                </div>
            </div>
            <div><a href="">Forgot Password ?</a></div>
            <div>By Logging in, you agree to MyClassboard's <a href="">Conditions of Use</a> and <a href="">Privacy Policy.</a></div>
        </form>
        
    </div>
  )
}

export default LoginForm
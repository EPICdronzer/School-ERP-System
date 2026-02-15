import { IoNotificationsCircleSharp } from "react-icons/io5";
function NavBar({collapsed}){
    return(
    <header className={`flex justify-between fixed z-50 top-0 right-0 h-16 bg-white shadow-md flex items-center  transition-all duration-300 ${collapsed ? "left-17 px-10" : "left-64 px-6"}`}>
        <div className="font-semibold !text-lg">Dashboard</div>
        <div className="flex gap-4 justify-center items-center">
            <input
            type="text"
            placeholder="Search"
            className="shadow-md focus:shadow-lg transition-shadow duration-200 rounded-full border border-gray-400 px-4 py-1 outline-none focus:ring-2 focus:ring-blue-400"/>
            <div className="flex gap-2 justify-center items-center">
                <IoNotificationsCircleSharp className="!text-3xl"/>
                <div className="bg-gray-300  rounded-full w-6 h-6">
                    <img></img>
                </div>
            </div>
        </div>
    </header>
    )
}
export default NavBar;
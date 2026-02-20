import { IoNotificationsCircleSharp } from "react-icons/io5";
import { FiSearch, FiBell } from "react-icons/fi";
import { FaUser, FaChevronDown, FaCog } from "react-icons/fa";
import { useState } from "react";

function NavBar({ collapsed }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const notifications = [
    { id: 1, text: "New user registered", time: "2 min ago", unread: true },
    { id: 2, text: "Report generated successfully", time: "1 hour ago", unread: true },
    { id: 3, text: "System update available", time: "3 hours ago", unread: false },
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <nav
      className={`fixed top-0 right-0 h-16 bg-white border-b border-gray-200 shadow-sm z-30 transition-all duration-300
      ${collapsed ? "left-17" : "left-64"}`}
    >
      <div className="h-full flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <div className="text-lg font-bold text-gray-800">{localStorage.getItem("role").toUpperCase()}</div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-2 w-64 focus-within:ring-2 focus-within:ring-[#0C3564] focus-within:bg-white transition-all">
            <FiSearch className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-none outline-none w-full text-sm text-gray-700 placeholder-gray-400"
            />
          </div>

          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 hover:bg-gray-100 !rounded-lg transition-all duration-200"
              aria-label="Notifications"
            >
              <FiBell className="w-6 h-6 text-gray-600" />
              {unreadCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </button>

            {showNotifications && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setShowNotifications(false)}
                />
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-20">
                  <div className="p-4 border-b border-gray-200 bg-[#0C3564]">
                    <h3 className="font-semibold text-white">Notifications</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map((notif) => (
                      <div
                        key={notif.id}
                        className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-all duration-200 ${
                          notif.unread ? 'bg-blue-50' : ''
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          {notif.unread && (
                            <div className="w-2 h-2 bg-[#0C3564] rounded-full mt-2"></div>
                          )}
                          <div className="flex-1">
                            <p className="text-sm text-gray-800">{notif.text}</p>
                            <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 text-center border-t border-gray-200">
                    <button className="text-sm text-[#0C3564] hover:text-[#3558A8] font-medium transition-colors duration-200">
                      View all notifications
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="flex items-center justify-center">
            <button
              onClick={() => setShowProfile(!showProfile)}
              className="flex items-center gap-2 hover:bg-gray-100 !rounded-lg transition-all duration-200 p-2 "
              aria-label="User menu"
            >
              <div className="w-9 h-9 bg-[#0C3564] rounded-full flex items-center justify-center">
                <FaUser className="w-4  text-white" />
              </div>
              <div className="flex flex-col justify-center items-start">
                <div className="text-sm  font-semibold text-gray-800">John Doe</div>
                <div className="text-xs text-gray-500">Administrator</div>
              </div>
              <FaChevronDown className={`w-3 h-3 text-gray-400 hidden lg:block transition-transform duration-200 ${showProfile ? 'rotate-180' : ''}`} />
            </button>

            {showProfile && (
              <>
                <div
                  className="fixed inset-0 z-[60]"
                  onClick={() => setShowProfile(false)}
                />
                <div className="absolute right-2 top-full mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 z-[70]">
                  <div className="p-4 border-b border-gray-200 bg-[#0C3564]">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                        <FaUser className="w-6 h-6 text-[#0C3564]" />
                      </div>
                      <div className="flex flex-col gap-1 min-w-0">
                        <p className="text-sm font-semibold text-white truncate">John Doe</p>
                        <p className="text-xs text-white/80 truncate">admin@example.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-2">
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-200 flex items-center gap-2">
                      <FaUser className="w-4 h-4" />
                      Profile
                    </button>
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-200 flex items-center gap-2">
                      <FaCog className="w-4 h-4" />
                      Settings
                    </button>
                    <hr className="my-2 border-gray-200" />
                    <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 flex items-center gap-2">
                      Logout
                    </button>
                  </div>
                </div>
              </>
)}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
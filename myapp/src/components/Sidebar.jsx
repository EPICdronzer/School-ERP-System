
import { FaBars, FaHome, FaChartBar, FaUsers, FaCog } from "react-icons/fa";

export default function Sidebar({ collapsed, setCollapsed }) {
  return (
     <aside
            className={`fixed top-0 left-0 h-full bg-gray-900 text-white
            transition-all duration-300 z-40
            ${collapsed ? "w-20" : "w-64"}`}
          >
            <div className="h-16 flex items-center justify-between px-4 border-b border-gray-700">
              {!collapsed && <span className="font-bold text-lg">Admin</span>}
              <FaBars
                className="cursor-pointer"
                onClick={() => setCollapsed(!collapsed)}
              />
            </div>
    
            <nav className="mt-4 flex flex-col gap-2 px-2">
              <Item icon={<FaHome />} text="Dashboard" collapsed={collapsed} />
              <Item icon={<FaChartBar />} text="Reports" collapsed={collapsed} />
              <Item icon={<FaUsers />} text="Users" collapsed={collapsed} />
              <Item icon={<FaCog />} text="Settings" collapsed={collapsed} />
            </nav>
        </aside>
  );
}

function Item({ icon, text, collapsed }) {
  return (
    <div className="group flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 cursor-pointer relative">
      <div className="text-lg">{icon}</div>

      {!collapsed && <span className="text-sm">{text}</span>}

      {collapsed && (
        <span className="absolute left-16 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
          {text}
        </span>
      )}
    </div>
  );
}

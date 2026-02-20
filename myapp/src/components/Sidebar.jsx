import { useLocation, Link } from "react-router-dom";
import { FaBars, FaHome, FaChartBar, FaUsers, FaCog, FaUserGraduate, FaUserTie, FaChalkboardTeacher  } from "react-icons/fa";

export default function Sidebar({ collapsed, setCollapsed }) {
  const location = useLocation();

  return (
    <>
      {!collapsed && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setCollapsed(true)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full bg-[#0C3564] text-white
        transition-all duration-300 z-40
        ${collapsed ? "w-16" : "w-64"}`}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-white/20">
          {!collapsed && <span className="font-bold text-3xl">BFA</span>}
          <FaBars
            className="cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => setCollapsed(!collapsed)}
          />
        </div>

        <nav className="mt-2 flex flex-col gap-1 px-2 ">
          <Item
            icon={<FaHome />}
            text="Dashboard"
            collapsed={collapsed}
            path="/admin/home"
            currentPath={location.pathname}
          />

          <Item
            icon={<FaUserGraduate  />}
            text="Students"
            collapsed={collapsed}
            path="/admin/student"
            currentPath={location.pathname}
          />

          <Item
            icon={<FaChalkboardTeacher  />}
            text="Teachers"
            collapsed={collapsed}
            path="/admin/teachers"
            currentPath={location.pathname}
          />

          <Item
            icon={<FaUserTie  />}
            text="Staff"
            collapsed={collapsed}
            path="/admin/staff"
            currentPath={location.pathname}
          />

          <Item
            icon={<FaCog />}
            text="Settings"
            collapsed={collapsed}
            path="/admin/settings"
            currentPath={location.pathname}
          />
        </nav>
      </aside>
    </>
  );
}


function Item({ icon, text, collapsed, path, currentPath }) {
  const isActive = currentPath === path;

  return (
    <Link to={path} className="text-white !no-underline">
      <div
        className={`group flex items-center gap-3 p-3 rounded-lg cursor-pointer relative transition-all duration-200 
        ${
          isActive
            ? "bg-[#3558A8] shadow-md font-semibold"
            : "hover:bg-white/10"
        }`}
      >
        <div className="text-lg">{icon}</div>

        {!collapsed && <span className="text-sm ">{text}</span>}

        {collapsed && (
          <span className="absolute left-20 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap z-50 pointer-events-none">
            {text}
          </span>
        )}
      </div>
    </Link>
  );
}

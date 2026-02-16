import { useState } from "react";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <NavBar collapsed={collapsed} />

      <main
        className={`pt-20 p-6 transition-all duration-300
        ml-16 md:ml-20 ${!collapsed && "md:ml-64"} `}
      >
        {children}
      </main>
    </div>
  );
}
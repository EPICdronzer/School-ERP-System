import { useState } from "react";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">

        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed}/>
        <NavBar collapsed={collapsed}/>

        <main
            className={`pt-20 p-6 transition-all duration-300
            ${collapsed ? "ml-20" : "ml-64"}`}
        >
            {children}
        </main>
    </div>
  );
}



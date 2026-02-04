import { useState } from "react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import Layout from "../components/Layout";

function Dashboard(){
    const [collapsed, setCollapsed] = useState(false);

  return (
    <>
    <Layout>
      <div className="grid grid-rows-2 grid-cols-6 gap-4">
        <div className="w-50 h-16 shadow-xl rounded-lg border-2 border-black"></div>
        <div className="w-50 h-16 shadow-xl rounded-lg border-2 border-black"></div>
        
        <div className="w-50 h-16 shadow-xl rounded-lg border-2 border-black"></div>
        <div className="w-50 h-16 shadow-xl rounded-lg border-2 border-black"></div>
        <div className="col-span-2 row-span-2 w-50 h-50 shadow-xl border-2 border-black rounded-xl"></div>
        <div className="w-50 h-16 shadow-xl rounded-lg border-2 border-black"></div>
        <div className="w-50 h-16 shadow-xl rounded-lg border-2 border-black"></div>
        <div className="w-50 h-16 shadow-xl rounded-lg border-2 border-black"></div>
        <div className="w-50 h-16 shadow-xl rounded-lg border-2 border-black"></div>
      </div>
    </Layout>
    </>
    )
}
export default Dashboard;
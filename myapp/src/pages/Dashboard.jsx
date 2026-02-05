import { useState } from "react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import Layout from "../components/Layout";
import { PiFoldersFill } from "react-icons/pi";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { GiExpense } from "react-icons/gi";
import { TbMoneybag } from "react-icons/tb";
import { IoBagCheckSharp } from "react-icons/io5";
import { PiStudentFill } from "react-icons/pi";
import { MdPeopleAlt } from "react-icons/md";

function Dashboard(){
    const [collapsed, setCollapsed] = useState(false);

  return (
    <>
    <Layout>
      <div className="grid grid-rows-2 grid-cols-6 gap-4">
        <div className="flex flex-col w-full h-full shadow-xl rounded-lg border-2 border-gray-200 p-3 gap-3">
          <div className="flex justify-between font-semibold text-sm opacity-75 gap-3">
            Fee Awaiting payment
            <PiFoldersFill className="text-2xl text-pink-300"/>
          </div>
          <div className="font-semibold text-lg text-gray-600">
            <span>2450</span>
            <span className="opacity-50">/5000</span>
          </div>
        </div>

        <div className="flex flex-col w-full h-full shadow-xl rounded-lg border-2 border-gray-200 p-3 gap-3">
          <div className="flex justify-between font-semibold text-sm opacity-75 gap-3">
            Monthly Fee Collection
            <MdOutlineCurrencyRupee className="text-2xl text-green-300"/>
          </div>
          <div className="font-semibold text-lg text-gray-600">
            Rs. 9,00,000
          </div>
        </div>

        <div className="flex flex-col w-full h-full shadow-xl rounded-lg border-2 border-gray-200 p-3 gap-3 justify-center">
          <div className="flex justify-between font-semibold text-sm opacity-75 gap-3">
            Expenses this Month
            <GiExpense className="text-2xl text-red-300"/>
          </div>
          <div className="font-semibold text-lg text-gray-600">
            Rs. 5,72,136
          </div>
        </div>

        <div className="flex flex-col w-full h-full shadow-xl rounded-lg border-2 border-gray-200 p-3 gap-3 justify-center">
          <div className="flex justify-between font-semibold text-sm opacity-75 gap-3">
            Profits this Month
            <TbMoneybag className="text-2xl text-yellow-300"/>
          </div>
          <div className="font-semibold text-lg text-gray-600">
            Rs. 3,27,864
          </div>
        </div>
        
        <div className="col-span-2 row-span-10 w-full h-full shadow-xl border-2 border-gray-200 rounded-md p-4">
          <div className="flex justify-between">
            Fee Collection and Expenses
            <div className="flex gap-2 ">
              <select className="w-36 h-8">
                <option>Session: 2026-27</option>
              </select>
              <select>
                <option>All Months</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full h-full shadow-xl rounded-lg border-2 border-gray-200 p-3 gap-3">
          <div className="flex justify-between font-semibold text-sm opacity-75 gap-3">
            Teacher's Present Today
            <IoBagCheckSharp className="text-2xl text-pink-300"/>
          </div>
          <div className="font-semibold text-lg text-gray-600">
            <span>72</span>
            <span className="opacity-50">/80</span>
          </div>
        </div>

        <div className="flex flex-col w-full h-full shadow-xl rounded-lg border-2 border-gray-200 p-3 gap-3">
          <div className="flex justify-between font-semibold text-sm opacity-75 gap-3">
            Student's Present Today
            <PiStudentFill className="text-2xl text-pink-300"/>
          </div>
          <div className="font-semibold text-lg text-gray-600">
            <span>4396</span>
            <span className="opacity-50">/5000</span>
          </div>
        </div>

        <div className="flex flex-col w-full h-full shadow-xl rounded-lg border-2 border-gray-200 p-3 gap-3 justify-center">
          <div className="flex justify-between font-semibold text-sm opacity-75 gap-3">
            Staff's Present Today
            <MdPeopleAlt className="text-2xl text-pink-300"/>
          </div>
          <div className="font-semibold text-lg text-gray-600">
            <span>40</span>
            <span className="opacity-50">/40</span>
          </div>
        </div>

        <div className="flex flex-col w-full h-full shadow-xl rounded-lg border-2 border-gray-200 p-3 gap-3">
          <div className="flex justify-between font-semibold text-sm opacity-75 gap-3">
            Converted Leads this Month
            <MdPeopleAlt className="text-2xl text-pink-300"/>
          </div>
          <div className="font-semibold text-lg text-gray-600">
            <span>2</span>
            <span className="opacity-50">/10</span>
          </div>
        </div>

        <div className="col-span-4 row-span-2 w-full h-full shadow-xl border-2 border-gray-200 rounded-md"></div>
        <div className="col-span-2 row-span-2 w-full h-full shadow-xl rounded-lg border-2 border-gray-200"></div>
        <div className="col-span-2 row-span-2 w-full h-full shadow-xl rounded-lg border-2 border-gray-200"></div>
        <div className="col-span-2 row-span-2 w-full h-full shadow-xl rounded-lg border-2 border-gray-200"></div>
        <div className="col-span-2 row-span-2 w-full h-full shadow-xl rounded-lg border-2 border-gray-200"></div>
        <div className="col-span-2 row-span-2 w-full h-full shadow-xl rounded-lg border-2 border-gray-200"></div>
        <div className="col-span-2 row-span-2 w-full h-full shadow-xl rounded-lg border-2 border-gray-200"></div>
        <div className="col-span-6 row-span-4 w-full h-full shadow-xl border-2 border-gray-200 rounded-md"></div>
      </div>
    </Layout>
    </>
    )
}
export default Dashboard;
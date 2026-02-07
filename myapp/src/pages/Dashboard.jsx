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
import FinanceBarChart from "../components/FinanceBarChart";
import IncomeDonutChart from "../components/IncomeDonutChart";

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
        
        <div className="col-span-2 row-span-10 w-full h-full shadow-xl border-2 border-gray-200 rounded-md p-4 flex gap-3 flex-col">
          <div className="flex justify-between font-semibold text-black text-lg">
            Notice Board
          </div>
          
          <div class="w-[350px] h-[250px] overflow-y-auto border-2 border-gray-300 rounded-lg p-3 bg-white">
  
              <div class="border-b border-gray-200 py-2">
                <h3 class="text-red-600 font-semibold underline text-sm">
                  Result for Class IX is out Now!!!
                </h3>
                <p class="text-gray-500 text-xs mt-1">Today, 11:00 am</p>
              </div>

              <div class="border-b border-gray-200 py-2">
                <h3 class="text-red-600 font-semibold underline text-sm">
                  Result for Class VIII is out Now!!!
                </h3>
                <p class="text-gray-500 text-xs mt-1">Today, 11:00 am</p>
              </div>

              <div class="border-b border-gray-200 py-2">
                <h3 class="text-red-600 font-semibold underline text-sm">
                  Result for Class VII is out Now!!!
                </h3>
                <p class="text-gray-500 text-xs mt-1">Today, 11:00 am</p>
              </div>

              <div class="border-b border-gray-200 py-2">
                <h3 class="text-red-600 font-semibold underline text-sm">
                  Result for Class VI is out Now!!!
                </h3>
                <p class="text-gray-500 text-xs mt-1">Today, 11:00 am</p>
              </div>

              <div class="py-2">
                <h3 class="text-red-600 font-semibold underline text-sm">
                  Result for Class V is out Now!!!
                </h3>
                <p class="text-gray-500 text-xs mt-1">Today, 11:00 am</p>
              </div>

          </div>

          <div>
            <button></button>
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

        <div className="flex flex-col gap-4 col-span-4 row-span-2 w-full h-full shadow-xl border-2 border-gray-200 rounded-md p-4">
          <div className="flex justify-between font-semibold text-black !text-lg">
            Fee Collection and Expenses
            <div className="flex gap-2 font-semibold text-xs">
              <select className="w-36 h-8 border-1 border-gray-300 shadow-md">
                <option>Session: 2026-27</option>
              </select>
              <select className="border-1 border-gray-300 shadow-md">
                <option>All Months</option>
              </select>
            </div>
          </div>
          <FinanceBarChart/>
        </div>

        <div className="col-span-2 row-span-2 w-full h-full shadow-xl rounded-lg border-2 border-gray-200">
          <IncomeDonutChart/>
        </div>
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
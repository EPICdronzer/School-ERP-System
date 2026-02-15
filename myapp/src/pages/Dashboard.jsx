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
import StudentAttendanceCard from "../components/StatsCard";
import StatsCard from "../components/StatsCard";
import NoticeBoard from "../components/NoticeBoard";
import UpcomingEvents from "../components/UpcomingEvents";
import FacultyOnLeave from "../components/FacultyOnLeave";
import FacultyDetails from "../components/FacultyDetails";
import AcademicSchedule from "../components/AcademicSchedule";

function Dashboard(){
    const [collapsed, setCollapsed] = useState(false);

  return (
    <>
    <Layout>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 auto-rows-auto">
        
        {/* Stats Cards Row 1 - Responsive: 1 col mobile, 2 cols tablet, 4 cols desktop, 6 cols xl */}
        <div className="flex flex-col w-full h-full shadow-xl rounded-lg border-2 border-gray-200 p-3 gap-3 min-h-[120px]">
          <div className="flex justify-between font-semibold text-sm opacity-75 gap-3">
            Fee Awaiting payment
            <PiFoldersFill className="text-2xl text-pink-300 flex-shrink-0"/>
          </div>
          <div className="font-semibold text-lg text-gray-600">
            <span>2450</span>
            <span className="opacity-50">/5000</span>
          </div>
        </div>

        <div className="flex flex-col w-full h-full shadow-xl rounded-lg border-2 border-gray-200 p-3 gap-3 min-h-[120px]">
          <div className="flex justify-between font-semibold text-sm opacity-75 gap-3">
            Monthly Fee Collection
            <MdOutlineCurrencyRupee className="text-2xl text-green-300 flex-shrink-0"/>
          </div>
          <div className="font-semibold text-lg text-gray-600">
            Rs. 9,00,000
          </div>
        </div>

        <div className="flex flex-col w-full h-full shadow-xl rounded-lg border-2 border-gray-200 p-3 gap-3 justify-center min-h-[120px]">
          <div className="flex justify-between font-semibold text-sm opacity-75 gap-3">
            Expenses this Month
            <GiExpense className="text-2xl text-red-300 flex-shrink-0"/>
          </div>
          <div className="font-semibold text-lg text-gray-600">
            Rs. 5,72,136
          </div>
        </div>

        <div className="flex flex-col w-full h-full shadow-xl rounded-lg border-2 border-gray-200 p-3 gap-3 justify-center min-h-[120px]">
          <div className="flex justify-between font-semibold text-sm opacity-75 gap-3">
            Profits this Month
            <TbMoneybag className="text-2xl text-yellow-300 flex-shrink-0"/>
          </div>
          <div className="font-semibold text-lg text-gray-600">
            Rs. 3,27,864
          </div>
        </div>

        {/* Stats Cards Row 2 */}
        <div className="flex flex-col w-full h-full shadow-xl rounded-lg border-2 border-gray-200 p-3 gap-3 min-h-[120px]">
          <div className="flex justify-between font-semibold text-sm opacity-75 gap-3">
            Teacher's Present Today
            <IoBagCheckSharp className="text-2xl text-pink-300 flex-shrink-0"/>
          </div>
          <div className="font-semibold text-lg text-gray-600">
            <span>72</span>
            <span className="opacity-50">/80</span>
          </div>
        </div>

        <div className="flex flex-col w-full h-full shadow-xl rounded-lg border-2 border-gray-200 p-3 gap-3 min-h-[120px]">
          <div className="flex justify-between font-semibold text-sm opacity-75 gap-3">
            Student's Present Today
            <PiStudentFill className="text-2xl text-pink-300 flex-shrink-0"/>
          </div>
          <div className="font-semibold text-lg text-gray-600">
            <span>4396</span>
            <span className="opacity-50">/5000</span>
          </div>
        </div>

        <div className="flex flex-col w-full h-full shadow-xl rounded-lg border-2 border-gray-200 p-3 gap-3 justify-center min-h-[120px]">
          <div className="flex justify-between font-semibold text-sm opacity-75 gap-3">
            Staff's Present Today
            <MdPeopleAlt className="text-2xl text-pink-300 flex-shrink-0"/>
          </div>
          <div className="font-semibold text-lg text-gray-600">
            <span>40</span>
            <span className="opacity-50">/40</span>
          </div>
        </div>

        <div className="flex flex-col w-full h-full shadow-xl rounded-lg border-2 border-gray-200 p-3 gap-3 min-h-[120px]">
          <div className="flex justify-between font-semibold text-sm opacity-75 gap-3">
            Converted Leads this Month
            <MdPeopleAlt className="text-2xl text-pink-300 flex-shrink-0"/>
          </div>
          <div className="font-semibold text-lg text-gray-600">
            <span>2</span>
            <span className="opacity-50">/10</span>
          </div>
        </div>

        {/* Fee Collection Chart - Responsive: full width mobile, 2 cols tablet, 4 cols desktop */}
        <div className="flex flex-col gap-4 col-span-1 sm:col-span-2 lg:col-span-4 xl:col-span-4 w-full h-full shadow-xl border-2 border-gray-200 rounded-md p-4 min-h-[400px]">
          <div className="flex flex-col sm:flex-row justify-between gap-3">
            <div className="font-semibold text-black text-base sm:text-lg">
              Fee Collection and Expenses
            </div>
            <div className="flex flex-col sm:flex-row gap-2 font-semibold text-xs">
              <select className="w-full sm:w-36 h-8 border-1 border-gray-300 shadow-md rounded px-2">
                <option>Session: 2026-27</option>
              </select>
              <select className="w-full sm:w-auto h-8 border-1 border-gray-300 shadow-md rounded px-2">
                <option>All Months</option>
              </select>
            </div>
          </div>
          <FinanceBarChart/>
        </div>

        {/* Income Donut Chart - Responsive */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 xl:col-span-2 w-full h-full shadow-xl rounded-lg border-2 border-gray-200 min-h-[400px]">
          <IncomeDonutChart dataTitle="Income June 2024" arrayData={[
            { name: "Donation", value: 45234, color: "#22c55e" },
            { name: "Rent", value: 18234, color: "#facc15" },
            { name: "Miscellaneous", value: 30234, color: "#4fd1c5" },
            { name: "Book Sale", value: 25234, color: "#d8b4fe" },
            { name: "Uniform Sale", value: 59234, color: "#a8a29e" },
          ]}/>
        </div>

        {/* Expense Donut Chart - Responsive */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 xl:col-span-2 w-full h-full shadow-xl rounded-lg border-2 border-gray-200 min-h-[400px]">
          <IncomeDonutChart dataTitle="Expense June 2024" arrayData={[
            { name: "Telephone Bill", value: 18000, color: "#a78bfa" },   
            { name: "Flower", value: 12000, color: "#fde68a" },           
            { name: "Electricity Bill", value: 22000, color: "#a8a29e" },  
            { name: "Stationary", value: 16000, color: "#22c55e" },        
            { name: "Miscellaneous", value: 20000, color: "#f87171" },     
          ]}/>
        </div>

        {/* Student Attendance Card - Responsive */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 xl:col-span-2 w-full h-full shadow-xl rounded-lg border-2 border-gray-200 min-h-[300px]">
          <StatsCard
            title="Student Attendance"
            data={[
              { label: "PRESENT", count: 4396, total: 5000, color: "bg-green-500" },
              { label: "LATE", count: 0, total: 5000, color: "bg-gray-300" },
              { label: "ABSENT", count: 609, total: 5000, color: "bg-red-500" },
              { label: "HALF DAY", count: 5, total: 5000, color: "bg-yellow-400" },
            ]}
          />
        </div>

        {/* Library Overview - Responsive */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 xl:col-span-2 w-full h-full shadow-xl rounded-lg border-2 border-gray-200 min-h-[300px]">
          <StatsCard
            title="Library Overview"
            data={[
              { label: "DUE FOR RETURNED", count: 5, total: 36, color: "bg-red-500" },
              { label: "RETURNED", count: 31, total: 36, color: "bg-green-500" },
              { label: "ISSUED", count: 36, total: 450, color: "bg-yellow-400" },
              { label: "AVAILABLE", count: 414, total: 450, color: "bg-cyan-500" },
            ]}
          />
        </div>

        {/* Fees Overview - Responsive */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 xl:col-span-2 w-full h-full shadow-xl rounded-lg border-2 border-gray-200 min-h-[300px]">
          <StatsCard
            title="Fees Overview"
            data={[
              { label: "UNPAID", count: 1000, total: 5000, color: "bg-red-500" },
              { label: "PARTIAL", count: 550, total: 5000, color: "bg-yellow-400" },
              { label: "PAID", count: 250, total: 5000, color: "bg-green-500" },
            ]}
          />
        </div>

        {/* Enquiry Overview - Responsive */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 xl:col-span-2 w-full h-full shadow-xl rounded-lg border-2 border-gray-200 min-h-[300px]">
         <StatsCard
            title="Enquiry Overview"
            data={[
              { label: "ACTIVE", count: 5, total: 10, color: "bg-cyan-500" },
              { label: "WON", count: 2, total: 10, color: "bg-green-500" },
              { label: "PASSIVE", count: 1, total: 10, color: "bg-yellow-400" },
              { label: "LOSS", count: 1, total: 10, color: "bg-red-500" },
              { label: "DEAD", count: 1, total: 10, color: "bg-gray-400" },
            ]}
          />
        </div>

        {/* Sidebar Content - Responsive: appears at bottom on mobile, side on desktop */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-4 xl:col-span-2 w-full h-full shadow-xl border-2 border-gray-200 rounded-md p-4 flex gap-5 flex-col order-last xl:order-none xl:row-start-1 xl:row-end-11 xl:col-start-5">
          <NoticeBoard notices={[
            { title: "Result for Class IX is out Now!!!", time: "Today, 11:00 am" },
            { title: "Result for Class VIII is out Now!!!", time: "Today, 11:00 am" },
            { title: "Result for Class VII is out Now!!!", time: "Today, 11:00 am" },
            { title: "Result for Class VI is out Now!!!", time: "Today, 11:00 am" },
            { title: "Result for Class V is out Now!!!", time: "Today, 11:00 am" },
          ]}/>
          <UpcomingEvents events={[
            {
              title: "Webinar on Career Trends for Class-X",
              date: "23, Jun",
              time: "11:00 AM",
            },
            {
              title: "Parent-Teacher Meeting",
              date: "25, Jun",
              time: "09:30 AM",
            },
            {
              title: "Science Exhibition",
              date: "28, Jun",
              time: "10:00 AM",
            },
          ]}/>
          <FacultyOnLeave
            faculty={[
              {
                name: "Suchita Sachdeva",
                subject: "Mathematics",
                className: "Class XI",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
              },
              {
                name: "Ramesh Kumar",
                subject: "Physics",
                className: "Class X",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
              },
            ]}
          />
          <FacultyDetails
            data={[
              { role: "Admin", count: 1 },
              { role: "Teachers", count: 80 },
              { role: "Accountant", count: 1 },
              { role: "Librarian", count: 2 },
              { role: "Receptionist", count: 1 },
            ]}
          />
        </div>

        {/* Academic Schedule - Full width on all screens */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-4 xl:col-span-6 w-full h-full shadow-xl border-2 border-gray-200 rounded-md min-h-[500px]">
          <AcademicSchedule/>
        </div>
      </div>
    </Layout>
    </>
    )
}
export default Dashboard;
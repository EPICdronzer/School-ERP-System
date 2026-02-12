import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function AcademicSchedule() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  // Adjust so week starts Monday
  const startDayIndex = (firstDay.getDay() + 6) % 7;
  const daysInMonth = lastDay.getDate();

  const generateDates = () => {
    const dates = [];
    for (let i = 0; i < startDayIndex; i++) {
      dates.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      dates.push(i);
    }
    return dates;
  };

  const dates = generateDates();

  const changeMonth = (direction) => {
    const newDate = new Date(year, month + direction, 1);
    setCurrentDate(newDate);
  };

  return (
    <div className="bg-white rounded-md h-full flex flex-col p-4">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="font-semibold text-lg">
          Academic Schedule
        </div>

        <select className="border rounded-md px-2 py-1 text-sm">
          <option>Month</option>
        </select>
      </div>

      {/* Month Navigation */}
      <div className="flex items-center justify-between mb-3">
        <ChevronLeft
          className="cursor-pointer text-gray-500 hover:text-black transition"
          onClick={() => changeMonth(-1)}
        />
        <div className="font-medium text-lg">
          {currentDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </div>
        <ChevronRight
          className="cursor-pointer text-gray-500 hover:text-black transition"
          onClick={() => changeMonth(1)}
        />
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-5 grid-rows-[auto_repeat(6,1fr)] flex-1 border-t border-l border-gray-200">
        
        {/* Days Header */}
        {days.map((day) => (
          <div
            key={day}
            className="border-r border-b border-gray-200 text-center font-medium text-xs py-2 bg-gray-50"
          >
            {day}
          </div>
        ))}

        {/* Dates */}
        {dates.map((date, index) => (
          <div
            key={index}
            className="border-r border-b border-gray-200 p-1 text-xs relative flex items-start"
          >
            {date && (
              <span className="text-gray-600">
                {date.toString().padStart(2, "0")}
              </span>
            )}
          </div>
        ))}

      </div>
    </div>
  );
}

import { useNavigate } from "react-router-dom";
import { CalendarDays, Clock } from "lucide-react";

export default function UpcomingEvents({ events }) {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-md lg:max-w-full">
      
      {/* Title */}
      <div className="text-lg font-semibold mb-3">
        Upcoming Events
      </div>

      {/* Scrollable Container */}
      <div className="h-72 overflow-y-auto border border-gray-300 rounded-lg p-3 bg-white shadow-sm space-y-3">
        
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
          >
            <h3 className="font-semibold text-gray-800 !text-sm sm:!text-base">
              {event.title}
            </h3>

            <div className="flex items-center gap-4 mt-3 text-gray-500 text-xs sm:text-sm">
              
              <div className="flex items-center gap-1">
                <CalendarDays size={16} />
                <span>{event.date}</span>
              </div>

              <div className="flex items-center gap-1">
                <Clock size={16} />
                <span>{event.time}</span>
              </div>

            </div>
          </div>
        ))}

        {events.length === 0 && (
          <p className="text-center text-gray-400 py-6">
            No upcoming events
          </p>
        )}
      </div>

      {/* Add Button */}
      <button
        onClick={() => navigate("/add-event")}
        className="!w-full opacity-50 mt-3 sm:w-auto sm:px-6 sm:py-2 text-sm bg-sky-100 !text-blue-600 font-bold px-4 py-2 rounded-md hover:bg-sky-400 hover:!text-white transition"
      >
        + Add New Event
      </button>
    </div>
  );
}

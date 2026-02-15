import { useNavigate } from "react-router-dom";

export default function NoticeBoard({ notices }) {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-md lg:max-w-full">
      
      {/* Title */}
      <div className="flex justify-between items-center font-semibold text-black text-lg mb-3">
        <span>Notice Board</span>
      </div>

      {/* Scrollable Box */}
      <div className="h-60 sm:h-64 md:h-72 overflow-y-auto border border-gray-300 rounded-lg p-4 bg-white shadow-sm">
        
        {notices.map((notice, index) => (
          <div
            key={index}
            className={`py-3 ${
              index !== notices.length - 1
                ? "border-b border-gray-200"
                : ""
            }`}
          >
            <h3 className="!text-red-600 font-semibold underline text-xs sm:!text-sm cursor-pointer hover:text-red-700 transition">
              {notice.title}
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">
              {notice.time}
            </p>
          </div>
        ))}

        {notices.length === 0 && (
          <p className="text-gray-400 text-sm text-center py-6">
            No notices available
          </p>
        )}
      </div>

      {/* Button */}
      <button
        onClick={() => navigate("/add-notice")}
        className="!rounded-lg !w-full opacity-50 mt-3 sm:w-auto sm:px-6 sm:py-2 text-sm bg-sky-100 !text-blue-600 font-bold px-4 py-2 rounded-md hover:bg-sky-400 hover:!text-white transition"
      >
        + Add New Notice
      </button>
    </div>
  );
}

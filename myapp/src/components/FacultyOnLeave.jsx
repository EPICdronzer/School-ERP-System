import { useNavigate } from "react-router-dom";
// import { FiBookOpen } from "react-icons";
// import { FaGraduationCap } from "react-icons";

export default function FacultyOnLeave({ faculty }) {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-md lg:max-w-full">
      
      {/* Title */}
      <div className="text-lg font-semibold mb-3">
        Faculty On Leave
      </div>

      {/* Scrollable List */}
      <div className="h-72 overflow-y-auto border border-gray-300 rounded-lg p-3 bg-white shadow-sm space-y-3">
        
        {faculty.map((member, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-lg p-3 hover:shadow-md transition"
          >
            {/* Avatar */}
            <img
              src={member.image}
              alt={member.name}
              className="!w-14 !h-14 rounded-full object-cover"
            />

            {/* Info */}
            <div className="flex flex-col">
              <h3 className="font-semibold text-gray-800 text-sm sm:!text-base">
                {member.name}
              </h3>

              <div className="flex items-center gap-4 mt-1 text-gray-500 text-xs sm:text-sm">
                
                <div className="flex items-center gap-1">
                  {/* <FiBookOpen /> */}
                  <span>{member.subject}</span>
                </div>

                <div className="flex items-center gap-1">
                  {/* <FaGraduationCap /> */}
                  <span>{member.className}</span>
                </div>

              </div>
            </div>
          </div>
        ))}

        {faculty.length === 0 && (
          <p className="text-center text-gray-400 py-6">
            No faculty on leave
          </p>
        )}
      </div>

      {/* Add Button */}
      <button
        onClick={() => navigate("/add-faculty")}
        className="!w-full opacity-50 mt-3 sm:w-auto sm:px-6 sm:py-2 text-sm bg-sky-100 !text-blue-600 font-bold px-4 py-2 rounded-md hover:bg-sky-400 hover:!text-white transition"
      >
        + Add Faculty
      </button>
    </div>
  );
}

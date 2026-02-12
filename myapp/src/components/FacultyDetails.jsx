import { FaUser } from "react-icons/fa";

export default function FacultyDetails({ data }) {
  return (
    <div className="w-full max-w-md lg:max-w-full">
      
      {/* Title */}
      <div className="!text-lg font-semibold mb-4">
        Faculty Details
      </div>

      {/* Card */}
      <div className=" rounded-lg  shadow-sm divide-y divide-gray-200">
        
        {data.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 hover:bg-gray-50 transition"
          >
            {/* Left Side */}
            <div className="flex items-center gap-4">
              
              {/* Icon */}
              <div className="bg-sky-200 p-3 rounded-md">
                <FaUser className="text-[#1B8AA5] text-lg" />
              </div>

              {/* Role Name */}
              <span className="text-gray-700 font-medium">
                {item.role}
              </span>
            </div>

            {/* Right Side Count */}
            <span className="text-gray-800 font-semibold">
              {item.count}
            </span>
          </div>
        ))}

      </div>
    </div>
  );
}

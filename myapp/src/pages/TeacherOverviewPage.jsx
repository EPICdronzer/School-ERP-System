import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import useSearch from "../hooks/useSearch";

function TeacherOverviewPage() {
  const [loading, setLoading] = useState(true);
  const [teachers, setTeachers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("All");

  const itemsPerPage = 5;

  useEffect(() => {
    axios
      .get("/JSONFile/teacherData.json")
      .then((res) => {
        setTeachers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching teachers:", err);
        setLoading(false);
      });
  }, []);

  const filteredTeachers =
    departmentFilter === "All"
      ? teachers
      : teachers.filter(
          (teacher) => teacher.department === departmentFilter
        );

  const { currentItems: currentTeachers, totalPages } =
    useSearch(filteredTeachers, searchTerm, currentPage, itemsPerPage);

  if (loading) return <div className="p-6">Loading teachers...</div>;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col w-full px-4 sm:px-6 lg:px-8 max-w-screen-2xl mx-auto">

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 w-full mb-6">
        <div>
          <div className="text-lg font-semibold text-gray-800">
            Teacher Management
          </div>
          <p className="text-sm text-gray-500">
            Manage and monitor all teachers
          </p>
        </div>

        <button className="bg-blue-800 text-white px-4 py-2.5 !rounded-xl font-medium 
                          hover:bg-blue-600 transition duration-200 
                          shadow-md hover:shadow-lg active:scale-95">
          + Add Teacher
        </button>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 mb-4">
        <div className="text-xl font-semibold">
          Teachers Information
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          <input
            type="text"
            placeholder="Search by name, subject, email..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="border !rounded-lg px-4 py-2 text-sm w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-800"
          />

          <select
            value={departmentFilter}
            onChange={(e) => {
              setDepartmentFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="border !rounded-lg px-3 py-2 text-sm focus:outline-none"
          >
            <option value="All">All Departments</option>
            <option value="Science">Science</option>
            <option value="Commerce">Commerce</option>
            <option value="Arts">Arts</option>
          </select>
        </div>
      </div>

      <div className="text-sm text-gray-500 mb-2">
        Showing {currentTeachers.length} of {filteredTeachers.length} teachers
      </div>

      <div className="w-full overflow-x-auto bg-white !rounded-xl shadow-sm">
        <table className="min-w-[900px] w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="p-3">Teacher Name</th>
              <th className="p-3">Employee ID</th>
              <th className="p-3">Subject</th>
              <th className="p-3">Department</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {currentTeachers.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center p-6 text-gray-500">
                  No teachers found
                </td>
              </tr>
            ) : (
              currentTeachers.map((teacher) => (
                <tr
                  key={teacher.id}
                  className="border-b hover:bg-purple-50 transition"
                >
                  <td className="p-3 flex items-center gap-3">
                    <img
                      src={teacher.image}
                      alt="avatar"
                      className="w-10 h-10 !rounded-full object-cover"
                    />
                    <span className="font-medium">{teacher.name}</span>
                  </td>

                  <td className="p-3">{teacher.employeeId}</td>
                  <td className="p-3">{teacher.subject}</td>
                  <td className="p-3">{teacher.department}</td>
                  <td className="p-3">{teacher.email}</td>
                  <td className="p-3">{teacher.phone}</td>

                  <td className="p-3 flex justify-center gap-2 text-gray-500">
                    <button className="p-2 !rounded-md hover:bg-blue-100 transition">
                      <FaEdit className="hover:text-blue-500" />
                    </button>

                    <button className="p-2 !rounded-md hover:bg-red-100 transition">
                      <FaTrash className="hover:text-red-500" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6">

          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className="px-4 py-2 bg-gray-200 !rounded-lg disabled:opacity-50 hover:bg-gray-300 transition"
          >
            Previous
          </button>

          <div className="flex flex-wrap justify-center gap-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-3 py-1 !rounded-md text-sm font-medium transition 
                  ${
                    currentPage === index + 1
                      ? "bg-blue-800 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            className="px-4 py-2 bg-gray-200 !rounded-lg disabled:opacity-50 hover:bg-gray-300 transition"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default TeacherOverviewPage;
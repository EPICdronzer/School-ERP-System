import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import useSearch from "../hooks/useSearch";

function SubjectManagementPage() {
  const [loading, setLoading] = useState(true);
  const [subjects, setSubjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 5;

  useEffect(() => {
    axios
      .get("/JSONFile/subjects.json")
      .then((res) => {
        setSubjects(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching subjects:", err);
        setLoading(false);
      });
  }, []);

  const { currentItems: currentSubjects, totalPages } =
    useSearch(subjects, searchTerm, currentPage, itemsPerPage);

  if (loading)
    return <div className="p-6 text-lg font-medium">Loading subjects...</div>;

  return (
    <div className="flex flex-col w-full px-4 sm:px-6 lg:px-8 max-w-screen-2xl mx-auto">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 w-full mb-6">
        <div>
          <div className="flex items-center gap-2 text-xl font-semibold text-gray-800">
            <FaBook className="text-blue-800" />
            Subject Management
          </div>
          <p className="text-sm text-gray-500">
            Manage subjects and class allocations
          </p>
        </div>

        <button className="bg-blue-800 text-white px-4 py-2.5 !rounded-xl font-medium 
                          hover:bg-blue-600 transition duration-200 
                          shadow-md hover:shadow-lg active:scale-95">
          + Add Subject
        </button>
      </div>

      {/* Search */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-semibold">
          Subjects Information
        </div>

        <input
          type="text"
          placeholder="Search subject, code, teacher..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="border !rounded-lg px-4 py-2 text-sm w-64 
                     focus:outline-none focus:ring-2 focus:ring-blue-800"
        />
      </div>

      {/* Info Count */}
      <div className="text-sm text-gray-500 mb-3">
        Showing {currentSubjects.length} of {subjects.length} subjects
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto bg-white !rounded-xl shadow-sm">
        <table className="min-w-[1000px] w-full text-sm text-left">

          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="p-3">Subject</th>
              <th className="p-3">Code</th>
              <th className="p-3">Assigned Teacher</th>
              <th className="p-3">Classes</th>
              <th className="p-3">Weekly Hours</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {currentSubjects.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-8 text-gray-500 font-medium">
                  No subjects found.
                </td>
              </tr>
            ) : (
              currentSubjects.map((subject) => (
                <tr
                  key={subject.id}
                  className="border-b hover:bg-blue-50 transition"
                >
                  <td className="p-3 font-medium">
                    {subject.name}
                  </td>

                  <td className="p-3">
                    <span className="px-2 py-1 text-xs !rounded-md bg-gray-200">
                      {subject.code}
                    </span>
                  </td>

                  <td className="p-3">
                    {subject.teacher}
                  </td>

                  {/* Classes Column (Important 🔥) */}
                  <td className="p-3">
                    <div className="flex flex-wrap gap-2">
                      {subject.classes.map((cls, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs !rounded-full 
                                     bg-green-100 text-green-700 font-medium"
                        >
                          {cls}
                        </span>
                      ))}
                    </div>
                  </td>

                  <td className="p-3">
                    {subject.weeklyHours} hrs
                  </td>

                  <td className="p-3 flex justify-center gap-4 text-gray-500">
                    <FaTrash className="cursor-pointer hover:text-red-500" />
                    <FaEdit className="cursor-pointer hover:text-blue-500" />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
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
      )}
    </div>
  );
}

export default SubjectManagementPage;
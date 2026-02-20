import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import useSearch from "../hooks/useSearch";

function StaffOverviewPage() {
  const [loading, setLoading] = useState(true);
  const [staff, setStaff] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");

  const itemsPerPage = 5;

  useEffect(() => {
    axios
      .get("/JSONFile/staffData.json")
      .then((res) => {
        setStaff(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching staff:", err);
        setLoading(false);
      });
  }, []);

  const filteredStaff =
    roleFilter === "All"
      ? staff
      : staff.filter((member) => member.role === roleFilter);

  const { currentItems: currentStaff, totalPages } =
    useSearch(filteredStaff, searchTerm, currentPage, itemsPerPage);

  if (loading) return <div className="p-6">Loading staff...</div>;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col w-full px-4 sm:px-6 lg:px-8 max-w-screen-2xl mx-auto">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 w-full mb-6">
        <div>
          <div className="text-lg font-semibold text-gray-800">
            Staff Management
          </div>
          <p className="text-sm text-gray-500">
            Manage non-teaching staff members
          </p>
        </div>

        <button className="bg-blue-800 text-white px-4 py-2.5 rounded-xl font-medium 
                          hover:bg-blue-600 transition duration-200 
                          shadow-md hover:shadow-lg active:scale-95">
          + Add Staff
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 mb-4">
        <div className="text-xl font-semibold">
          Staff Information
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          <input
            type="text"
            placeholder="Search by name, role, email..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="border rounded-lg px-4 py-2 text-sm w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-800"
          />

          <select
            value={roleFilter}
            onChange={(e) => {
              setRoleFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="border rounded-lg px-3 py-2 text-sm focus:outline-none"
          >
            <option value="All">All Roles</option>
            <option value="Assistant">Assistant</option>
            <option value="Peon">Peon</option>
            <option value="Clerk">Clerk</option>
            <option value="Accountant">Accountant</option>
            <option value="Librarian">Librarian</option>
            <option value="Receptionist">Receptionist</option>
            <option value="Lab Assistant">Lab Assistant</option>
            <option value="Security">Security</option>
          </select>
        </div>
      </div>

      {/* Record Count */}
      <div className="text-sm text-gray-500 mb-2">
        Showing {currentStaff?.length || 0} of {filteredStaff.length} staff members
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto bg-white rounded-xl shadow-sm">
        <table className="min-w-[900px] w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="p-3">Staff Name</th>
              <th className="p-3">Employee ID</th>
              <th className="p-3">Role</th>
              <th className="p-3">Department</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {currentStaff?.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center p-6 text-gray-500">
                  No staff members found
                </td>
              </tr>
            ) : (
              currentStaff?.map((member) => (
                <tr
                  key={member.id}
                  className="border-b hover:bg-blue-50 transition"
                >
                  <td className="p-3 flex items-center gap-3">
                    <img
                      src={member.image}
                      alt="avatar"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <span className="font-medium">{member.name}</span>
                  </td>

                  <td className="p-3">{member.employeeId}</td>
                  <td className="p-3">{member.role}</td>
                  <td className="p-3">{member.department}</td>
                  <td className="p-3">{member.email}</td>
                  <td className="p-3">{member.phone}</td>

                  <td className="p-3 flex justify-center gap-2 text-gray-500">
                    <button className="p-2 rounded-md hover:bg-blue-100 transition">
                      <FaEdit className="hover:text-blue-500" />
                    </button>

                    <button className="p-2 rounded-md hover:bg-red-100 transition">
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
            className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50 hover:bg-gray-300 transition"
          >
            Previous
          </button>

          <div className="flex flex-wrap justify-center gap-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-3 py-1 rounded-md text-sm font-medium transition 
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
            className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50 hover:bg-gray-300 transition"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default StaffOverviewPage;
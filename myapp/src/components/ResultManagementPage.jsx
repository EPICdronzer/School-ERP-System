import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { FaFileAlt } from "react-icons/fa";

export default function ResultManagementPage() {
  const [students, setStudents] = useState([]);
  const [marks, setMarks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClass, setSelectedClass] = useState("");

  useEffect(() => {
    axios.get("/JSONFile/studentData.json")
      .then(res => setStudents(res.data))
      .catch(err => console.error("Student fetch error:", err));

    axios.get("/JSONFile/marks.json")
      .then(res => setMarks(Array.isArray(res.data) ? res.data : []))
      .catch(err => console.error("Marks fetch error:", err));
  }, []);

  const filteredStudents = useMemo(() => {
    return students.filter(student => {

      const matchesSearch =
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.roll?.toString().includes(searchTerm) ||
        student.class?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.section?.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesClass =
        selectedClass === "" || student.class === selectedClass;

      return matchesSearch && matchesClass;
    });
  }, [students, searchTerm, selectedClass]);

  return (
    <div className="p-6 max-w-screen-2xl mx-auto space-y-8">

      {/* PAGE HEADER */}
      <div>
        <div className="flex items-center gap-2 text-2xl font-semibold">
          <FaFileAlt className="text-purple-700" />
          Result Management
        </div>
        <p className="text-gray-500 text-sm mt-1">
          View, filter, and generate report cards for students class-wise.
        </p>
      </div>

      {/* FILTER SECTION */}
      <div className="bg-white p-6 !rounded-2xl shadow-md border grid md:grid-cols-2 gap-6">

        {/* Search Box */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Search Student
          </label>
          <input
            type="text"
            placeholder="Search by Name, Roll, Class, Section..."
            className="w-full border !rounded-xl px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Class Dropdown */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Filter by Class
          </label>
          <select
            className="w-full border !rounded-xl px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            <option value="">All Classes</option>
            {[...new Set(students.map(s => s.class))].map((cls, index) => (
              <option key={index} value={cls}>{cls}</option>
            ))}
          </select>
        </div>

      </div>

      {/* STUDENT TABLE */}
      <div className="bg-white !rounded-xl shadow-md overflow-x-auto">

        <table className="w-full text-sm">
          <thead className="bg-gray-100 uppercase text-xs text-gray-600">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Roll</th>
              <th className="p-3">Class</th>
              <th className="p-3">Section</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id} className="border-b hover:bg-purple-50">
                <td className="p-3 font-medium">{student.name}</td>
                <td className="p-3">{student.roll}</td>
                <td className="p-3">{student.class}</td>
                <td className="p-3">{student.section}</td>
                <td className="p-3 text-center">
                  <button className="bg-green-600 text-white px-4 py-1 !rounded-lg hover:bg-green-500 transition">
                    View Result
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}
import axios from "axios";
import { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function ClassAndSectionOverview() {
    const [loading, setLoading] = useState(true);
    const [classes, setClasses] = useState([]);
    const [sections, setSections] = useState([]);
  

  useEffect(() => {
    setLoading(true);

    Promise.all([
        axios.get("/JSONFile/classes.json"),
        axios.get("/JSONFile/sections.json"),
    ])
    .then(([classRes, sectionRes]) => {
      setClasses(classRes.data);
      setSections(sectionRes.data);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Error fetching data:", err);
      setLoading(false);
    });
  }, []);
  return (
    <div className="p-6 pt-24 min-h-screen bg-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <div className="bg-white shadow-xl !rounded-2xl p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="text-xl font-semibold">Classes</div>
            <button className="bg-blue-600 text-white px-4 py-2 !rounded-lg hover:bg-blue-700 transition">
              + Add Class
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="bg-gray-100 text-gray-600">
                  <th className="p-3">Class</th>
                  <th className="p-3">Class Teacher</th>
                  <th className="p-3">Students</th>
                  <th className="p-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {classes.map((cls) => (
                  <tr key={cls.id} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-medium">{cls.name}</td>
                    <td className="p-3">{cls.teacher}</td>
                    <td className="p-3">{cls.students}</td>
                    <td className="p-3 flex justify-center gap-3">
                      <FaEdit className="text-blue-500 cursor-pointer hover:scale-110 transition" />
                      <FaTrash className="text-red-500 cursor-pointer hover:scale-110 transition" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white shadow-xl !rounded-2xl p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="text-xl font-semibold">Sections</div>
            <button className="bg-green-600 text-white px-4 py-2 !rounded-lg hover:bg-green-700 transition">
              + Add Section
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="bg-gray-100 text-gray-600">
                  <th className="p-3">Section</th>
                  <th className="p-3">Class</th>
                  <th className="p-3">Room</th>
                  <th className="p-3">Students</th>
                  <th className="p-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {sections.map((sec) => (
                  <tr key={sec.id} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-medium">{sec.name}</td>
                    <td className="p-3">{sec.class}</td>
                    <td className="p-3">{sec.room}</td>
                    <td className="p-3">{sec.students}</td>
                    <td className="p-3 flex justify-center gap-3">
                      <FaEdit className="text-blue-500 cursor-pointer hover:scale-110 transition" />
                      <FaTrash className="text-red-500 cursor-pointer hover:scale-110 transition" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
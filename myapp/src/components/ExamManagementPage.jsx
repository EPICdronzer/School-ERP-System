import { useEffect, useState } from "react";
import axios from "axios";
import { FaFileDownload, FaUserGraduate } from "react-icons/fa";
import {
  FaFileAlt,
  FaTrash,
  FaEdit,
  FaTrophy,
  FaDownload,
} from "react-icons/fa";

export default function ExamManagementPage() {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/JSONFile/exams.json")
      .then((res) => {
        setExams(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching exams:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="p-6 text-lg font-medium">Loading exams...</div>;
  }

  return (
    <div className="p-6 max-w-screen-2xl mx-auto space-y-16">

      {/* Header with Anchor Navigation */}
      <div className="flex flex-wrap gap-4 justify-between items-center">
        <div className="flex items-center gap-2 text-xl font-semibold">
          <FaFileAlt className="text-purple-700" />
          Examination Management
        </div>

        <div className="flex gap-3 flex-wrap">
          <a href="#createExam" className="bg-purple-700 !no-underline text-white px-4 py-2 !rounded-xl hover:bg-purple-600 transition">
            + Create Exam
          </a>

          <a href="#rankList" className="bg-yellow-500 !no-underline text-white px-4 py-2 !rounded-xl hover:bg-yellow-400 transition flex items-center gap-2">
            <FaTrophy /> Rank List
          </a>

          <a href="#reportCard" className="bg-green-600 !no-underline text-white px-4 py-2 !rounded-xl hover:bg-green-500 transition flex items-center gap-2">
            <FaDownload /> Report Card
          </a>
        </div>
      </div>

      <section id="createExam">
        <div className="text-lg font-semibold mb-4">Created Exams</div>

        <div className="bg-white !rounded-xl shadow-sm overflow-x-auto">
          <table className="min-w-[950px] w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
              <tr>
                <th className="p-3">Exam Name</th>
                <th className="p-3">Class</th>
                <th className="p-3">Start Date</th>
                <th className="p-3">End Date</th>
                <th className="p-3">Total Marks</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {exams.map((exam) => (
                <tr key={exam.id} className="border-b hover:bg-purple-50">
                  <td className="p-3 font-medium">{exam.name}</td>
                  <td className="p-3">{exam.class}</td>
                  <td className="p-3">{exam.startDate}</td>
                  <td className="p-3">{exam.endDate}</td>
                  <td className="p-3">{exam.totalMarks}</td>
                  <td className="p-3 flex justify-center gap-4 text-gray-500">
                    <FaEdit className="cursor-pointer hover:text-blue-500" />
                    <FaTrash className="cursor-pointer hover:text-red-500" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="rankList">
        <div className="text-lg font-semibold mb-4">Rank List</div>

        <div className="bg-white !rounded-xl shadow p-6">
          <p className="text-gray-500 mb-4">
            Rank list will be auto-generated based on total marks.
          </p>

          <button className="bg-yellow-500 text-white px-4 py-2 !rounded-xl hover:bg-yellow-400 transition">
            Generate Rank List
          </button>
        </div>
      </section>

      

<section id="reportCard" className="space-y-6">
  <div className="flex items-center gap-3">
    <div>
      <div className="text-xl font-semibold text-gray-800">
        Report Card Generation
      </div>
      <p className="text-sm text-gray-500">
        Generate and download student academic report
      </p>
    </div>
  </div>

  <div className="bg-white !rounded-2xl shadow-md border border-gray-100 p-8">

    <div className="grid md:grid-cols-2 gap-6">

      {/* Student Name */}
      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-600">
          Student Name
        </label>
        <input
          type="text"
          placeholder="Enter student name"
          className="w-full border border-gray-200 !rounded-xl px-4 py-2.5
                     focus:outline-none focus:ring-2 focus:ring-green-500
                     transition"
        />
      </div>

      {/* Roll Number */}
      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-600">
          Roll Number
        </label>
        <input
          type="text"
          placeholder="Enter roll number"
          className="w-full border border-gray-200 !rounded-xl px-4 py-2.5
                     focus:outline-none focus:ring-2 focus:ring-green-500
                     transition"
        />
      </div>

      {/* Class */}
      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-600">
          Class
        </label>
        <input
          type="text"
          placeholder="Enter class"
          className="w-full border border-gray-200 !rounded-xl px-4 py-2.5
                     focus:outline-none focus:ring-2 focus:ring-green-500
                     transition"
        />
      </div>

      {/* Section */}
      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-600">
          Section
        </label>
        <input
          type="text"
          placeholder="Enter section"
          className="w-full border border-gray-200 !rounded-xl px-4 py-2.5
                     focus:outline-none focus:ring-2 focus:ring-green-500
                     transition"
        />
      </div>

      {/* Class Teacher */}
      <div className="space-y-1 md:col-span-2">
        <label className="text-sm font-medium text-gray-600">
          Class Teacher
        </label>
        <input
          type="text"
          placeholder="Enter class teacher name"
          className="w-full border border-gray-200 !rounded-xl px-4 py-2.5
                     focus:outline-none focus:ring-2 focus:ring-green-500
                     transition"
        />
      </div>

    </div>

    {/* Divider */}
    <div className="border-t my-8"></div>

    {/* Action Button */}
    <div className="flex justify-end">
      <button
        className="flex items-center gap-2 bg-green-600 text-white 
                   px-6 py-3 !rounded-xl font-medium
                   hover:bg-green-500 transition
                   shadow-md hover:shadow-lg active:scale-95"
      >
        <FaFileDownload />
        Generate & Download PDF
      </button>
    </div>

  </div>
</section>

    </div>
  );
}
import { useEffect, useState } from "react";
import axios from "axios";
import { FaMoneyBillWave, FaFileInvoice, FaExclamationCircle } from "react-icons/fa";

export default function FeeManagementPage() {
  const [feeStructure, setFeeStructure] = useState([]);
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    axios.get("/JSONFile/feeStructure.json")
      .then(res => setFeeStructure(res.data));

    axios.get("/JSONFile/feeCollection.json")
      .then(res => setCollections(res.data));
  }, []);

  return (
    <div className="p-6 max-w-screen-2xl mx-auto space-y-10">

      <div>
        <div className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
          <FaMoneyBillWave className="text-green-600" />
          Fee Management
        </div>
        <p className="text-gray-500 mt-1">
          Manage fee structure, collections, pending dues and receipts
        </p>
      </div>

      {/* ================= FEE STRUCTURE ================= */}
      <section className="bg-white p-6 rounded-2xl shadow-md border">
        <div className="text-xl font-semibold mb-4">Class-wise Fee Structure</div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 uppercase text-xs">
              <tr>
                <th className="p-3">Class</th>
                <th className="p-3">Tuition</th>
                <th className="p-3">Exam</th>
                <th className="p-3">Library</th>
                <th className="p-3">Transport</th>
              </tr>
            </thead>
            <tbody>
              {feeStructure.map((fee) => (
                <tr key={fee.id} className="border-b hover:bg-green-50">
                  <td className="p-3 font-medium">{fee.class}</td>
                  <td className="p-3">₹{fee.tuitionFee}</td>
                  <td className="p-3">₹{fee.examFee}</td>
                  <td className="p-3">₹{fee.libraryFee}</td>
                  <td className="p-3">₹{fee.transportFee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ================= FEE COLLECTION ================= */}
      <section className="bg-white p-6 rounded-2xl shadow-md border">
        <div className="text-xl font-semibold mb-4">Fee Collection Records</div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 uppercase text-xs">
              <tr>
                <th className="p-3">Student</th>
                <th className="p-3">Class</th>
                <th className="p-3">Paid</th>
                <th className="p-3">Total</th>
                <th className="p-3">Status</th>
                <th className="p-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {collections.map((item) => (
                <tr key={item.id} className="border-b hover:bg-blue-50">
                  <td className="p-3 font-medium">{item.studentName}</td>
                  <td className="p-3">{item.class}</td>
                  <td className="p-3 text-green-600 font-medium">
                    ₹{item.amountPaid}
                  </td>
                  <td className="p-3">₹{item.totalFee}</td>
                  <td className="p-3">
                    <span className={`px-2 py-1 text-xs rounded-full font-medium 
                      ${item.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="p-3">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ================= PENDING DUES ================= */}
      <section className="bg-white p-6 rounded-2xl shadow-md border">
        <div className="text-xl font-semibold mb-4 flex items-center gap-2">
          <FaExclamationCircle className="text-red-500" />
          Pending Dues
        </div>

        {collections
          .filter(item => item.status !== "Paid")
          .map(item => (
            <div key={item.id}
              className="flex justify-between items-center bg-red-50 p-4 rounded-xl mb-3">
              <div>
                <div className="font-medium">{item.studentName}</div>
                <div className="text-sm text-gray-500">{item.class}</div>
              </div>
              <div className="text-red-600 font-semibold">
                ₹{item.totalFee - item.amountPaid} Due
              </div>
            </div>
          ))
        }
      </section>

    </div>
  );
}
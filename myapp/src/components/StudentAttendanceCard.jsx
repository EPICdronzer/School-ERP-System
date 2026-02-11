export default function StudentAttendanceCard(props) {
  const totalStudents = props.totalStudents;

  const attendance = [...props.attendance  
  ];

  return (
    <div className="bg-white rounded-xl shadow p-4 space-y-4">
      <div className="text-lg font-semibold">{props.title}</div>

      {attendance.map((item, index) => (
        <div key={index} className="space-y-1">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-semibold tracking-wide">{item.label}</p>
              <p className="text-xs text-gray-500">
                {item.count} out of {totalStudents}
              </p>
            </div>
            <p className="text-sm font-semibold text-gray-700">
              {item.percent.toFixed(2)}%
            </p>
          </div>

          
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`${item.color} h-2 rounded-full transition-all duration-500`}
              style={{ width: `${item.percent}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

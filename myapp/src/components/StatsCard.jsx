export default function StatsCard({ title, data }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 space-y-4 h-full">
      <div className="text-lg font-semibold">{title}</div>

      {data.map((item, index) => {
        const percent = ((item.count / item.total) * 100).toFixed(2);

        return (
          <div key={index} className="space-y-1">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-semibold tracking-wide">
                  {item.label}
                </p>
                <p className="text-xs text-gray-500">
                  {item.count} out of {item.total}
                </p>
              </div>
              <p className="text-sm font-semibold text-gray-700">
                {percent}%
              </p>
            </div>

            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`${item.color} h-2 rounded-full transition-all duration-500`}
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

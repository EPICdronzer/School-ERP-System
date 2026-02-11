import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";



const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { name, value, percent } = payload[0];
    return (
      <div className="bg-gray-800 text-white text-sm px-3 py-2 rounded-lg shadow">
        ₹ {value.toLocaleString()} ({(percent * 100).toFixed(1)}%)
      </div>
    );
  }
  return null;
};

export default function IncomeDonutChart(props) {
  const data = [...props.arrayData];
  return (
    <div className="w-full h-[420px] bg-white p-4 rounded-xl shadow">
      <div className="text-lg font-semibold mb-4">{props.dataTitle}</div>

      <ResponsiveContainer width="100%" height="85%">
        <PieChart>
          <Tooltip content={<CustomTooltip />} />

          <Legend
            verticalAlign="top"
            align="center"
            iconType="square"
            wrapperStyle={{ paddingBottom: "30px",fontSize:"14px" }}
          />

          <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          innerRadius={50}
          outerRadius={130}
          paddingAngle={3}
          cornerRadius={5}
          startAngle={180}   // start from left
          endAngle={0}       // end at right (makes half circle)
          cx="50%"           // keep centered horizontally
          cy="70%"           // push it down so half fits nicely
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>

        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

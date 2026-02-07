import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Donation", value: 45234, color: "#22c55e" },
  { name: "Rent", value: 18234, color: "#facc15" },
  { name: "Miscellaneous", value: 30234, color: "#4fd1c5" },
  { name: "Book Sale", value: 25234, color: "#d8b4fe" },
  { name: "Uniform Sale", value: 59234, color: "#a8a29e" },
];

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

export default function IncomeDonutChart() {
  return (
    <div className="w-full h-[420px] bg-white p-5 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Income June 2024</h2>

      <ResponsiveContainer width="100%" height="85%">
        <PieChart>
          <Tooltip content={<CustomTooltip />} />

          <Legend
            verticalAlign="top"
            align="left"
            iconType="square"
            wrapperStyle={{ paddingBottom: "10px" }}
          />

          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={70}
            outerRadius={110}
            paddingAngle={3}
            cornerRadius={5}
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

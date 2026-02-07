import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", fee: 3000, expenses: 600 },
  { month: "Feb", fee: 1700, expenses: 1300 },
  { month: "Mar", fee: 900, expenses: 1100 },
  { month: "Apr", fee: 2100, expenses: 1400 },
  { month: "May", fee: 1900, expenses: 800 },
  { month: "Jun", fee: 700, expenses: 500 },
  { month: "Jul", fee: 1600, expenses: 2200 },
  { month: "Aug", fee: 1700, expenses: 1300 },
  { month: "Sep", fee: 700, expenses: 500 },
  { month: "Oct", fee: 700, expenses: 500 },
  { month: "Nov", fee: 700, expenses: 500 },
  { month: "Dec", fee: 700, expenses: 500 },
];

export default function FinanceBarChart() {
  return (
    <div className="w-full h-[400px] flex justify-center items-center">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }} barCategoryGap="25%">
            <CartesianGrid strokeDasharray="4 4" />
            <XAxis dataKey="month" />
            <YAxis tickFormatter={(value) => `₹ ${value}`} />
            <Tooltip formatter={(value) => `₹ ${value}`} />
            <Legend
                verticalAlign="top"
                align="left"
                iconType="square"
                wrapperStyle={{ paddingBottom: "30px",fontSize:"14px",color:"#22c55e"}} 
            />
            <Bar dataKey="fee" name="Fee Collection" fill="#22c55e" radius={[6,6,0,0]} />
            <Bar dataKey="expenses" name="Expenses" fill="#ef4444" radius={[6,6,0,0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

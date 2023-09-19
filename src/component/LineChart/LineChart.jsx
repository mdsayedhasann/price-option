import { useState } from "react";
import {
  LineChart as LChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";


const LineChart = () => {
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const studentData = [
    { id: 1, name: "Alice", math: 85, physics: 90, chemistry: 78, biology: 92 },
    { id: 2, name: "Bob", math: 78, physics: 88, chemistry: 80, biology: 85 },
    {
      id: 3,
      name: "Charlie",
      math: 92,
      physics: 85,
      chemistry: 91,
      biology: 88,
    },
    { id: 4, name: "David", math: 76, physics: 79, chemistry: 82, biology: 77 },
    { id: 5, name: "Eve", math: 89, physics: 94, chemistry: 87, biology: 91 },
    { id: 6, name: "Frank", math: 70, physics: 72, chemistry: 68, biology: 75 },
    { id: 7, name: "Grace", math: 95, physics: 96, chemistry: 93, biology: 97 },
    { id: 8, name: "Hank", math: 81, physics: 84, chemistry: 79, biology: 83 },
    { id: 9, name: "Ivy", math: 87, physics: 91, chemistry: 86, biology: 89 },
    { id: 10, name: "Jack", math: 79, physics: 82, chemistry: 76, biology: 80 },
  ];


  return (
    <div>
      <LChart width={800} height={400} data={studentData}>
        <Line dataKey="math" stroke="red" />
        <Line dataKey={"physics"} stroke="yellow"></Line>
      </LChart>
    </div>
  );
};

export default LineChart;

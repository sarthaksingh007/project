import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "20",
    Employer: 4000,
    Employee: 2400,
    TotalInterest: 2400
  },
  {
    name: "25",
    Employer: 3000,
    Employee: 1398,
    TotalInterest: 2210
  },
  {
    name: "30",
    Employer: 2000,
    Employee: 9800,
    TotalInterest: 2290
  },
  {
    name: "35",
    Employer: 2780,
    Employee: 3908,
    TotalInterest: 2000
  },
  {
    name: "40",
    Employer: 1890,
    Employee: 4800,
    TotalInterest: 2181
  },
  {
    name: "40",
    Employer: 2390,
    Employee: 3800,
    TotalInterest: 2500
  },
  {
    name: "50",
    Employer: 3490,
    Employee: 4300,
    TotalInterest: 2100
  },
  {
    name: "60",
    Employer: 7490,
    Employee: 6300,
    TotalInterest: 3100
  }
];

export default function App() {
  return (
    <ResponsiveContainer width="92%" height={350}>
    <BarChart 
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 40,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis axisLine={false}  dataKey="name" />
      <YAxis axisLine={false} />
      <Tooltip />
      <Legend  verticalAlign="top" height={36}/>
      <Bar dataKey="Employer" stackId="" fill="#0800a3" yAxisId={0} />
      <Bar dataKey="Employee" stackId="" fill="#4935ff" />
      <Bar dataKey="TotalInterest" stackId="" fill="#85afff" />
    </BarChart>
    </ResponsiveContainer>
  );
}
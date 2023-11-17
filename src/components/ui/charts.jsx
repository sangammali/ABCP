import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";


export default function Charts({data}) {
  return (
    
    <LineChart
    width={900}
    height={300}
      data={data}
      margin={{
        top: 5,
        right: 5,
        left: 15,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      {/*<XAxis dataKey="name" />
    <YAxis />*/}
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="Lead"
        stroke="#850C70"
        activeDot={{ r: 5 }}
      />
      <Line
        type="monotone"
        dataKey="Conversion"
        stroke="#DBB467"
        activeDot={{ r: 5 }}
      />
    </LineChart>
    
  );
}
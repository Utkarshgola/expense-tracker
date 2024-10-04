
import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import styles from './HeroChart.module.css'

const data = [
  { name: "Group A", value: 6 },
  { name: "Group B", value: 3 },
  { name: "Group C", value: 1 },
  
];

const COLORS = ["rgba(255, 147, 4, 1)", "rgb(160, 0, 255)", "rgb(253, 224, 6)", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


function HeroChart() {
  return (
    <div className={styles.chart}>
      <PieChart width={400} height={400} >
       
        <Pie
          data={data}
          cx={90}
          cy={90}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          legendType="square"
          
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
}

export default HeroChart;

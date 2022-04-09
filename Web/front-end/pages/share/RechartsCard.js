import React from "react";
import { TailwindStyles } from "./TailwindStyles";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  YAxis,
  XAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
export default function RechartsCard(props) {
  return (
    <div className={TailwindStyles.recahrtsCard}>
      <ResponsiveContainer className="h-4/6" height={350}>
        <AreaChart
          data={props.data}
          //   height={1000}
          margin={{ top: 5, right: 30, bottom: 5, left: 5 }}
        >
          <defs>
            <linearGradient id="colorLoss" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3c1361" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#3c1361" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorAccuracy" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />a
              <stop offset="100%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            //   dataKey="Validation Accuracy"
            dataKey={props.keyOne}
            stroke={props.reverseArea ? "#52307c" : "#228B22"}
            fill={props.reverseArea ? "url(#colorLoss)" : "url(#colorAccuracy)"}
            // fill={props.fillOne}
            fillOpacity={1}
          />
          <Area
            type="monotone"
            //   dataKey="Train Loss"
            dataKey={props.keyTwo}
            stroke={props.reverseArea ? "#228B22" : "#52307c"}
            fill={props.reverseArea ? "url(#colorAccuracy)" : "url(#colorLoss)"}
            fillOpacity={1}
          />
          <CartesianGrid strokeDasharray="1 1" />
          <Legend verticalAlign="top" height={36} />
          {/* <XAxis dataKey="epoch" /> */}
          <XAxis dataKey={props.xAxisKey} />
          <YAxis domain={props.yAxisDomain} />
          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>
      <div className="px-6 py-4">
        <div className={TailwindStyles.pageCardTitle}>{props.title}</div>
        <p className={TailwindStyles.pageCardDescription}>
          {props.description}
        </p>
      </div>
    </div>
  );
}

"use client";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export type TrendPoint = { name: string } & Record<string, string | number>;
export type TrendLine = { key: string; label: string; color: string };

export function TrendChart({
  data,
  lines,
  yUnit = "",
  height = 280,
}: {
  data: TrendPoint[];
  lines: TrendLine[];
  yUnit?: string;
  height?: number;
}) {
  if (data.length === 0) {
    return (
      <div className="flex h-40 items-center justify-center text-sm text-[#6B7A8D]">
        표시할 데이터가 아직 없습니다.
      </div>
    );
  }
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#E2ECF7" />
        <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#6B7A8D" }} />
        <YAxis tick={{ fontSize: 12, fill: "#6B7A8D" }} unit={yUnit} />
        <Tooltip
          contentStyle={{ borderRadius: 12, border: "1px solid #105D9E1a", fontSize: 13 }}
          formatter={(value) => `${value}${yUnit}`}
        />
        <Legend wrapperStyle={{ fontSize: 12 }} />
        {lines.map((l) => (
          <Line
            key={l.key}
            type="monotone"
            dataKey={l.key}
            name={l.label}
            stroke={l.color}
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}

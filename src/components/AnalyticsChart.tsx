import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LabelList,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, PieChart as PieChartIcon, TrendingUp } from "lucide-react";
import { useState } from "react";

const riskData = [
  { month: "Jan", high: 45, medium: 120, low: 230 },
  { month: "Feb", high: 52, medium: 135, low: 245 },
  { month: "Mar", high: 38, medium: 142, low: 267 },
  { month: "Apr", high: 41, medium: 138, low: 284 },
  { month: "May", high: 35, medium: 145, low: 298 },
  { month: "Jun", high: 31, medium: 152, low: 312 },
];

const serviceTypeData = [
  { name: "Emergency Care", value: 35, color: "hsl(210, 95%, 55%)", count: 1247 },
  { name: "Surgery", value: 25, color: "hsl(167, 85%, 45%)", count: 892 },
  { name: "Diagnostics", value: 20, color: "hsl(38, 92%, 65%)", count: 714 },
  { name: "Outpatient", value: 15, color: "hsl(142, 76%, 36%)", count: 535 },
  { name: "Other", value: 5, color: "hsl(0, 84%, 60%)", count: 178 },
];

export const RiskTrendsChart = () => {
  return (
    <Card className="shadow-soft hover:shadow-medium transition-shadow duration-300 border border-border/50">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-healthcare-primary/10 flex items-center justify-center">
            <TrendingUp className="h-4 w-4 text-healthcare-primary" />
          </div>
          <CardTitle className="text-lg font-semibold">Risk Trends by Month</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={riskData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <defs>
              <linearGradient id="highRisk" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(0, 84%, 60%)" stopOpacity={0.9}/>
                <stop offset="95%" stopColor="hsl(0, 84%, 60%)" stopOpacity={0.7}/>
              </linearGradient>
              <linearGradient id="mediumRisk" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(38, 92%, 65%)" stopOpacity={0.9}/>
                <stop offset="95%" stopColor="hsl(38, 92%, 65%)" stopOpacity={0.7}/>
              </linearGradient>
              <linearGradient id="lowRisk" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(142, 76%, 36%)" stopOpacity={0.9}/>
                <stop offset="95%" stopColor="hsl(142, 76%, 36%)" stopOpacity={0.7}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.5} />
            <XAxis 
              dataKey="month" 
              stroke="hsl(var(--muted-foreground))" 
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))" 
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
              }}
            />
            <Bar dataKey="high" stackId="a" fill="url(#highRisk)" radius={[0, 0, 4, 4]} />
            <Bar dataKey="medium" stackId="a" fill="url(#mediumRisk)" radius={[0, 0, 0, 0]} />
            <Bar dataKey="low" stackId="a" fill="url(#lowRisk)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export const ServiceTypeChart = () => {
  return (
    <Card className="shadow-soft">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Claims by Service Type</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={serviceTypeData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              dataKey="value"
            >
              {serviceTypeData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "6px",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="grid grid-cols-2 gap-2 mt-4">
          {serviceTypeData.map((item) => (
            <div key={item.name} className="flex items-center space-x-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm">{item.name}</span>
              <span className="text-sm text-muted-foreground">({item.value}%)</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
} from "recharts";

const riskData = [
  { name: "Jan", high: 15, medium: 32, low: 85 },
  { name: "Feb", high: 22, medium: 28, low: 90 },
  { name: "Mar", high: 18, medium: 35, low: 78 },
  { name: "Apr", high: 12, medium: 40, low: 95 },
  { name: "May", high: 25, medium: 30, low: 88 },
  { name: "Jun", high: 19, medium: 37, low: 82 },
];

const serviceTypeData = [
  { name: "Inpatient", value: 35, color: "hsl(var(--healthcare-primary))" },
  { name: "Outpatient", value: 28, color: "hsl(var(--healthcare-secondary))" },
  { name: "Specialty", value: 22, color: "hsl(var(--healthcare-accent))" },
  { name: "Physician", value: 15, color: "hsl(var(--primary))" },
];

export const RiskTrendsChart = () => {
  return (
    <Card className="shadow-soft">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Risk Trends by Month</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={riskData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "6px",
              }}
            />
            <Bar dataKey="high" stackId="a" fill="hsl(var(--risk-high))" />
            <Bar dataKey="medium" stackId="a" fill="hsl(var(--risk-medium))" />
            <Bar dataKey="low" stackId="a" fill="hsl(var(--risk-low))" />
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
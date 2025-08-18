import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { TrendIndicator } from "./TrendIndicator";

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  trend?: number;
  icon: LucideIcon;
  className?: string;
}

export const MetricCard = ({
  title,
  value,
  change,
  changeType = "neutral",
  trend,
  icon: Icon,
  className,
}: MetricCardProps) => {
  const getGradientClass = () => {
    switch (changeType) {
      case "positive": return "bg-gradient-success";
      case "negative": return "bg-gradient-danger";
      default: return "bg-gradient-card";
    }
  };

  const getIconBgClass = () => {
    switch (changeType) {
      case "positive": return "bg-healthcare-success/10 text-healthcare-success";
      case "negative": return "bg-healthcare-danger/10 text-healthcare-danger";
      default: return "bg-healthcare-primary/10 text-healthcare-primary";
    }
  };

  return (
    <Card className={cn(
      "group shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-[1.02] border border-border/50 overflow-hidden",
      className
    )}>
      <div className={cn("h-1 w-full", getGradientClass())} />
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 pt-6">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className={cn("h-10 w-10 rounded-lg flex items-center justify-center transition-colors", getIconBgClass())}>
          <Icon className="h-5 w-5" />
        </div>
      </CardHeader>
      <CardContent className="pb-6">
        <div className="flex items-baseline justify-between">
          <div className="text-3xl font-bold text-foreground tracking-tight">
            {value}
          </div>
          {trend !== undefined && (
            <TrendIndicator value={trend} />
          )}
        </div>
        {change && (
          <p className="text-sm text-muted-foreground mt-2 flex items-center gap-2">
            {change}
            {trend !== undefined && (
              <span className="ml-auto">
                <TrendIndicator value={trend} showIcon={false} />
              </span>
            )}
          </p>
        )}
      </CardContent>
    </Card>
  );
};
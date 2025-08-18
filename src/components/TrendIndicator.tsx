import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface TrendIndicatorProps {
  value: number;
  className?: string;
  showIcon?: boolean;
}

export const TrendIndicator = ({ value, className, showIcon = true }: TrendIndicatorProps) => {
  const isPositive = value > 0;
  const isNegative = value < 0;
  const isNeutral = value === 0;

  const getIcon = () => {
    if (isPositive) return TrendingUp;
    if (isNegative) return TrendingDown;
    return Minus;
  };

  const getColorClass = () => {
    if (isPositive) return "text-healthcare-success";
    if (isNegative) return "text-healthcare-danger";
    return "text-muted-foreground";
  };

  const Icon = getIcon();

  return (
    <div className={cn("flex items-center gap-1", getColorClass(), className)}>
      {showIcon && <Icon className="h-3 w-3" />}
      <span className="text-xs font-medium">
        {isPositive && "+"}{value}%
      </span>
    </div>
  );
};
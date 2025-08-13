import { cn } from "@/lib/utils";

interface RiskBadgeProps {
  risk: "high" | "medium" | "low";
  className?: string;
}

export const RiskBadge = ({ risk, className }: RiskBadgeProps) => {
  const variants = {
    high: "bg-risk-high text-risk-high-foreground",
    medium: "bg-risk-medium text-risk-medium-foreground",
    low: "bg-risk-low text-risk-low-foreground",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variants[risk],
        className
      )}
    >
      {risk.charAt(0).toUpperCase() + risk.slice(1)} Risk
    </span>
  );
};
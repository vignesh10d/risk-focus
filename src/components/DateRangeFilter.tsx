import { Button } from "@/components/ui/button";
import { Calendar, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const DateRangeFilter = () => {
  const [selectedRange, setSelectedRange] = useState("This Month");

  const dateRanges = [
    "Last 7 Days",
    "Last 30 Days", 
    "This Month",
    "Last Quarter",
    "This Year"
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Calendar className="h-4 w-4" />
          {selectedRange}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {dateRanges.map((range) => (
          <DropdownMenuItem
            key={range}
            onClick={() => setSelectedRange(range)}
            className={selectedRange === range ? "bg-accent" : ""}
          >
            {range}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
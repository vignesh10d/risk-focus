import { MetricCard } from "@/components/MetricCard";
import { ClaimsTable } from "@/components/ClaimsTable";
import { RiskTrendsChart, ServiceTypeChart } from "@/components/AnalyticsChart";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import { DateRangeFilter } from "@/components/DateRangeFilter";
import { NotificationCenter } from "@/components/NotificationCenter";
import {
  Activity,
  TrendingUp,
  AlertTriangle,
  Users,
  Search,
  Settings,
  Download,
  BarChart3,
  Filter,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Header */}
      <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur-sm shadow-soft">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-healthcare rounded-xl flex items-center justify-center shadow-medium">
                  <Activity className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-healthcare bg-clip-text text-transparent">
                    RiskFocus Auditor
                  </h1>
                  <p className="text-xs text-muted-foreground">Healthcare Claims Intelligence</p>
                </div>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <DateRangeFilter />
                <Button variant="outline" size="sm" className="gap-2">
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="gap-2 hover:scale-105 transition-transform">
                <Search className="h-4 w-4" />
                <span className="hidden sm:inline">Search Claims</span>
              </Button>
              <NotificationCenter />
              <Button variant="outline" size="sm" className="hover:scale-105 transition-transform">
                <Settings className="h-4 w-4" />
              </Button>
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8 space-y-8">
        {/* Enhanced Key Metrics */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Dashboard Overview</h2>
              <p className="text-muted-foreground">Real-time insights into your healthcare audit operations</p>
            </div>
            <Button className="bg-gradient-healthcare hover:opacity-90 transition-opacity shadow-medium gap-2">
              <Download className="h-4 w-4" />
              Export Report
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
            <MetricCard
              title="Total Claims Reviewed"
              value="2,847"
              change="+12% from last month"
              changeType="positive"
              trend={12}
              icon={Activity}
            />
            <MetricCard
              title="High-Risk Claims"
              value="156"
              change="8% reduction from last month"
              changeType="positive"
              trend={-8}
              icon={AlertTriangle}
            />
            <MetricCard
              title="Audit Completion Rate"
              value="94.2%"
              change="+2.1% improvement"
              changeType="positive"
              trend={2.1}
              icon={TrendingUp}
            />
            <MetricCard
              title="Active Auditors"
              value="24"
              change="2 new auditors this week"
              changeType="neutral"
              trend={0}
              icon={Users}
            />
          </div>
        </div>

        {/* Enhanced Main Content */}
        <Tabs defaultValue="dashboard" className="space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <TabsList className="grid grid-cols-2 w-full sm:w-80 h-12 bg-muted/50 backdrop-blur-sm p-1">
              <TabsTrigger 
                value="dashboard" 
                className="data-[state=active]:bg-gradient-healthcare data-[state=active]:text-white h-10 gap-2"
              >
                <BarChart3 className="h-4 w-4" />
                Analytics
              </TabsTrigger>
              <TabsTrigger 
                value="claims" 
                className="data-[state=active]:bg-gradient-healthcare data-[state=active]:text-white h-10 gap-2"
              >
                <AlertTriangle className="h-4 w-4" />
                Priority Claims
              </TabsTrigger>
            </TabsList>
            
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                className="gap-2 hover:scale-105 transition-transform"
              >
                <Filter className="h-4 w-4" />
                Advanced Filters
              </Button>
            </div>
          </div>

          <TabsContent value="dashboard" className="space-y-8 animate-fade-in">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              <RiskTrendsChart />
              <ServiceTypeChart />
            </div>
          </TabsContent>

          <TabsContent value="claims" className="space-y-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Priority Claims for Audit</h2>
                <p className="text-muted-foreground mt-1">
                  AI-powered risk assessment and anomaly detection
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="h-4 w-4" />
                  Export Claims
                </Button>
              </div>
            </div>
            <ClaimsTable />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;

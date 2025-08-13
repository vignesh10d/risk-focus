import { MetricCard } from "@/components/MetricCard";
import { ClaimsTable } from "@/components/ClaimsTable";
import { RiskTrendsChart, ServiceTypeChart } from "@/components/AnalyticsChart";
import { AuditWorkflow } from "@/components/AuditWorkflow";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Activity,
  TrendingUp,
  AlertTriangle,
  Users,
  Search,
  Bell,
  Settings,
  Download,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-soft">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-healthcare rounded-lg flex items-center justify-center">
                  <Activity className="h-5 w-5 text-white" />
                </div>
                <h1 className="text-xl font-bold bg-gradient-healthcare bg-clip-text text-transparent">
                  RiskFocus Auditor
                </h1>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Search className="h-4 w-4 mr-2" />
                Search Claims
              </Button>
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-6 space-y-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in">
          <MetricCard
            title="Total Claims Reviewed"
            value="2,847"
            change="+12% from last month"
            changeType="positive"
            icon={Activity}
          />
          <MetricCard
            title="High-Risk Claims"
            value="156"
            change="-8% from last month"
            changeType="positive"
            icon={AlertTriangle}
          />
          <MetricCard
            title="Audit Completion Rate"
            value="94.2%"
            change="+2.1% from last month"
            changeType="positive"
            icon={TrendingUp}
          />
          <MetricCard
            title="Active Auditors"
            value="24"
            change="2 new this week"
            changeType="neutral"
            icon={Users}
          />
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="dashboard" className="space-y-6">
          <div className="flex items-center justify-between">
            <TabsList className="grid grid-cols-3 w-96">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="claims">Priority Claims</TabsTrigger>
              <TabsTrigger value="workflow">Workflow</TabsTrigger>
            </TabsList>
            <Button className="bg-gradient-healthcare">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>

          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RiskTrendsChart />
              <ServiceTypeChart />
            </div>
          </TabsContent>

          <TabsContent value="claims" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Priority Claims for Audit</h2>
              <p className="text-muted-foreground">
                Ranked by ML risk scoring and anomaly detection
              </p>
            </div>
            <ClaimsTable />
          </TabsContent>

          <TabsContent value="workflow" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Audit Workflow Management</h2>
              <p className="text-muted-foreground">
                Track progress and access educational resources
              </p>
            </div>
            <AuditWorkflow />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;

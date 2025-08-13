import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  CheckCircle2,
  Clock,
  AlertTriangle,
  Users,
  FileText,
  TrendingUp,
} from "lucide-react";

const workflowSteps = [
  {
    id: 1,
    title: "Claims Ingestion",
    status: "completed",
    description: "Historical claims imported via CLAIMSauditor",
    progress: 100,
  },
  {
    id: 2,
    title: "ML Analysis",
    status: "completed",
    description: "Anomaly detection and coding gap analysis",
    progress: 100,
  },
  {
    id: 3,
    title: "Risk Ranking",
    status: "in-progress",
    description: "Prioritizing audit targets by risk score",
    progress: 75,
  },
  {
    id: 4,
    title: "Educational Content",
    status: "pending",
    description: "Generate personalized learning recommendations",
    progress: 0,
  },
];

const educationalRecommendations = [
  {
    title: "Cardiology Coding Best Practices",
    relevance: "High",
    type: "Video Course",
    duration: "45 min",
    icon: FileText,
  },
  {
    title: "Inpatient Documentation Guidelines",
    relevance: "Medium",
    type: "Interactive Module",
    duration: "30 min",
    icon: Users,
  },
  {
    title: "Compliance Risk Assessment",
    relevance: "High",
    type: "Assessment",
    duration: "20 min",
    icon: TrendingUp,
  },
];

export const AuditWorkflow = () => {
  return (
    <div className="space-y-6">
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center space-x-2">
            <Clock className="h-5 w-5 text-healthcare-primary" />
            <span>Audit Workflow Status</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {workflowSteps.map((step) => (
            <div key={step.id} className="flex items-center space-x-4 p-3 rounded-lg bg-muted/30">
              <div className="flex-shrink-0">
                {step.status === "completed" && (
                  <CheckCircle2 className="h-6 w-6 text-risk-low" />
                )}
                {step.status === "in-progress" && (
                  <Clock className="h-6 w-6 text-risk-medium animate-pulse" />
                )}
                {step.status === "pending" && (
                  <AlertTriangle className="h-6 w-6 text-muted-foreground" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-foreground">{step.title}</h4>
                  <Badge
                    variant={
                      step.status === "completed"
                        ? "default"
                        : step.status === "in-progress"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {step.status.replace("-", " ")}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                <Progress value={step.progress} className="mt-2 h-2" />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center space-x-2">
            <FileText className="h-5 w-5 text-healthcare-accent" />
            <span>Educational Recommendations</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {educationalRecommendations.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/30 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <item.icon className="h-5 w-5 text-healthcare-primary" />
                <div>
                  <h4 className="font-medium text-foreground">{item.title}</h4>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs text-muted-foreground">{item.type}</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">{item.duration}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge
                  variant={item.relevance === "High" ? "default" : "secondary"}
                  className="text-xs"
                >
                  {item.relevance}
                </Badge>
                <Button size="sm" variant="outline">
                  Start
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
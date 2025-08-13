import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RiskBadge } from "./RiskBadge";
import { AlertTriangle, Calendar, DollarSign, FileText, User, Building, BookOpen, Video, FileDown, Users, Clock } from "lucide-react";

interface Claim {
  id: string;
  patientId: string;
  serviceType: "inpatient" | "outpatient" | "specialty" | "physician";
  amount: number;
  riskScore: number;
  riskLevel: "high" | "medium" | "low";
  anomalies: string[];
  date: string;
  provider: string;
}

interface ClaimDetailModalProps {
  claim: Claim | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ClaimDetailModal = ({ claim, open, onOpenChange }: ClaimDetailModalProps) => {
  if (!claim) return null;

  const mockAuditDetails = {
    codes: ["99213", "90837", "G0447"],
    diagnosis: ["F32.9", "Z71.1", "F43.10"],
    auditedBy: "Dr. Sarah Johnson",
    auditDate: "2024-01-16",
    auditStatus: "In Progress",
    recommendations: [
      "Review documentation for procedure combination justification",
      "Verify medical necessity for high-cost procedures",
      "Consider additional coding training for provider"
    ],
    complianceScore: 85,
    previousAudits: 3,
    costPerUnit: 125.50
  };

  const educationalRecommendations = [
    {
      title: "ICD-10-CM Coding Guidelines",
      type: "Course",
      duration: "2 hours",
      relevance: "high",
      icon: BookOpen
    },
    {
      title: "Documentation Requirements for Mental Health",
      type: "Video",
      duration: "45 min",
      relevance: "high",
      icon: Video
    },
    {
      title: "Compliance Audit Best Practices",
      type: "Workshop",
      duration: "3 hours",
      relevance: "medium",
      icon: Users
    },
    {
      title: "Medicare Guidelines Update",
      type: "Document",
      duration: "30 min",
      relevance: "medium",
      icon: FileDown
    }
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Claim Details - {claim.id}
          </DialogTitle>
          <DialogDescription>
            Comprehensive view of claim information, risk assessment, and audit details
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Patient ID</p>
                  <p className="text-sm text-muted-foreground">{claim.patientId}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Building className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Provider</p>
                  <p className="text-sm text-muted-foreground">{claim.provider}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Service Date</p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(claim.date).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Claim Amount</p>
                  <p className="text-lg font-semibold text-primary">
                    ${claim.amount.toLocaleString()}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium mb-1">Service Type</p>
                <Badge variant="outline" className="capitalize">
                  {claim.serviceType}
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Risk Assessment */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Risk Assessment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-medium mb-2">Risk Level</p>
                <RiskBadge risk={claim.riskLevel} />
              </div>

              <div>
                <p className="text-sm font-medium mb-2">Risk Score</p>
                <div className="flex items-center space-x-3">
                  <div className="flex-1 bg-muted rounded-full h-3">
                    <div
                      className="h-3 rounded-full bg-gradient-risk"
                      style={{ width: `${claim.riskScore * 100}%` }}
                    />
                  </div>
                  <span className="text-lg font-semibold">
                    {(claim.riskScore * 100).toFixed(0)}%
                  </span>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium mb-2">Compliance Score</p>
                <div className="flex items-center space-x-3">
                  <div className="flex-1 bg-muted rounded-full h-3">
                    <div
                      className="h-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600"
                      style={{ width: `${mockAuditDetails.complianceScore}%` }}
                    />
                  </div>
                  <span className="text-lg font-semibold text-green-600">
                    {mockAuditDetails.complianceScore}%
                  </span>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium">Previous Audits</p>
                <p className="text-sm text-muted-foreground">
                  {mockAuditDetails.previousAudits} audits completed
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Anomalies */}
        {claim.anomalies.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-risk-medium" />
                Detected Anomalies ({claim.anomalies.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {claim.anomalies.map((anomaly, index) => (
                  <div key={index} className="flex items-start gap-2 p-3 bg-destructive/5 rounded-lg border border-destructive/20">
                    <AlertTriangle className="h-4 w-4 text-risk-medium mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{anomaly}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Coding Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Procedure Codes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {mockAuditDetails.codes.map((code, index) => (
                  <Badge key={index} variant="secondary">
                    {code}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Diagnosis Codes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {mockAuditDetails.diagnosis.map((code, index) => (
                  <Badge key={index} variant="outline">
                    {code}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Audit Information */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Audit Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm font-medium">Audited By</p>
                <p className="text-sm text-muted-foreground">{mockAuditDetails.auditedBy}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Audit Date</p>
                <p className="text-sm text-muted-foreground">{mockAuditDetails.auditDate}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Status</p>
                <Badge variant="secondary">{mockAuditDetails.auditStatus}</Badge>
              </div>
            </div>

            <Separator />

            <div>
              <p className="text-sm font-medium mb-3">Audit Recommendations</p>
              <div className="space-y-2">
                {mockAuditDetails.recommendations.map((rec, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{rec}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Educational Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Educational Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {educationalRecommendations.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg border bg-card hover:bg-accent/5 transition-colors">
                    <div className="p-2 rounded-md bg-primary/10">
                      <IconComponent className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div>
                        <h4 className="text-sm font-medium">{item.title}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant={item.relevance === "high" ? "default" : "secondary"} className="text-xs">
                            {item.relevance} relevance
                          </Badge>
                          <span className="text-xs text-muted-foreground">{item.type}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {item.duration}
                        </div>
                        <button className="text-xs text-primary hover:underline font-medium">
                          Start Learning
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};
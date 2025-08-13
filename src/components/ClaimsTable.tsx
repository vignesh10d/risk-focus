import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RiskBadge } from "./RiskBadge";
import { Button } from "@/components/ui/button";
import { ClaimDetailModal } from "./ClaimDetailModal";
import { Eye, FileText, AlertTriangle } from "lucide-react";
import { useState } from "react";

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

const mockClaims: Claim[] = [
  {
    id: "CLM-2024-001",
    patientId: "PT-5847",
    serviceType: "inpatient",
    amount: 45250,
    riskScore: 0.89,
    riskLevel: "high",
    anomalies: ["Unusual procedure combination", "Cost outlier"],
    date: "2024-01-15",
    provider: "Metro General Hospital",
  },
  {
    id: "CLM-2024-002",
    patientId: "PT-3421",
    serviceType: "specialty",
    amount: 12800,
    riskScore: 0.74,
    riskLevel: "medium",
    anomalies: ["Duplicate billing code"],
    date: "2024-01-14",
    provider: "Cardiology Associates",
  },
  {
    id: "CLM-2024-003",
    patientId: "PT-9876",
    serviceType: "physician",
    amount: 380,
    riskScore: 0.23,
    riskLevel: "low",
    anomalies: [],
    date: "2024-01-14",
    provider: "Primary Care Clinic",
  },
  {
    id: "CLM-2024-004",
    patientId: "PT-1234",
    serviceType: "outpatient",
    amount: 8500,
    riskScore: 0.82,
    riskLevel: "high",
    anomalies: ["Missing documentation", "Coding gap detected"],
    date: "2024-01-13",
    provider: "Surgical Center West",
  },
];

export const ClaimsTable = () => {
  const [selectedClaim, setSelectedClaim] = useState<Claim | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleViewClaim = (claim: Claim) => {
    setSelectedClaim(claim);
    setModalOpen(true);
  };

  return (
    <>
      <ClaimDetailModal 
        claim={selectedClaim}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    <div className="rounded-lg border bg-card shadow-soft">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead>Claim ID</TableHead>
            <TableHead>Patient</TableHead>
            <TableHead>Service Type</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Risk Score</TableHead>
            <TableHead>Risk Level</TableHead>
            <TableHead>Anomalies</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockClaims.map((claim) => (
            <TableRow key={claim.id} className="hover:bg-muted/30 transition-colors">
              <TableCell className="font-mono text-sm">{claim.id}</TableCell>
              <TableCell className="font-medium">{claim.patientId}</TableCell>
              <TableCell className="capitalize">{claim.serviceType}</TableCell>
              <TableCell className="font-medium">
                ${claim.amount.toLocaleString()}
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <div className="w-16 bg-muted rounded-full h-2">
                    <div
                      className="h-2 rounded-full bg-gradient-risk"
                      style={{ width: `${claim.riskScore * 100}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium">
                    {(claim.riskScore * 100).toFixed(0)}%
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <RiskBadge risk={claim.riskLevel} />
              </TableCell>
              <TableCell>
                {claim.anomalies.length > 0 ? (
                  <div className="flex items-center space-x-1">
                    <AlertTriangle className="h-4 w-4 text-risk-medium" />
                    <span className="text-sm">{claim.anomalies.length}</span>
                  </div>
                ) : (
                  <span className="text-muted-foreground text-sm">None</span>
                )}
              </TableCell>
              <TableCell className="text-muted-foreground">
                {new Date(claim.date).toLocaleDateString()}
              </TableCell>
              <TableCell>
                <div className="flex space-x-1">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => handleViewClaim(claim)}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <FileText className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
    </>
  );
};
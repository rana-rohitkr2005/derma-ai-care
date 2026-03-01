import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Stethoscope, Users, FileText, ClipboardList, Eye, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const mockCases = [
  { id: 1, patient: "John Doe", condition: "Melanocytic Nevi", confidence: 87, date: "2026-02-28", status: "pending" },
  { id: 2, patient: "Alice Smith", condition: "Actinic Keratosis", confidence: 91, date: "2026-02-25", status: "pending" },
  { id: 3, patient: "Bob Johnson", condition: "Dermatofibroma", confidence: 72, date: "2026-02-20", status: "reviewed" },
];

const DoctorDashboard = () => {
  const [selectedCase, setSelectedCase] = useState<typeof mockCases[0] | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="font-heading text-3xl font-bold text-foreground">Doctor Panel</h1>
            <p className="text-muted-foreground text-sm mt-1">Welcome, Dr. Sarah Wilson — Dermatology</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { icon: Users, label: "Total Patients", value: "24", color: "text-primary" },
              { icon: ClipboardList, label: "Pending Cases", value: "2", color: "text-warning" },
              { icon: FileText, label: "Reviewed", value: "18", color: "text-info" },
              { icon: Stethoscope, label: "Prescriptions", value: "15", color: "text-success" },
            ].map((s) => (
              <Card key={s.label} className="border-border">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                    <s.icon className={`w-5 h-5 ${s.color}`} />
                  </div>
                  <div>
                    <div className="font-heading text-2xl font-bold text-foreground">{s.value}</div>
                    <div className="text-xs text-muted-foreground">{s.label}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="font-heading text-lg">Patient Cases</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockCases.map((c) => (
                  <div key={c.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-lg bg-muted/50">
                    <div>
                      <h3 className="font-heading font-semibold text-foreground">{c.patient}</h3>
                      <p className="text-sm text-muted-foreground">{c.condition} · {c.confidence}% confidence · {c.date}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary" className={c.status === "pending" ? "bg-warning/10 text-warning border-0" : "bg-success/10 text-success border-0"}>
                        {c.status === "pending" ? "Pending" : "Reviewed"}
                      </Badge>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" onClick={() => setSelectedCase(c)}>
                            <Eye className="w-4 h-4 mr-1" /> Review
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-lg">
                          <DialogHeader>
                            <DialogTitle className="font-heading">Review Case — {c.patient}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="bg-muted p-4 rounded-lg">
                              <p className="text-sm"><strong>Condition:</strong> {c.condition}</p>
                              <p className="text-sm"><strong>Confidence:</strong> {c.confidence}%</p>
                              <p className="text-sm"><strong>Date:</strong> {c.date}</p>
                            </div>
                            <div className="space-y-2">
                              <Label>Prescribed Medicines</Label>
                              <Input placeholder="e.g., Hydrocortisone 1% cream" />
                            </div>
                            <div className="space-y-2">
                              <Label>Doctor Notes</Label>
                              <Textarea placeholder="Your professional assessment and instructions..." rows={4} />
                            </div>
                            <Button variant="hero" className="w-full">
                              <Send className="w-4 h-4 mr-1" /> Submit Prescription
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DoctorDashboard;

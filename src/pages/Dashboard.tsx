import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, FileText, Stethoscope, Bell, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const mockScans = [
  { id: 1, date: "2026-02-28", condition: "Melanocytic Nevi", confidence: 87, status: "reviewed", doctor: "Dr. Sarah Wilson" },
  { id: 2, date: "2026-02-15", condition: "Dermatofibroma", confidence: 72, status: "pending", doctor: null },
  { id: 3, date: "2026-01-20", condition: "Actinic Keratosis", confidence: 91, status: "completed", doctor: "Dr. James Lee" },
];

const mockNotifications = [
  { id: 1, message: "Dr. Sarah Wilson reviewed your scan from Feb 28", time: "2 hours ago", read: false },
  { id: 2, message: "New prescription available for Melanocytic Nevi case", time: "3 hours ago", read: false },
  { id: 3, message: "Your scan from Jan 20 has been completed", time: "5 days ago", read: true },
];

const statusConfig: Record<string, { label: string; className: string }> = {
  pending: { label: "Pending Review", className: "bg-warning/10 text-warning border-0" },
  reviewed: { label: "Reviewed", className: "bg-info/10 text-info border-0" },
  completed: { label: "Completed", className: "bg-success/10 text-success border-0" },
};

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
            <div>
              <h1 className="font-heading text-3xl font-bold text-foreground">Patient Dashboard</h1>
              <p className="text-muted-foreground text-sm mt-1">Welcome back, John Doe</p>
            </div>
            <Button variant="hero" asChild>
              <Link to="/scan"><Upload className="w-4 h-4 mr-1" /> New Scan</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { icon: FileText, label: "Total Scans", value: "3", color: "text-primary" },
              { icon: Clock, label: "Pending", value: "1", color: "text-warning" },
              { icon: Stethoscope, label: "Reviewed", value: "1", color: "text-info" },
              { icon: CheckCircle2, label: "Completed", value: "1", color: "text-success" },
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

          <Tabs defaultValue="scans">
            <TabsList className="mb-6">
              <TabsTrigger value="scans">Scan History</TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center gap-1.5">
                Notifications
                <span className="w-5 h-5 rounded-full bg-destructive text-destructive-foreground text-xs flex items-center justify-center">2</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="scans">
              <div className="space-y-4">
                {mockScans.map((scan) => (
                  <Card key={scan.id} className="border-border hover:shadow-md transition-shadow">
                    <CardContent className="p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                          <FileText className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-heading font-semibold text-foreground">{scan.condition}</h3>
                          <p className="text-sm text-muted-foreground">{scan.date} · Confidence: {scan.confidence}%</p>
                          {scan.doctor && <p className="text-xs text-muted-foreground mt-0.5">Reviewed by {scan.doctor}</p>}
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="secondary" className={statusConfig[scan.status].className}>
                          {statusConfig[scan.status].label}
                        </Badge>
                        <Button variant="outline" size="sm">View Details</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="notifications">
              <div className="space-y-3">
                {mockNotifications.map((n) => (
                  <Card key={n.id} className={`border-border ${!n.read ? "bg-accent/30" : ""}`}>
                    <CardContent className="p-4 flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${!n.read ? "bg-primary/10" : "bg-muted"}`}>
                        <Bell className={`w-4 h-4 ${!n.read ? "text-primary" : "text-muted-foreground"}`} />
                      </div>
                      <div>
                        <p className={`text-sm ${!n.read ? "text-foreground font-medium" : "text-muted-foreground"}`}>{n.message}</p>
                        <p className="text-xs text-muted-foreground mt-1">{n.time}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;

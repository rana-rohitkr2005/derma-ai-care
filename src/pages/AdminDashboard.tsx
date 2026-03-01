import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Stethoscope, FileText, ShieldCheck, CheckCircle2, XCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const mockUsers = [
  { id: 1, name: "John Doe", email: "john@email.com", role: "patient", status: "active" },
  { id: 2, name: "Alice Smith", email: "alice@email.com", role: "patient", status: "active" },
  { id: 3, name: "Bob Johnson", email: "bob@email.com", role: "patient", status: "inactive" },
];

const mockDoctors = [
  { id: 1, name: "Dr. Sarah Wilson", specialization: "Dermatology", license: "MED-2024-1234", verified: true },
  { id: 2, name: "Dr. James Lee", specialization: "General Medicine", license: "MED-2024-5678", verified: true },
  { id: 3, name: "Dr. Emily Chen", specialization: "Dermatology", license: "MED-2025-9012", verified: false },
];

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="font-heading text-3xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground text-sm mt-1">Manage users, doctors, and system reports</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { icon: Users, label: "Total Users", value: "156", color: "text-primary" },
              { icon: Stethoscope, label: "Doctors", value: "12", color: "text-info" },
              { icon: FileText, label: "Total Scans", value: "892", color: "text-success" },
              { icon: ShieldCheck, label: "Pending Approvals", value: "3", color: "text-warning" },
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

          <Tabs defaultValue="users">
            <TabsList className="mb-6">
              <TabsTrigger value="users">Users</TabsTrigger>
              <TabsTrigger value="doctors">Doctors</TabsTrigger>
            </TabsList>

            <TabsContent value="users">
              <Card className="border-border">
                <CardHeader><CardTitle className="font-heading text-lg">Registered Users</CardTitle></CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {mockUsers.map((u) => (
                      <div key={u.id} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                        <div>
                          <h4 className="font-semibold text-foreground">{u.name}</h4>
                          <p className="text-sm text-muted-foreground">{u.email}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant="secondary" className={u.status === "active" ? "bg-success/10 text-success border-0" : "bg-muted text-muted-foreground border-0"}>
                            {u.status}
                          </Badge>
                          <Button variant="outline" size="sm">Manage</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="doctors">
              <Card className="border-border">
                <CardHeader><CardTitle className="font-heading text-lg">Doctor Verification</CardTitle></CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {mockDoctors.map((d) => (
                      <div key={d.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-lg bg-muted/50">
                        <div>
                          <h4 className="font-semibold text-foreground">{d.name}</h4>
                          <p className="text-sm text-muted-foreground">{d.specialization} · License: {d.license}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          {d.verified ? (
                            <Badge variant="secondary" className="bg-success/10 text-success border-0">
                              <CheckCircle2 className="w-3 h-3 mr-1" /> Verified
                            </Badge>
                          ) : (
                            <div className="flex gap-2">
                              <Button variant="hero" size="sm"><CheckCircle2 className="w-4 h-4 mr-1" /> Approve</Button>
                              <Button variant="outline" size="sm"><XCircle className="w-4 h-4 mr-1" /> Reject</Button>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminDashboard;

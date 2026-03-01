import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Upload, Brain, Stethoscope, History, Bell, ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.png";

const features = [
  { icon: Upload, title: "Upload Image", desc: "Capture or upload a photo of the affected skin area from your device." },
  { icon: Brain, title: "AI Analysis", desc: "Our CNN model trained on HAM10000 dataset analyzes the image instantly." },
  { icon: CheckCircle2, title: "Get Results", desc: "Receive prediction with confidence score, probable causes, and suggestions." },
  { icon: Stethoscope, title: "Doctor Review", desc: "Request verified dermatologists to review your case and prescribe medication." },
  { icon: History, title: "Scan History", desc: "Track all your previous scans and monitor skin health over time." },
  { icon: Bell, title: "Notifications", desc: "Get notified when a doctor reviews your case and provides a prescription." },
];

const stats = [
  { value: "95%+", label: "Detection Accuracy" },
  { value: "10K+", label: "Training Images" },
  { value: "7+", label: "Conditions Detected" },
  { value: "<5s", label: "Analysis Time" },
];

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground text-sm font-medium px-4 py-1.5 rounded-full mb-6 animate-fade-in">
              <Shield className="w-4 h-4" />
              AI-Powered Dermatology Assistant
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Detect Skin Diseases{" "}
              <span className="text-gradient">Instantly</span> with AI
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Upload a skin image and get AI-assisted insights including possible conditions, root causes, and treatment suggestions — with optional doctor consultation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="lg" asChild>
                <Link to="/scan" className="gap-2">
                  Start Free Scan <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/register">Create Account</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-heading text-3xl md:text-4xl font-bold text-primary">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From image upload to doctor prescription — a seamless healthcare workflow powered by AI.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <Card key={f.title} className="group gradient-card border-border hover:shadow-glow transition-all duration-300 animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:gradient-primary transition-all duration-300">
                    <f.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Built for Everyone</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Role-based access for patients, doctors, and administrators.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Patient", desc: "Upload skin images, view AI predictions, request doctor consultations, and track your scan history.", color: "primary" },
              { title: "Doctor", desc: "Review patient cases, verify AI predictions, prescribe medication, and manage your consultation queue.", color: "info" },
              { title: "Admin", desc: "Manage users, verify doctor credentials, oversee reports, and monitor system analytics.", color: "warning" },
            ].map((role) => (
              <Card key={role.title} className="bg-card border-border hover:shadow-glow transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-${role.color}/10 flex items-center justify-center mx-auto mb-4`}>
                    <Stethoscope className={`w-8 h-8 text-${role.color}`} />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{role.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{role.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="gradient-hero rounded-2xl p-10 md:p-16 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Scan Your Skin?
            </h2>
            <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8">
              Get instant AI-powered insights about your skin condition. No appointment needed.
            </p>
            <Button variant="hero-outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/scan">Start Scanning Now</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;

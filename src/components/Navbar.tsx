import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 gradient-glass border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
            <Shield className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-heading text-xl font-bold text-foreground">
            Derma<span className="text-primary">Scan</span> AI
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className={`text-sm font-medium transition-colors ${isActive("/") ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
            Home
          </Link>
          <Link to="/dashboard" className={`text-sm font-medium transition-colors ${isActive("/dashboard") ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
            Dashboard
          </Link>
          <Link to="/scan" className={`text-sm font-medium transition-colors ${isActive("/scan") ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
            New Scan
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" asChild>
            <Link to="/login">Sign In</Link>
          </Button>
          <Button variant="hero" asChild>
            <Link to="/register">Get Started</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-card border-b border-border px-4 py-4 space-y-3 animate-fade-in">
          <Link to="/" className="block text-sm font-medium text-foreground" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/dashboard" className="block text-sm font-medium text-muted-foreground" onClick={() => setIsOpen(false)}>Dashboard</Link>
          <Link to="/scan" className="block text-sm font-medium text-muted-foreground" onClick={() => setIsOpen(false)}>New Scan</Link>
          <div className="flex gap-2 pt-2">
            <Button variant="ghost" size="sm" asChild><Link to="/login">Sign In</Link></Button>
            <Button variant="hero" size="sm" asChild><Link to="/register">Get Started</Link></Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

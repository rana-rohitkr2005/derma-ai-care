import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-secondary border-t border-border py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <Shield className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-heading text-lg font-bold text-foreground">DermaScan AI</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            AI-powered skin disease detection for early diagnosis and better healthcare outcomes.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-foreground mb-3">Product</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <Link to="/scan" className="block hover:text-primary transition-colors">Skin Scan</Link>
            <Link to="/dashboard" className="block hover:text-primary transition-colors">Dashboard</Link>
            <span className="block">Doctor Consultation</span>
          </div>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-foreground mb-3">Resources</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <span className="block">Documentation</span>
            <span className="block">Research Papers</span>
            <span className="block">FAQs</span>
          </div>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-foreground mb-3">Legal</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <span className="block">Privacy Policy</span>
            <span className="block">Terms of Service</span>
            <span className="block">Medical Disclaimer</span>
          </div>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">
          ⚠️ <strong>Disclaimer:</strong> DermaScan AI predictions are not a substitute for professional medical diagnosis. Always consult a qualified dermatologist.
        </p>
        <p className="text-xs text-muted-foreground mt-2">© 2026 DermaScan AI. BSc Computer Science Final Year Project.</p>
      </div>
    </div>
  </footer>
);

export default Footer;

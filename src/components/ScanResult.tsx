import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Stethoscope, RefreshCcw, AlertTriangle, Lightbulb, Bug, Brain } from "lucide-react";
import { Link } from "react-router-dom";

interface ScanResultProps {
  image: string;
  onNewScan: () => void;
}

const mockResult = {
  condition: "Melanocytic Nevi (Mole)",
  confidence: 87,
  severity: "Low",
  causes: [
    "Genetic predisposition",
    "Sun/UV exposure over time",
    "Hormonal changes (puberty, pregnancy)",
    "Fair skin type",
  ],
  suggestions: [
    "Monitor for changes in size, shape, or color (ABCDE rule)",
    "Use broad-spectrum sunscreen (SPF 30+) daily",
    "Avoid excessive sun exposure and tanning beds",
    "Schedule annual skin checks with a dermatologist",
    "Take photos to track any changes over time",
  ],
  relatedConditions: [
    { name: "Dermatofibroma", confidence: 6 },
    { name: "Melanoma", confidence: 4 },
    { name: "Basal Cell Carcinoma", confidence: 3 },
  ],
};

const ScanResult = ({ image, onNewScan }: ScanResultProps) => {
  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-border">
          <CardContent className="p-4">
            <img src={image} alt="Scanned skin" className="w-full rounded-lg object-contain max-h-72" />
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader className="pb-3">
            <CardTitle className="font-heading text-lg flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary" /> AI Prediction
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="font-heading font-semibold text-foreground">{mockResult.condition}</span>
                <Badge variant="secondary" className="bg-success/10 text-success border-0">{mockResult.severity} Risk</Badge>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <Progress value={mockResult.confidence} className="flex-1 h-3" />
                <span className="font-heading text-lg font-bold text-primary">{mockResult.confidence}%</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Confidence Score</p>
            </div>
            <div className="pt-3 border-t border-border">
              <p className="text-xs font-medium text-muted-foreground mb-2">Other Possibilities</p>
              {mockResult.relatedConditions.map((c) => (
                <div key={c.name} className="flex items-center justify-between py-1">
                  <span className="text-sm text-foreground">{c.name}</span>
                  <span className="text-xs text-muted-foreground">{c.confidence}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-border">
          <CardHeader className="pb-3">
            <CardTitle className="font-heading text-lg flex items-center gap-2">
              <Bug className="w-5 h-5 text-warning" /> Probable Causes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {mockResult.causes.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <AlertTriangle className="w-4 h-4 text-warning mt-0.5 shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader className="pb-3">
            <CardTitle className="font-heading text-lg flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-info" /> Suggested Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {mockResult.suggestions.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Lightbulb className="w-4 h-4 text-info mt-0.5 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button variant="outline" onClick={onNewScan}>
          <RefreshCcw className="w-4 h-4 mr-1" /> New Scan
        </Button>
        <Button variant="hero" asChild>
          <Link to="/dashboard">
            <Stethoscope className="w-4 h-4 mr-1" /> Request Doctor Review
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ScanResult;

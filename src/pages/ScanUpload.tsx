import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, Camera, Image, ArrowRight, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScanResult from "@/components/ScanResult";

const ScanUpload = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setSelectedImage(reader.result as string);
      reader.readAsDataURL(file);
      setShowResult(false);
    }
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    // Simulated AI analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResult(true);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">Skin Scan Analysis</h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Upload or capture a clear photo of the affected skin area for AI-powered analysis.
            </p>
          </div>

          {!showResult ? (
            <Card className="border-border shadow-md max-w-2xl mx-auto">
              <CardContent className="p-8">
                {!selectedImage ? (
                  <div
                    className="border-2 border-dashed border-border rounded-xl p-12 text-center cursor-pointer hover:border-primary hover:bg-accent/50 transition-all duration-300"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-4">
                      <Upload className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Upload Skin Image</h3>
                    <p className="text-sm text-muted-foreground mb-4">Drag & drop or click to browse. Supports JPG, PNG.</p>
                    <div className="flex items-center justify-center gap-3">
                      <Button variant="outline" size="sm" type="button">
                        <Image className="w-4 h-4 mr-1" /> Gallery
                      </Button>
                      <Button variant="outline" size="sm" type="button">
                        <Camera className="w-4 h-4 mr-1" /> Camera
                      </Button>
                    </div>
                    <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="relative rounded-xl overflow-hidden bg-muted">
                      <img src={selectedImage} alt="Uploaded skin" className="w-full max-h-96 object-contain" />
                      {isAnalyzing && (
                        <div className="absolute inset-0 bg-foreground/20 flex items-center justify-center">
                          <div className="bg-card rounded-xl p-6 text-center shadow-lg">
                            <Loader2 className="w-10 h-10 text-primary animate-spin mx-auto mb-3" />
                            <p className="font-heading font-semibold text-foreground">Analyzing Image...</p>
                            <p className="text-sm text-muted-foreground">AI model processing</p>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" onClick={() => { setSelectedImage(null); setShowResult(false); }} disabled={isAnalyzing}>
                        Change Image
                      </Button>
                      <Button variant="hero" onClick={handleAnalyze} disabled={isAnalyzing} className="flex-1">
                        {isAnalyzing ? <><Loader2 className="w-4 h-4 animate-spin" /> Analyzing...</> : <>Analyze Skin <ArrowRight className="w-4 h-4" /></>}
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ) : (
            <ScanResult image={selectedImage!} onNewScan={() => { setSelectedImage(null); setShowResult(false); }} />
          )}

          <p className="text-xs text-muted-foreground text-center mt-8 max-w-lg mx-auto">
            ⚠️ This AI analysis is for informational purposes only and does not constitute medical advice. Consult a qualified dermatologist for diagnosis.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ScanUpload;

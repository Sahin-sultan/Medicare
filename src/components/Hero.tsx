import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-pharmacy.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-subtle overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your Trusted{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Healthcare Partner
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Get expert analysis of your medical reports and connect with healthcare professionals.
              Your trusted partner for understanding your health better.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="lg" className="group">
                Get Started
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Button>
            </div>

            {/* Search Bar */}
            <div className="relative pt-4">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Search for doctors, specialties, or health topics..."
                className="pl-12 h-14 text-base shadow-md"
              />
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-6 border-t border-border">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Expert Analysis</span>
              </div>

            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
            <img
              src={heroImage}
              alt="Modern healthcare facility with medical professionals"
              className="relative rounded-3xl shadow-elevated object-cover w-full h-[400px] md:h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

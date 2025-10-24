import { useState, useEffect } from "react";
import { ShoppingCart, User, Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/context/CartContext";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { itemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Adjust this value based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 border-b border-border ${
        scrolled ? 'bg-zinc-900/95 shadow-md' : 'bg-background'
      }`}>
      <div className="max-w-[2000px] mx-auto">
        <div className="flex items-center justify-between h-16 px-2">
          {/* Logo */}
          <div className="flex items-center">
            <button onClick={() => scrollToSection('home')} className="flex items-center gap-2">
              <div className={`p-2 rounded-lg ${
                scrolled 
                  ? 'bg-white'
                  : 'bg-gradient-to-r from-primary to-accent'
              }`}>
                <div className={`w-6 h-6 rounded-sm ${
                  scrolled 
                    ? 'bg-zinc-900'
                    : 'bg-primary-foreground'
                }`}></div>
              </div>
              <span className={`text-xl font-bold ${
                scrolled
                  ? 'text-white'
                  : 'bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'
              }`}>
                MediCare
              </span>
            </button>
          </div>

          {/* Desktop Search and Navigation */}
          <div className="hidden md:flex flex-1 items-center justify-end gap-4 px-4">
            {/* Search Bar */}
            <div className="relative w-56">
              <Search className={`absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 ${
                scrolled ? 'text-zinc-400' : 'text-muted-foreground'
              }`} />
              <Input
                placeholder="Search medicines..."
                className={`pl-8 h-8 ${
                  scrolled 
                    ? 'bg-zinc-800 text-white placeholder:text-zinc-400 border-zinc-700'
                    : 'bg-muted/50'
                }`}
              />
            </div>

            <div className="flex items-center gap-6 pl-4 border-l border-border">
              <button 
                onClick={() => scrollToSection('home')}
                className={`text-sm font-medium transition-colors ${
                  scrolled ? 'text-white hover:text-emerald-400' : 'hover:text-emerald-600'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('doctors')}
                className={`text-sm font-medium transition-colors ${
                  scrolled ? 'text-white hover:text-emerald-400' : 'hover:text-emerald-600'
                }`}
              >
                Doctors
              </button>
              <button 
                onClick={() => scrollToSection('medicines')}
                className={`text-sm font-medium transition-colors ${
                  scrolled ? 'text-white hover:text-emerald-400' : 'hover:text-emerald-600'
                }`}
              >
                Medicines
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${scrolled ? 'text-white' : 'text-foreground'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${scrolled ? 'text-white' : 'text-foreground'}`} />
            )}
          </button>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const reportTypes = ['blood', 'sugar', 'thyroid', 'other'];
                  const type = prompt(
                    'Select report type (blood, sugar, thyroid, other):'
                  )?.toLowerCase();
                  
                  if (type && reportTypes.includes(type)) {
                    alert(`Upload your ${type} report for AI analysis. We'll provide:\n- Detailed summary\n- Key findings\n- Professional recommendations`);
                  }
                }}
                className={`hidden md:flex items-center gap-1 h-8 px-3 ${
                  scrolled ? 'border-zinc-700 text-white hover:bg-emerald-500 hover:text-white' : ''
                }`}
              >
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Upload
              </Button>

              <div className="flex items-center gap-2 pl-2 border-l border-border">
                <Link to="/sign-in">
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className={`h-8 w-8 ${scrolled ? 'text-white hover:text-emerald-400' : 'hover:text-emerald-600'}`}
                  >
                    <User className="h-4 w-4" />
                  </Button>
                </Link>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className={`h-8 w-8 relative ${scrolled ? 'text-white hover:text-emerald-400' : 'hover:text-emerald-600'}`}
                  onClick={() => alert('Cart feature coming soon!')}
                >
                  <ShoppingCart className="h-4 w-4" />
                  {itemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-emerald-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                      {itemCount}
                    </span>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden py-4 space-y-4 border-t ${
            scrolled ? 'border-zinc-700' : 'border-border'
          }`}>
            <Input
              placeholder="Search medicines..."
              className={`w-full ${
                scrolled 
                  ? 'bg-zinc-800 text-white placeholder:text-zinc-400 border-zinc-700'
                  : ''
              }`}
            />
            <div className="flex flex-col gap-3">
              <button 
                onClick={() => scrollToSection('home')}
                className={`text-sm font-medium transition-colors py-2 text-left w-full ${
                  scrolled ? 'text-white hover:text-emerald-400' : 'hover:text-emerald-600'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('medicines')}
                className={`text-sm font-medium transition-colors py-2 text-left w-full ${
                  scrolled ? 'text-white hover:text-emerald-400' : 'hover:text-emerald-600'
                }`}
              >
                Medicines
              </button>
              <button 
                onClick={() => scrollToSection('doctors')}
                className={`text-sm font-medium transition-colors py-2 text-left w-full ${
                  scrolled ? 'text-white hover:text-emerald-400' : 'hover:text-emerald-600'
                }`}
              >
                Doctors
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

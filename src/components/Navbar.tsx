
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Carrière", href: "/carriere" },
    { name: "Solutions", href: "/solutions" },
    { name: "Assurance Emprunteur", href: "/assurance-emprunteur" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "#faq" },
  ];
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleFAQClick = (e: React.MouseEvent) => {
    if (location.pathname !== '/') {
      window.location.href = '/#faq';
      return;
    }
    e.preventDefault();
    const faqSection = document.getElementById('faq');
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-french-navy font-semibold text-xl font-['Playfair_Display']">
              AG Stratégie
              <span className="text-french-gold">Patrimoine</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              item.name === "FAQ" ? (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleFAQClick}
                  className={cn(
                    "nav-link",
                    "text-french-gray hover:text-french-navy"
                  )}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "nav-link",
                    location.pathname === item.href ? "active text-french-navy" : "text-french-gray hover:text-french-navy"
                  )}
                >
                  {item.name}
                </Link>
              )
            ))}

            <Button className="bg-french-navy text-white hover:bg-french-navy/90">
              <a href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0SuK203EhNMUBR8RiWozh7HeUCKavBAz_zWUt_BBPJwXXmoA3CfZBJH3E0oy3gHjZCQO_0a1aH?gv=true" target="_blank" rel="noopener noreferrer">
                Contact
              </a>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu} size="icon">
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t py-2 animate-fade-in">
          <div className="container mx-auto px-4 space-y-2">
            {navigation.map((item) => (
              item.name === "FAQ" ? (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleFAQClick}
                  className={cn(
                    "block py-2 px-4 rounded-md",
                    "text-french-gray hover:bg-french-cream hover:text-french-navy"
                  )}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "block py-2 px-4 rounded-md",
                    location.pathname === item.href 
                      ? "bg-french-cream text-french-navy font-medium" 
                      : "text-french-gray hover:bg-french-cream hover:text-french-navy"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
            <div className="pt-2">
              <Button className="w-full bg-french-navy text-white hover:bg-french-navy/90">
                <a href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0SuK203EhNMUBR8RiWozh7HeUCKavBAz_zWUt_BBPJwXXmoA3CfZBJH3E0oy3gHjZCQO_0a1aH?gv=true" target="_blank" rel="noopener noreferrer">
                  Contact
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

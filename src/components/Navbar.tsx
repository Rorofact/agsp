
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const location = useLocation();
  
  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
  ];
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
            ))}
            
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="border-french-navy text-french-navy hover:bg-french-navy/5 flex items-center gap-2">
                  <LogIn size={18} />
                  Se connecter
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>{isLogin ? "Se connecter" : "S'inscrire"}</DialogTitle>
                  <DialogDescription>
                    {isLogin 
                      ? "Connectez-vous à votre espace client personnel" 
                      : "Créez un compte pour accéder à tous nos services"
                    }
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="votre@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Mot de passe</Label>
                    <Input id="password" type="password" />
                  </div>
                  
                  {!isLogin && (
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
                      <Input id="confirmPassword" type="password" />
                    </div>
                  )}
                  
                  <Button type="submit" className="w-full bg-french-navy hover:bg-french-navy/90">
                    {isLogin ? "Se connecter" : "S'inscrire"}
                  </Button>
                  
                  <div className="text-center pt-2">
                    <button 
                      type="button" 
                      onClick={() => setIsLogin(!isLogin)} 
                      className="text-sm text-french-navy hover:underline"
                    >
                      {isLogin 
                        ? "Pas encore de compte ? S'inscrire" 
                        : "Déjà un compte ? Se connecter"
                      }
                    </button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Button className="bg-french-navy text-white hover:bg-french-navy/90">
              <Link to="/contact">Contact</Link>
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
            ))}
            <div className="pt-2 space-y-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="w-full border-french-navy text-french-navy hover:bg-french-navy/5 flex items-center justify-center gap-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <LogIn size={18} />
                    Se connecter
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>{isLogin ? "Se connecter" : "S'inscrire"}</DialogTitle>
                    <DialogDescription>
                      {isLogin 
                        ? "Connectez-vous à votre espace client personnel" 
                        : "Créez un compte pour accéder à tous nos services"
                      }
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="mobile-email">Email</Label>
                      <Input id="mobile-email" type="email" placeholder="votre@email.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mobile-password">Mot de passe</Label>
                      <Input id="mobile-password" type="password" />
                    </div>
                    
                    {!isLogin && (
                      <div className="space-y-2">
                        <Label htmlFor="mobile-confirmPassword">Confirmer le mot de passe</Label>
                        <Input id="mobile-confirmPassword" type="password" />
                      </div>
                    )}
                    
                    <Button type="submit" className="w-full bg-french-navy hover:bg-french-navy/90">
                      {isLogin ? "Se connecter" : "S'inscrire"}
                    </Button>
                    
                    <div className="text-center pt-2">
                      <button 
                        type="button" 
                        onClick={() => setIsLogin(!isLogin)} 
                        className="text-sm text-french-navy hover:underline"
                      >
                        {isLogin 
                          ? "Pas encore de compte ? S'inscrire" 
                          : "Déjà un compte ? Se connecter"
                        }
                      </button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              
              <Button className="w-full bg-french-navy text-white hover:bg-french-navy/90">
                <Link to="/contact">Contact</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

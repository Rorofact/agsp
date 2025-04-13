
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-french-navy text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="font-semibold text-xl font-['Playfair_Display']">
                AG Stratégie
                <span className="text-french-gold">Patrimoine</span>
              </span>
            </Link>
            <p className="text-sm text-gray-300 mb-6">
              Accompagnement personnalisé pour la gestion et l'optimisation de votre patrimoine.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-french-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-french-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-french-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="col-span-1">
            <h3 className="font-medium text-french-gold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/carriere" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Carrière
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/assurance-emprunteur" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Assurance Emprunteur
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div className="col-span-1">
            <h3 className="font-medium text-french-gold mb-4">Informations</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Conditions générales
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Livraisons et retours
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="col-span-1">
            <h3 className="font-medium text-french-gold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 text-french-gold" />
                <span className="text-sm text-gray-300">
                  123 Avenue des Champs-Élysées<br />75008 Paris, France
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-french-gold" />
                <span className="text-sm text-gray-300">+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-french-gold" />
                <span className="text-sm text-gray-300">contact@elegancefrancaise.fr</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6">
          <p className="text-center text-xs text-gray-400">
            © {new Date().getFullYear()} AG Stratégie Patrimoine. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

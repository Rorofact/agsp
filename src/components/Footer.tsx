
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-french-navy text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <a 
                href="https://www.linkedin.com/in/alice-goyec-b004109a/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-french-gold transition-colors"
              >
                <Linkedin size={20} />
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
          
          {/* Contact */}
          <div className="col-span-1">
            <h3 className="font-medium text-french-gold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 text-french-gold" />
                <span className="text-sm text-gray-300">
                  133 rue du Ranelagh<br />75016 Paris, France
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-french-gold" />
                <span className="text-sm text-gray-300">07 82 25 96 07</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-french-gold" />
                <span className="text-sm text-gray-300">ag.strategiepatrimoine@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6">
          <p className="text-center text-xs text-gray-400">
            © {new Date().getFullYear()} AG Stratégie Patrimoine. Tous droits réservés.
          </p>
        </div>
        
        <div className="border-t border-gray-700 mt-6 pt-6">
          <div className="text-xs text-gray-400 space-y-2">
            <h4 className="font-medium text-french-gold mb-2">Mentions Légales</h4>
            <p>
              Alice Goyec, immatriculée au RSAC DE PARIS : 940 335 532. Courtier en assurance, Conseil en Investissements Financiers et Intermédiaires en Opération de banque et service de paiement N°ORIAS 25005313 www.orias.fr CIF adhérent à la CNCEF sous le numéro 25/859773 (www.anacofi.asso.fr) Carte de Transaction sur immeubles et fonds de commerce sans détention de fonds N° CPI délivrée par la CCI de l'hérault.
            </p>
            <p>
              Conformément aux articles L.616-1 et R.616-1 du code de la consommation, nous proposons un dispositif de médiation de la consommation. L'entité de médiation retenue est : CNPM - MEDIATION DE LA CONSOMMATION. En cas de litige, vous pouvez déposer votre réclamation sur son site : https://cnpm-mediation-consommation.eu ou par voie postale en écrivant à CNPM - MEDIATION - CONSOMMATION - 27 avenue de la libération - 42400 Saint-Chamond
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

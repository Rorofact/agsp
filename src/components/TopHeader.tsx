
import { Mail, Phone, Clock } from "lucide-react";

const TopHeader = () => {
  return (
    <div className="bg-french-navy text-white py-2 px-4 text-sm">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-6">
        <div className="flex items-center gap-2">
          <Mail size={16} />
          <span>ag.strategiepatrimoine@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone size={16} />
          <span>07 82 25 96 07</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={16} />
          <span>Lundi - Vendredi : 9h - 19h</span>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;

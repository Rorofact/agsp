
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center py-12">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-french-navy mb-4">404</h1>
        <h2 className="text-2xl font-medium text-french-gray mb-6">
          Page Non Trouvée
        </h2>
        <p className="text-french-gray max-w-md mx-auto mb-8">
          La page que vous recherchez n'existe pas ou a été déplacée. Veuillez vérifier l'URL ou retourner à la page d'accueil.
        </p>
        <Button asChild className="bg-french-navy hover:bg-french-navy/90">
          <Link to="/">Retourner à l'Accueil</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;

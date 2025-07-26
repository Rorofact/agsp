
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar } from 'lucide-react';

interface SolutionDetailProps {
  title: string;
  description: string;
  keyPoints: string[];
  benefits: string[];
  icon: React.ReactNode;
  category: string;
}

const SolutionDetailTemplate: React.FC<SolutionDetailProps> = ({
  title,
  description,
  keyPoints,
  benefits,
  icon,
  category
}) => {
  return (
    <div className="py-12 px-4">
      <div className="container mx-auto">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/solutions" className="flex items-center text-french-navy hover:text-french-gold transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span>Retour aux solutions</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-french-cream rounded-full p-3">
                {icon}
              </div>
              <div>
                <div className="text-sm text-french-gold font-medium mb-1">{category}</div>
                <h1 className="text-3xl font-bold text-french-navy">{title}</h1>
              </div>
            </div>

            <div className="prose max-w-none mb-8">
              <p className="text-lg text-french-gray mb-6">{description}</p>
              
              <h2 className="text-xl font-semibold text-french-navy mb-4">Points clés</h2>
              <ul className="space-y-2 mb-8">
                {keyPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-french-gold mr-2">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-xl font-semibold text-french-navy mb-4">Avantages</h2>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-french-gold mr-2">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-french-cream rounded-lg p-6 sticky top-24">
              <h3 className="text-xl font-semibold text-french-navy mb-4">Intéressé par cette solution?</h3>
              <p className="text-french-gray mb-6">
                Nos conseillers sont à votre disposition pour répondre à vos questions et vous accompagner dans votre projet.
              </p>
              <div className="space-y-4">
                <a href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0SuK203EhNMUBR8RiWozh7HeUCKavBAz_zWUt_BBPJwXXmoA3CfZBJH3E0oy3gHjZCQO_0a1aH?gv=true" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-french-gold hover:bg-french-gold/90 flex items-center justify-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    Prendre Rendez-vous
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionDetailTemplate;

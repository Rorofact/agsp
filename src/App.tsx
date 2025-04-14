
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Appointment from "./pages/Appointment";
import NotFound from "./pages/NotFound";
import Chatbox from "./components/Chatbox";
import Carriere from "./pages/Carriere";
import Solutions from "./pages/Solutions";
import AssuranceEmprunteur from "./pages/AssuranceEmprunteur";
import Contact from "./pages/Contact";

// Solution detail pages
import InvestissementLocatif from "./pages/solutions/InvestissementLocatif";
import SCPI from "./pages/solutions/SCPI";
import LoiPinel from "./pages/solutions/LoiPinel";
import AssuranceVie from "./pages/solutions/AssuranceVie";
import PEA from "./pages/solutions/PEA";
import ComptesTitres from "./pages/solutions/ComptesTitres";
import FondsISR from "./pages/solutions/FondsISR";
import EnergiesRenouvelables from "./pages/solutions/EnergiesRenouvelables";
import CreationEntreprise from "./pages/solutions/CreationEntreprise";
import RachatEntreprise from "./pages/solutions/RachatEntreprise";
import OrMetauxPrecieux from "./pages/solutions/OrMetauxPrecieux";
import ForetsTerresAgricoles from "./pages/solutions/ForetsTerresAgricoles";
import ArtCollection from "./pages/solutions/ArtCollection";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/rendez-vous" element={<Appointment />} />
            <Route path="/carriere" element={<Carriere />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/assurance-emprunteur" element={<AssuranceEmprunteur />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Solution detail pages */}
            <Route path="/solutions/investissement-locatif" element={<InvestissementLocatif />} />
            <Route path="/solutions/scpi" element={<SCPI />} />
            <Route path="/solutions/loi-pinel" element={<LoiPinel />} />
            <Route path="/solutions/assurance-vie" element={<AssuranceVie />} />
            <Route path="/solutions/pea" element={<PEA />} />
            <Route path="/solutions/comptes-titres" element={<ComptesTitres />} />
            <Route path="/solutions/fonds-isr" element={<FondsISR />} />
            <Route path="/solutions/energies-renouvelables" element={<EnergiesRenouvelables />} />
            <Route path="/solutions/creation-entreprise" element={<CreationEntreprise />} />
            <Route path="/solutions/rachat-entreprise" element={<RachatEntreprise />} />
            <Route path="/solutions/or-metaux-precieux" element={<OrMetauxPrecieux />} />
            <Route path="/solutions/forets-terres-agricoles" element={<ForetsTerresAgricoles />} />
            <Route path="/solutions/art-collection" element={<ArtCollection />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Chatbox />
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

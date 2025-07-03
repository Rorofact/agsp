
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
import NotFound from "./pages/NotFound";
import Carriere from "./pages/Carriere";
import Solutions from "./pages/Solutions";
import AssuranceEmprunteur from "./pages/AssuranceEmprunteur";
import ServiceDetail from "./pages/services/ServiceDetail";
import BlogArticle from "./pages/blog/BlogArticle";

// Solution detail pages
import InvestissementLocatif from "./pages/solutions/InvestissementLocatif";
import SCPI from "./pages/solutions/SCPI";
import ImmobilierDefiscalisant from "./pages/solutions/ImmobilierDefiscalisant";
import AssuranceVie from "./pages/solutions/AssuranceVie";
import PEA from "./pages/solutions/PEA";
import ComptesTitres from "./pages/solutions/ComptesTitres";
import FondsISR from "./pages/solutions/FondsISR";
import EnergiesRenouvelables from "./pages/solutions/EnergiesRenouvelables";
import ForetsTerresAgricoles from "./pages/solutions/ForetsTerresAgricoles";
import Vin from "./pages/solutions/Vin";
import PrivateEquity from "./pages/solutions/PrivateEquity";

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
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogArticle />} />
            <Route path="/about" element={<About />} />
            <Route path="/carriere" element={<Carriere />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/assurance-emprunteur" element={<AssuranceEmprunteur />} />
            
            {/* Solution detail pages */}
            <Route path="/solutions/investissement-locatif" element={<InvestissementLocatif />} />
            <Route path="/solutions/scpi" element={<SCPI />} />
            <Route path="/solutions/immobilier-defiscalisant" element={<ImmobilierDefiscalisant />} />
            <Route path="/solutions/assurance-vie" element={<AssuranceVie />} />
            <Route path="/solutions/pea" element={<PEA />} />
            <Route path="/solutions/comptes-titres" element={<ComptesTitres />} />
            <Route path="/solutions/fonds-isr" element={<FondsISR />} />
            <Route path="/solutions/energies-renouvelables" element={<EnergiesRenouvelables />} />
            <Route path="/solutions/forets-terres-agricoles" element={<ForetsTerresAgricoles />} />
            <Route path="/solutions/vin" element={<Vin />} />
            <Route path="/solutions/private-equity" element={<PrivateEquity />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

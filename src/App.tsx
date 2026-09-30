import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import FaqButton from "./components/FaqButton";
import ScrollToTop from "./components/ScrollToTop"; // <-- IMPORTAR AQUÍ
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import UnderConstruction from "./pages/UnderConstruction";
import ProjectDetail from "./pages/ProjectDetail";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

export default function App() {
  return (
    <Router>
      <ScrollToTop /> {/* <-- AGREGAR AQUÍ */}
      <div className="min-h-screen flex flex-col w-full overflow-x-hidden relative">
        <Navbar />
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/test" element={<UnderConstruction />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <WhatsAppButton />
        <FaqButton />
        <Footer />
      </div>
    </Router>
  );
}

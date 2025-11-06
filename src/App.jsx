import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';
import ScrollToTop from './components/ScrollToTop';
import { useEffect } from 'react';
import BackToTop from './components/BackToTop';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Membership from './pages/Membership';
import Wellness from './pages/Wellness';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/** Update favicon from env if provided */}
        {(() => { /* no-op wrapper */ })()}
        {(() => {
          const fav = import.meta.env.VITE_FAVICON_IMAGE_URL;
          useEffect(() => {
            if (!fav) return;
            const link = document.querySelector('link[rel="icon"]');
            if (link) link.setAttribute('href', fav);
          }, []);
          return null;
        })()}
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/wellness" element={<Wellness />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFAB />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;

import { useState, useEffect } from 'react';
import { Menu, X, Phone, CalendarDays } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Opiniones', href: '#opiniones' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Sucursales', href: '#sucursales' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-soft py-3' : 'bg-transparent py-5'}`}>
      <div className="container-custom mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
            VK
          </div>
          <span className={`font-bold text-xl tracking-tight transition-colors ${isScrolled ? 'text-brand-blue-dark' : 'text-white'}`}>
            Veterinaria<br/><span className="text-brand-green leading-none">Kokysaurios</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className={`text-sm font-medium transition-colors hover:text-brand-green ${isScrolled ? 'text-slate-600' : 'text-slate-100 hover:text-white'}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a href="https://wa.me/50379881835?text=Hola,%20me%20gustar%C3%ADa%20agendar%20una%20cita%20para%20mi%20mascota" target="_blank" rel="noopener noreferrer" className="btn-primary py-2 px-5 text-sm">
            <CalendarDays size={18} />
            WhatsApp
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`lg:hidden p-2 rounded-md ${isScrolled ? 'text-brand-blue-dark' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden absolute top-full left-0 w-full bg-white shadow-card py-4 flex flex-col items-center gap-4 border-t border-gray-100"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-slate-600 font-medium hover:text-brand-green py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="https://wa.me/50379881835?text=Hola,%20me%20gustar%C3%ADa%20agendar%20una%20cita%20para%20mi%20mascota" target="_blank" rel="noopener noreferrer" className="btn-primary w-11/12 mt-2">
            <CalendarDays size={18} />
            Agendar por WhatsApp
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;

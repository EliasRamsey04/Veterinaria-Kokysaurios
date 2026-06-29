import { CalendarDays, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1596272875886-f6313ed6c99f?q=80&w=2070&auto=format&fit=crop" 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-dark/90 to-brand-blue-dark/60"></div>
      </div>

      <div className="container-custom relative z-10 text-center md:text-left mt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand-green/20 text-brand-green-light border border-brand-green/30 text-sm font-semibold tracking-wider mb-6 text-white backdrop-blur-sm">
              EXCELENCIA VETERINARIA
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            El mejor cuidado para <br className="hidden md:block" />
            <span className="text-brand-green">quienes más amas</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-100 mb-10 leading-relaxed max-w-2xl"
          >
            En Veterinaria Kokysaurios brindamos atención médica veterinaria profesional con un equipo comprometido con la salud, bienestar y felicidad de cada mascota. Nuestro objetivo es ofrecer un servicio cercano, confiable y de alta calidad para que cada visita sea una experiencia positiva.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a href="https://wa.me/50379881835?text=Hola,%20me%20gustar%C3%ADa%20agendar%20una%20cita%20para%20mi%20mascota" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-4">
              <CalendarDays size={20} />
              Agendar por WhatsApp
            </a>
            <a href="tel:+50379881835" className="btn-outline text-lg px-8 py-4">
              <PhoneCall size={20} />
              Llamar ahora
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { MapPin, Phone, Clock, MessageCircle, Share2, Camera } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contacto" className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t-4 border-brand-green">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <a href="#inicio" className="flex items-center gap-2 mb-6 text-white">
              <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center font-bold text-xl">
                VK
              </div>
              <span className="font-bold text-xl tracking-tight">
                Veterinaria<br/><span className="text-brand-green leading-none">Kokysaurios</span>
              </span>
            </a>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              El mejor cuidado para quienes más amas. Comprometidos con la salud y felicidad de tu mascota.
            </p>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm items-start">
                <MapPin size={18} className="text-brand-green flex-shrink-0 mt-0.5" />
                <span>Calle Conchagua Oriente,<br/>Ciudad Merliot, El Salvador</span>
              </li>
              <li className="flex gap-3 text-sm items-start">
                <Phone size={18} className="text-brand-green flex-shrink-0 mt-0.5" />
                <a href="tel:+50379881835" className="hover:text-brand-green transition-colors mt-px">+503 7988-1835</a>
              </li>
              <li className="flex gap-3 text-sm items-start">
                <Clock size={18} className="text-brand-green flex-shrink-0 mt-0.5" />
                <div className="grid grid-cols-[40px_1fr] gap-x-2 gap-y-1">
                  <span>L-V:</span>
                  <span>8:00 AM - 5:00 PM</span>
                  <span>S:</span>
                  <span>8:00 AM - 2:00 PM</span>
                  <span>D:</span>
                  <span className="text-slate-500">Cerrado</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Links Col */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#inicio" className="text-sm hover:text-brand-green transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="text-sm hover:text-brand-green transition-colors">Servicios</a></li>
              <li><a href="#nosotros" className="text-sm hover:text-brand-green transition-colors">Sobre Nosotros</a></li>
              <li><a href="#opiniones" className="text-sm hover:text-brand-green transition-colors">Opiniones</a></li>
              <li><a href="#galeria" className="text-sm hover:text-brand-green transition-colors">Galería</a></li>
              <li><a href="#sucursales" className="text-sm hover:text-brand-green transition-colors">Sucursales</a></li>
            </ul>
          </div>

          {/* Info Col */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Emergencias</h4>
            <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700">
              <p className="text-sm mb-4">¿Tienes una emergencia médica con tu mascota?</p>
              <a href="tel:+50379881835" className="btn-primary w-full py-2 text-sm">
                Llamar Urgencia
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Veterinaria Kokysaurios. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

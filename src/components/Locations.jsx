import { MapPin, Clock, Phone, Map } from 'lucide-react';
import { motion } from 'framer-motion';

const Locations = () => {
  return (
    <section id="sucursales" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-green font-bold tracking-wider uppercase text-sm mb-2">Ubicación</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Visítanos en nuestra sucursal
          </h3>
          <p className="text-slate-600 text-lg">
            Estamos ubicados en una zona accesible y segura para que tú y tu mascota nos visiten con total tranquilidad.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center bg-brand-light p-4 md:p-8 rounded-[2.5rem] border border-slate-100 shadow-soft">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 md:p-12 rounded-[2rem] shadow-sm flex flex-col items-center text-center md:items-start md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-blue/10 text-brand-blue rounded-full font-semibold text-sm mb-6">
              <MapPin size={16} />
              Sucursal Principal
            </div>
            
            <h4 className="text-3xl font-bold text-slate-800 mb-8">Veterinaria Kokysaurios</h4>
            
            <div className="space-y-8 mb-10 w-full flex flex-col items-center md:items-start">
              <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
                <div className="w-10 h-10 rounded-full bg-brand-gray flex items-center justify-center flex-shrink-0 text-brand-green">
                  <MapPin size={20} />
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <p className="font-bold text-slate-800">Dirección</p>
                  <p className="text-slate-600">Calle Conchagua Oriente, Ciudad Merliot<br/>El Salvador</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
                <div className="w-10 h-10 rounded-full bg-brand-gray flex items-center justify-center flex-shrink-0 text-brand-blue">
                  <Clock size={20} />
                </div>
                <div className="flex flex-col items-center md:items-start w-full">
                  <p className="font-bold text-slate-800">Horario de Atención</p>
                  <div className="text-slate-600 mt-2 grid grid-cols-[auto_1fr] md:grid-cols-[140px_1fr] gap-x-4 gap-y-1 text-left w-full max-w-[280px]">
                    <span className="font-medium">L - V:</span>
                    <span className="text-slate-700">8:00 AM – 5:00 PM</span>
                    
                    <span className="font-medium">Sábado:</span>
                    <span className="text-slate-700">8:00 AM – 2:00 PM</span>
                    
                    <span className="font-medium">Domingo:</span>
                    <span className="text-rose-500 font-medium">Cerrado</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <a href="https://maps.app.goo.gl/example" target="_blank" rel="noopener noreferrer" className="btn-secondary flex-1 py-3 px-4">
                <Map size={18} />
                Google Maps
              </a>
              <a href="tel:+50379881835" className="btn-secondary flex-1 py-3 px-4 text-brand-blue border-slate-100 hover:border-brand-blue hover:text-brand-blue-dark">
                <Phone size={18} />
                Llamar
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[250px] md:h-full md:min-h-[400px] w-full rounded-[2rem] overflow-hidden shadow-sm"
          >
            {/* Se utiliza un iframe de Google Maps con la ubicación exacta */}
            <iframe 
              src="https://maps.google.com/maps?q=Veterinaria%20Kokysaurios,%20Ciudad%20Merliot&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Ubicación Veterinaria Kokysaurios"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Locations;

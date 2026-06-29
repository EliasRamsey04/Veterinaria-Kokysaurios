import { Star, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "jmoyo1",
    text: "Todo el personal está completamente dedicado al cuidado de las mascotas. Desde las doctoras hasta el equipo de apoyo brindan una atención excepcional. Totalmente recomendados.",
    initial: "J"
  },
  {
    name: "Brenda Blandon",
    text: "Excelente servicio, muy profesionales y amorosos. Dejé a mi Boston Terrier durante el fin de semana y recibió un cuidado extraordinario. El hospedaje es excelente y el precio muy accesible.",
    initial: "B"
  },
  {
    name: "Marco Aguilar",
    text: "Un lugar excelente para llevar a nuestras mascotas. Atención de primer nivel, personal amable y profesionales comprometidos con el bienestar animal.",
    initial: "M"
  }
];

const Testimonials = () => {
  return (
    <section id="opiniones" className="pt-20 md:pt-32 pb-10 bg-brand-light relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <div className="lg:w-1/3">
            <h2 className="text-brand-green font-bold tracking-wider uppercase text-sm mb-2">Opiniones Reales</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
              Lo que dicen nuestras familias
            </h3>
            
            <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-slate-100 inline-flex mb-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-slate-800">4.6</p>
                <div className="flex text-amber-400 my-1 justify-center">
                  {[1,2,3,4,5].map((i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
              </div>
              <div className="w-px h-12 bg-slate-200"></div>
              <div>
                <p className="font-semibold text-slate-800">Excelencia en Google</p>
                <p className="text-sm text-slate-500">Basado en 60+ opiniones</p>
              </div>
            </div>

            <a href="https://www.google.com/search?q=veterinaria+kokysaurios" target="_blank" rel="noopener noreferrer" className="btn-secondary w-full lg:w-auto">
              Ver más opiniones
            </a>
          </div>

          <div className="lg:w-2/3 grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white p-8 rounded-3xl shadow-soft relative ${index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <MessageCircle className="absolute top-6 right-6 text-brand-green/10 w-12 h-12" />
                <div className="flex text-amber-400 mb-4">
                  {[1,2,3,4,5].map((i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-600 mb-6 relative z-10 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-blue/10 text-brand-blue font-bold flex items-center justify-center text-xl">
                    {t.initial}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{t.name}</h4>
                    <p className="text-xs text-slate-500">Cliente de Kokysaurios</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

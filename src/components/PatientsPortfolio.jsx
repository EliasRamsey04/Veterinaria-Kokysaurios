import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const patients = [
  {
    name: "Luna",
    service: "Consulta preventiva",
    result: "Excelente recuperación",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=2069&auto=format&fit=crop"
  },
  {
    name: "Max",
    service: "Hospedaje",
    result: "Estadía segura y feliz",
    image: "https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Rocky",
    service: "Vacunación completa",
    result: "Salud protegida",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1964&auto=format&fit=crop"
  }
];

const PatientsPortfolio = () => {
  return (
    <section className="section-padding bg-slate-50 border-t border-slate-100">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-brand-green font-bold tracking-wider uppercase text-sm mb-2">Portafolio</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Nuestros Pacientes Felices
            </h3>
            <p className="text-slate-600 text-lg">
              Cada mascota que nos visita se convierte en parte de la familia Kokysaurios. Aquí algunas de nuestras historias de éxito.
            </p>
          </div>
          <a href="https://wa.me/50379881835?text=Hola,%20me%20gustar%C3%ADa%20agendar%20una%20cita%20para%20mi%20mascota" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Agenda una cita
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-8">
          {patients.map((patient, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-4 shadow-soft border border-slate-100 flex flex-col h-full"
            >
              <div className="relative rounded-2xl overflow-hidden h-64 mb-4">
                <img 
                  src={patient.image} 
                  alt={patient.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm text-brand-green">
                  <Heart size={20} fill="currentColor" />
                </div>
              </div>
              <div className="px-2">
                <h4 className="font-bold text-xl text-slate-800 mb-1">{patient.name}</h4>
                <p className="text-brand-blue font-medium text-sm mb-2">{patient.service}</p>
                <div className="h-px w-full bg-slate-100 my-3"></div>
                <p className="text-slate-600 text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span>
                  {patient.result}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatientsPortfolio;

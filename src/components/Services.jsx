import { 
  Stethoscope, Syringe, ShieldPlus, Activity, 
  Bed, Microscope, Bug, HeartPulse, 
  Home, Scissors, AlertCircle, ClipboardCheck 
} from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  { icon: <Stethoscope />, title: "Consultas veterinarias", desc: "Atención médica general y especializada con diagnósticos precisos." },
  { icon: <Syringe />, title: "Vacunación", desc: "Esquemas completos para proteger la salud de tu mascota." },
  { icon: <ShieldPlus />, title: "Medicina preventiva", desc: "Cuidado proactivo para evitar futuras enfermedades." },
  { icon: <Activity />, title: "Cirugías", desc: "Procedimientos quirúrgicos seguros con equipos modernos." },
  { icon: <Bed />, title: "Hospitalización", desc: "Monitoreo 24/7 en un ambiente cómodo y seguro." },
  { icon: <Microscope />, title: "Laboratorio clínico", desc: "Exámenes rápidos y precisos para diagnósticos oportunos." },
  { icon: <Bug />, title: "Desparasitación", desc: "Control interno y externo para mantenerlos saludables." },
  { icon: <HeartPulse />, title: "Control de enfermedades", desc: "Tratamiento y seguimiento de condiciones crónicas." },
  { icon: <Home />, title: "Hospedaje para mascotas", desc: "El mejor lugar para su estadía. Seguros y felices." },
  { icon: <Scissors />, title: "Grooming", desc: "Estética canina y felina profesional con mucho amor." },
  { icon: <AlertCircle />, title: "Emergencias", desc: "Atención inmediata para casos críticos y urgentes." },
  { icon: <ClipboardCheck />, title: "Controles preventivos", desc: "Chequeos rutinarios para asegurar su bienestar a largo plazo." }
];

const Services = () => {
  return (
    <section id="servicios" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-green font-bold tracking-wider uppercase text-sm mb-2">Nuestros Servicios</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Cuidado integral para cada etapa de su vida
          </h3>
          <p className="text-slate-600 text-lg">
            Ofrecemos un catálogo completo de servicios médicos y estéticos, equipados con la mejor tecnología y el personal más dedicado.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group p-6 rounded-2xl border border-slate-100 bg-white hover:bg-brand-green hover:shadow-card transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-light text-brand-blue group-hover:bg-white/20 group-hover:text-white flex items-center justify-center mb-4 transition-colors">
                {service.icon}
              </div>
              <h4 className="text-lg font-bold text-slate-800 group-hover:text-white mb-2 transition-colors">
                {service.title}
              </h4>
              <p className="text-sm text-slate-600 group-hover:text-brand-light transition-colors">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

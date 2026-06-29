import { Star, ShieldCheck, HeartPulse, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const TrustIndicators = () => {
  const stats = [
    {
      icon: <Star className="text-amber-400 w-8 h-8" />,
      title: "4.6★ (60+)",
      subtitle: "Opiniones en Google",
    },
    {
      icon: <ShieldCheck className="text-brand-green w-8 h-8" />,
      title: "Profesionalismo",
      subtitle: "Equipo altamente capacitado",
    },
    {
      icon: <HeartPulse className="text-brand-blue w-8 h-8" />,
      title: "Cuidado con amor",
      subtitle: "Atención personalizada",
    },
    {
      icon: <Users className="text-rose-400 w-8 h-8" />,
      title: "Clientes Satisfechos",
      subtitle: "Familias felices",
    }
  ];

  return (
    <section className="py-12 bg-white relative z-20 -mt-10 rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-4 rounded-2xl hover:bg-brand-gray transition-colors duration-300"
            >
              <div className="mb-3 bg-brand-light p-4 rounded-full shadow-sm">
                {stat.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-1">{stat.title}</h3>
              <p className="text-sm text-slate-500 font-medium">{stat.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;

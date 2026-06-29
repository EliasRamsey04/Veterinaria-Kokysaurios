import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const highlights = [
    "Atención personalizada",
    "Equipo altamente capacitado",
    "Amor por los animales",
    "Excelente servicio",
    "Instalaciones seguras",
    "Ambiente amigable",
  ];

  return (
    <section id="nosotros" className="section-padding bg-brand-light">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-brand-green/10 transform -rotate-3 rounded-3xl"></div>
            <img 
              src="/about_us_team.png" 
              alt="Equipo veterinario" 
              className="relative z-10 rounded-3xl shadow-card object-cover h-[500px] w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-card z-20 hidden md:block">
              <p className="text-4xl font-extrabold text-brand-blue mb-1">5+</p>
              <p className="text-slate-600 font-medium">Años de<br/>Experiencia</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-brand-green font-bold tracking-wider uppercase text-sm mb-2">Sobre Nosotros</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
              Comprometidos con la salud y felicidad de tu mascota
            </h3>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              Veterinaria Kokysaurios nació con el compromiso de ofrecer atención veterinaria de calidad basada en la ética profesional, la experiencia médica y el amor por los animales. Nuestro equipo trabaja cada día para brindar diagnósticos precisos, tratamientos efectivos y un trato cercano tanto para las mascotas como para sus familias.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-green w-5 h-5 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Misión y Visión */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-10 rounded-3xl shadow-soft border border-slate-100 hover:shadow-card transition-shadow duration-300"
          >
            <div className="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-brand-blue font-bold text-2xl">M</span>
            </div>
            <h4 className="text-2xl font-bold text-slate-800 mb-4">Nuestra Misión</h4>
            <p className="text-slate-600 leading-relaxed">
              Brindar atención veterinaria integral con profesionalismo, empatía y compromiso, promoviendo el bienestar de cada mascota mediante servicios médicos de calidad y un trato humano hacia sus familias.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-10 rounded-3xl shadow-soft border border-slate-100 hover:shadow-card transition-shadow duration-300"
          >
            <div className="w-14 h-14 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-brand-green font-bold text-2xl">V</span>
            </div>
            <h4 className="text-2xl font-bold text-slate-800 mb-4">Nuestra Visión</h4>
            <p className="text-slate-600 leading-relaxed">
              Convertirnos en una de las clínicas veterinarias más reconocidas de El Salvador por nuestra excelencia médica, innovación, confianza y compromiso con el cuidado responsable de los animales.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

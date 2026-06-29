import { motion } from 'framer-motion';

const images = [
  { url: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=2070&auto=format&fit=crop", title: "Consultas" },
  { url: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop", title: "Perros Felices" },
  { url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop", title: "Gatos" },
  { url: "/gallery_instalaciones.png", title: "Instalaciones" },
  { url: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=2071&auto=format&fit=crop", title: "Grooming" },
  { url: "/gallery_team.png", title: "Nuestro Equipo" }
];

const Gallery = () => {
  return (
    <section id="galeria" className="pt-10 pb-20 md:pb-32 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-green font-bold tracking-wider uppercase text-sm mb-2">Galería</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Conoce nuestras instalaciones
          </h3>
          <p className="text-slate-600 text-lg">
            Un ambiente seguro, moderno y preparado para recibir a tus mascotas con los brazos abiertos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-3xl h-72 shadow-soft cursor-pointer"
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark/90 via-brand-blue-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <h4 className="text-white font-bold text-xl p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

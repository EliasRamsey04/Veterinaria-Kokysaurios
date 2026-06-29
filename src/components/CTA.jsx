import { CalendarDays, PhoneCall } from 'lucide-react';

const CTA = () => {
  return (
    <section className="relative py-24 bg-brand-blue-dark overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 -left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-green rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Tu mascota merece la <br className="hidden md:block"/>
            <span className="text-brand-green">mejor atención veterinaria.</span>
          </h2>
          <p className="text-xl text-slate-200 mb-10 leading-relaxed">
            Nuestro equipo está listo para ayudarte y cuidar a tu mejor amigo con dedicación, experiencia y mucho cariño.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/50379881835?text=Hola,%20me%20gustar%C3%ADa%20agendar%20una%20cita%20para%20mi%20mascota" target="_blank" rel="noopener noreferrer" className="btn-primary bg-brand-green hover:bg-white hover:text-brand-green text-lg px-8 py-4 border-2 border-brand-green">
              <CalendarDays size={20} />
              Agendar por WhatsApp
            </a>
            <a href="tel:+50379881835" className="btn-outline text-lg px-8 py-4">
              <PhoneCall size={20} />
              Llamar ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

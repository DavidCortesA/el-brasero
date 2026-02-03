'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const timeline = [
  { year: '1987', title: 'El Comienzo', desc: 'Don Miguel abre El Brasero con un sueño: compartir el sabor auténtico.', img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop' },
  { year: '1995', title: 'Expansión', desc: 'Segunda sucursal en San Pedro. Nos consolidamos como referencia.', img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop' },
  { year: '2005', title: 'Reconocimiento', desc: 'Premio al Mejor Asador de Nuevo León.', img: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&h=600&fit=crop' },
  { year: '2024', title: 'Legado', desc: 'Tres generaciones manteniendo viva la tradición.', img: 'https://images.unsplash.com/photo-1592861956120-e524fc739696?w=800&h=600&fit=crop' },
];

export default function HistoriaPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-[60vh] flex items-center justify-center bg-charcoal-950">
        <div className="absolute inset-0"><Image src="https://images.unsplash.com/photo-1592861956120-e524fc739696?w=1920&h=1000&fit=crop" alt="Historia" fill className="object-cover opacity-40" /></div>
        <div className="relative z-10 text-center text-white container-base">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-6xl font-display font-light mb-4">Nuestra <span className="font-semibold">Historia</span></h1>
            <p className="text-xl text-clay-300">37 años de pasión y tradición</p>
          </motion.div>
        </div>
      </section>
      <section className="section-space bg-white">
        <div className="container-base max-w-4xl">
          <motion.p className="text-xl text-charcoal-600 leading-relaxed mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            En 1987, Don Miguel inauguró El Brasero con un objetivo claro: rescatar la auténtica tradición de la carne asada norteña.
          </motion.p>
        </div>
      </section>
      <section ref={ref} className="section-space bg-clay-50">
        <div className="container-base">
          <h2 className="text-5xl font-display font-light text-center mb-16">Momentos <span className="font-semibold">Clave</span></h2>
          <div className="space-y-24">
            {timeline.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.2 }} className={`grid md:grid-cols-2 gap-12 items-center`}>
                <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                  <span className="inline-block px-4 py-2 bg-ember-600 text-white rounded-full text-sm font-mono mb-4">{item.year}</span>
                  <h3 className="text-3xl font-display font-semibold mb-4">{item.title}</h3>
                  <p className="text-lg text-charcoal-600">{item.desc}</p>
                </div>
                <div className={`relative h-80 rounded-2xl overflow-hidden shadow-xl ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  <Image src={item.img} alt={item.title} fill className="object-cover" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

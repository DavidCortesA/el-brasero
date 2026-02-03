'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Users, Award, Target, Flame } from 'lucide-react';

const values = [
  { icon: Heart, title: 'Pasión', desc: 'Amor por el arte del asado' },
  { icon: Users, title: 'Familia', desc: 'Cada cliente es parte de nuestra familia' },
  { icon: Award, title: 'Calidad', desc: 'Solo los mejores cortes' },
  { icon: Flame, title: 'Tradición', desc: 'Técnicas de generaciones' },
];

export default function NosotrosPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-[60vh] flex items-center justify-center bg-charcoal-950">
        <div className="absolute inset-0"><Image src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=1000&fit=crop" alt="Nosotros" fill className="object-cover opacity-40" /></div>
        <div className="relative z-10 text-center text-white container-base">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-6xl font-display font-light mb-4">Sobre <span className="font-semibold">Nosotros</span></h1>
            <p className="text-xl text-clay-300">Más que un asador, una tradición familiar</p>
          </motion.div>
        </div>
      </section>
      <section className="section-space bg-white">
        <div className="container-base">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-5xl font-display font-light mb-6">Nuestra <span className="font-semibold">Misión</span></h2>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">Preservar y compartir la auténtica tradición de la carne asada norteña, usando solo los mejores ingredientes y las técnicas artesanales heredadas de generación en generación.</p>
              <p className="text-charcoal-600 leading-relaxed">Cada día trabajamos con la misma pasión del primer día, asegurando que cada corte, cada platillo y cada experiencia refleje nuestro compromiso con la excelencia.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop" alt="Misión" fill className="object-cover" />
            </motion.div>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-6">
                <div className="inline-flex w-16 h-16 bg-ember-100 text-ember-600 rounded-full mb-4 items-center justify-center"><v.icon size={28} strokeWidth={1.5} /></div>
                <h3 className="text-xl font-display font-semibold mb-2">{v.title}</h3>
                <p className="text-charcoal-600 text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

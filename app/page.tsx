'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Flame, Award, Clock, Heart, ArrowRight, ChefHat, Star } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } },
};

export default function HomePage() {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1544025162-d76694265947?w=2000&h=1200&fit=crop&q=80"
            alt="Carne Asada"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/80 via-charcoal-950/60 to-charcoal-950/90" />
        </div>

        <div className="relative z-10 container-base text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="inline-flex items-center space-x-2 px-5 py-2 rounded-full border border-ember-500/30 bg-ember-950/30 backdrop-blur-sm mb-8"
            >
              <Flame className="text-ember-400" size={18} />
              <span className="text-sm font-mono tracking-widest text-ember-200">EST. 1987</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.9 }}
              className="text-6xl sm:text-7xl lg:text-8xl font-display font-light mb-6 tracking-tight"
            >
              Tradición
              <br />
              <span className="font-semibold text-ember-400">al Fuego</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-xl sm:text-2xl text-clay-200 mb-12 max-w-2xl mx-auto font-light tracking-wide"
            >
              Carne asada artesanal. Cada corte, una celebración.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/menu"
                className="group px-8 py-4 bg-ember-600 text-white rounded-full font-medium tracking-wide hover:bg-ember-700 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center space-x-2"
              >
                <span>Explorar Menú</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/reservar"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full font-medium tracking-wide hover:bg-white/20 transition-all duration-300"
              >
                Reservar Mesa
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Features */}
      <section ref={ref1} className="section-space bg-white">
        <div className="container-base">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Flame, title: 'Fuego de Leña', desc: 'Cocinado con mezquite auténtico' },
              { icon: Award, title: 'Cortes Premium', desc: 'Selección artesanal diaria' },
              { icon: ChefHat, title: 'Maestros Asadores', desc: '35+ años de experiencia' },
              { icon: Heart, title: 'Tradición Familiar', desc: 'Recetas de generaciones' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                animate={inView1 ? 'visible' : 'hidden'}
                variants={fadeUp}
                transition={{ delay: i * 0.15 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-ember-100 text-ember-600 mb-4 group-hover:bg-ember-600 group-hover:text-white transition-all duration-300">
                  <item.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-display font-semibold mb-2 text-charcoal-900">{item.title}</h3>
                <p className="text-charcoal-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cuts */}
      <section ref={ref2} className="section-space bg-clay-50">
        <div className="container-base">
          <motion.div
            initial="hidden"
            animate={inView2 ? 'visible' : 'hidden'}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full border border-ember-600/20 bg-ember-50 text-ember-700 text-sm font-mono tracking-wider mb-4">
              LO MEJOR DE LA CASA
            </span>
            <h2 className="text-5xl sm:text-6xl font-display font-light mb-4 text-charcoal-950">
              Cortes <span className="font-semibold">Selectos</span>
            </h2>
            <p className="text-xl text-charcoal-600 max-w-2xl mx-auto">
              Cada corte seleccionado con cuidado, asado a la perfección
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Arrachera Premium',
                desc: 'Marinada 24h en especias secretas',
                price: '$420',
                img: 'https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop',
                badge: 'Favorito',
              },
              {
                name: 'Rib Eye Angus',
                desc: 'Madurado 28 días, jugoso y tierno',
                price: '$580',
                img: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800&h=600&fit=crop',
                badge: 'Premium',
              },
              {
                name: 'Costillas al Carbón',
                desc: 'Ahumadas 6 horas, salsa de la casa',
                price: '$490',
                img: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&h=600&fit=crop',
                badge: 'Especialidad',
              },
            ].map((cut, i) => (
              <motion.div
                key={i}
                initial="hidden"
                animate={inView2 ? 'visible' : 'hidden'}
                variants={fadeUp}
                transition={{ delay: i * 0.2 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={cut.img}
                    alt={cut.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-ember-600 text-white text-xs font-mono tracking-wider">
                      {cut.badge}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-display font-semibold mb-2">{cut.name}</h3>
                  <p className="text-charcoal-600 mb-4 text-sm">{cut.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-display font-semibold text-ember-600">{cut.price}</span>
                    <Link href="/menu" className="text-ember-600 font-medium text-sm hover:text-ember-700 flex items-center space-x-1">
                      <span>Ver más</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            animate={inView2 ? 'visible' : 'hidden'}
            variants={fadeUp}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link
              href="/menu"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-charcoal-950 text-white font-medium hover:bg-charcoal-800 transition-colors duration-300"
            >
              <span>Menú Completo</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section ref={ref3} className="section-space bg-white">
        <div className="container-base">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              animate={inView3 ? 'visible' : 'hidden'}
              variants={fadeUp}
            >
              <span className="inline-block px-4 py-2 rounded-full border border-ember-600/20 bg-ember-50 text-ember-700 text-sm font-mono tracking-wider mb-6">
                NUESTRA HISTORIA
              </span>
              <h2 className="text-5xl font-display font-light mb-6">
                37 Años de <span className="font-semibold">Tradición</span>
              </h2>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                En 1987, Don Miguel abrió las puertas de El Brasero con un sueño: compartir el 
                auténtico sabor de la carne asada norteña. Desde entonces, cada día asamos con la 
                misma pasión del primer día.
              </p>
              <p className="text-charcoal-600 mb-8 leading-relaxed">
                Cada corte es seleccionado a mano, cada brasero encendido con la técnica de generaciones, 
                cada platillo servido con el orgullo de nuestra tradición.
              </p>
              <div className="flex items-center space-x-12 mb-8">
                <div>
                  <div className="text-4xl font-display font-semibold text-ember-600">37+</div>
                  <div className="text-sm text-charcoal-600">Años</div>
                </div>
                <div>
                  <div className="text-4xl font-display font-semibold text-ember-600">600K+</div>
                  <div className="text-sm text-charcoal-600">Clientes</div>
                </div>
                <div>
                  <div className="text-4xl font-display font-semibold text-ember-600">4.9</div>
                  <div className="text-sm text-charcoal-600 flex items-center">
                    <Star size={14} className="fill-ember-500 text-ember-500 mr-1" />
                    Rating
                  </div>
                </div>
              </div>
              <Link
                href="/historia"
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-ember-600 text-white font-medium hover:bg-ember-700 transition-colors duration-300"
              >
                <span>Nuestra Historia</span>
                <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView3 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
              className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=1000&fit=crop"
                alt="Restaurante"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-space bg-gradient-to-br from-charcoal-950 via-charcoal-900 to-charcoal-950 text-white grain-overlay">
        <div className="container-base text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Flame className="w-12 h-12 text-ember-400 mx-auto mb-6 animate-glow" />
            <h2 className="text-5xl font-display font-light mb-6">
              Vive la <span className="font-semibold">Experiencia</span>
            </h2>
            <p className="text-xl text-clay-300 mb-8 max-w-2xl mx-auto">
              Reserva tu mesa y descubre por qué somos el asador favorito de Monterrey
            </p>
            <Link
              href="/reservar"
              className="inline-flex items-center space-x-2 px-10 py-5 bg-ember-600 text-white rounded-full font-semibold text-lg hover:bg-ember-700 transition-all duration-300 shadow-2xl"
            >
              <span>Reservar Ahora</span>
              <ArrowRight size={22} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Flame } from 'lucide-react';

const menuData = [
  {
    category: 'Entradas',
    items: [
      { name: 'Guacamole Artesanal', price: '$140', desc: 'Preparado al momento con aguacates hass' },
      { name: 'Queso Fundido Norteño', price: '$170', desc: 'Con chorizo artesanal y rajas' },
      { name: 'Elote Asado', price: '$90', desc: 'Con crema, queso y chile piquín' },
      { name: 'Frijoles Charros', price: '$110', desc: 'Con tocino y chorizo' },
    ],
  },
  {
    category: 'Cortes Premium',
    featured: true,
    items: [
      { name: 'Arrachera Premium', price: '$420', desc: '400g marinada 24 horas', special: true },
      { name: 'Rib Eye Angus', price: '$580', desc: '450g madurado 28 días', special: true },
      { name: 'T-Bone', price: '$620', desc: '500g corte americano' },
      { name: 'New York Strip', price: '$540', desc: '350g suave y jugoso' },
      { name: 'Picaña Brasileña', price: '$480', desc: '400g corte tradicional' },
      { name: 'Cowboy Steak', price: '$780', desc: '600g con hueso, para compartir' },
    ],
  },
  {
    category: 'Especialidades del Brasero',
    items: [
      { name: 'Costillas al Carbón', price: '$490', desc: 'Rack completo ahumado 6 horas', special: true },
      { name: 'Parrillada El Brasero', price: '$1,400', desc: 'Para 4 personas, surtido de cortes' },
      { name: 'Molcajete Norteño', price: '$440', desc: 'Carne, chorizo, queso y nopales' },
      { name: 'Alambre Especial', price: '$360', desc: 'Con tocino, pimientos y queso fundido' },
    ],
  },
  {
    category: 'Guarniciones',
    items: [
      { name: 'Papas al Horno', price: '$95', desc: 'Con mantequilla y crema ácida' },
      { name: 'Ensalada César', price: '$120', desc: 'Clásica con aderezo de la casa' },
      { name: 'Verduras Asadas', price: '$110', desc: 'Calabaza, pimiento, cebolla' },
      { name: 'Cebollitas Cambray', price: '$70', desc: 'Asadas al carbón' },
    ],
  },
  {
    category: 'Bebidas',
    items: [
      { name: 'Cerveza Nacional', price: '$50', desc: 'Corona, Modelo, Tecate' },
      { name: 'Cerveza Artesanal', price: '$85', desc: 'Selección local' },
      { name: 'Aguas Frescas', price: '$45', desc: 'Jamaica, horchata, limón' },
      { name: 'Refrescos', price: '$40', desc: 'Coca-Cola, Sprite, Fanta' },
    ],
  },
];

export default function MenuPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-charcoal-950">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1920&h=1000&fit=crop"
            alt="Menú"
            fill
            className="object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 text-center text-white container-base">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Flame className="w-12 h-12 text-ember-400 mx-auto mb-6" />
            <h1 className="text-6xl font-display font-light mb-4">
              Nuestro <span className="font-semibold">Menú</span>
            </h1>
            <p className="text-xl text-clay-300 max-w-2xl mx-auto">
              Selección artesanal de los mejores cortes, asados a la perfección
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu */}
      <section ref={ref} className="section-space bg-clay-50">
        <div className="container-base max-w-5xl">
          <div className="space-y-20">
            {menuData.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-display font-semibold mb-2 text-charcoal-950">
                    {section.category}
                  </h2>
                  <div className="w-20 h-0.5 bg-ember-600 mx-auto mt-4 rounded-full" />
                </div>

                <div className="space-y-6">
                  {section.items.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: (idx * 0.1) + (i * 0.05), duration: 0.5 }}
                      className={`p-6 rounded-xl transition-all duration-300 ${
                        item.special
                          ? 'bg-gradient-to-r from-ember-50 to-clay-100 border-2 border-ember-600/30'
                          : 'bg-white border-2 border-transparent hover:border-ember-600/20'
                      }`}
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-xl font-display font-semibold text-charcoal-950">
                              {item.name}
                            </h3>
                            {item.special && (
                              <Flame className="text-ember-600" size={18} />
                            )}
                          </div>
                          <p className="text-charcoal-600 text-sm">{item.desc}</p>
                        </div>
                        <span className="text-2xl font-display font-semibold text-ember-600 whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-16 p-8 bg-white rounded-2xl text-center border border-charcoal-200/50"
          >
            <p className="text-charcoal-600 leading-relaxed">
              <strong className="text-charcoal-950">Nota:</strong> Todos nuestros cortes incluyen 
              tortillas de harina artesanales, frijoles charros y salsas de la casa. Los precios 
              pueden variar sin previo aviso.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

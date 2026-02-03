'use client';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';

const sucursales = [
  { name: 'Centro', address: 'Av. Constitución 1500, Centro, Monterrey', phone: '(81) 1234-5678', hours: 'Lun-Dom 2PM-12AM' },
  { name: 'San Pedro', address: 'Calzada del Valle 200, San Pedro Garza García', phone: '(81) 1234-5679', hours: 'Lun-Dom 2PM-12AM' },
  { name: 'Santa Catarina', address: 'Av. Fundidora 800, Santa Catarina', phone: '(81) 1234-5680', hours: 'Lun-Dom 2PM-12AM' },
];

export default function SucursalesPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="section-space bg-clay-50">
        <div className="container-base">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h1 className="text-6xl font-display font-light mb-4">Nuestras <span className="font-semibold">Sucursales</span></h1>
            <p className="text-xl text-charcoal-600">Visítanos en cualquiera de nuestras ubicaciones</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {sucursales.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-display font-semibold mb-6 text-ember-600">{s.name}</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 text-charcoal-600">
                    <MapPin size={20} className="flex-shrink-0 mt-0.5 text-ember-500" />
                    <span className="text-sm">{s.address}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-charcoal-600">
                    <Phone size={20} className="flex-shrink-0 text-ember-500" />
                    <span className="text-sm">{s.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-charcoal-600">
                    <Clock size={20} className="flex-shrink-0 text-ember-500" />
                    <span className="text-sm">{s.hours}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

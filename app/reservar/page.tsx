'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Calendar, Users, Clock, CheckCircle } from 'lucide-react';

export default function ReservarPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="section-space bg-clay-50">
        <div className="container-base max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="text-6xl font-display font-light mb-4">Reserva tu <span className="font-semibold">Mesa</span></h1>
            <p className="text-xl text-charcoal-600">Asegura tu lugar en la mejor experiencia de carne asada</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-display font-semibold mb-6">Formulario de Reservación</h2>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle className="w-16 h-16 text-green-600 mb-4" />
                  <h3 className="text-2xl font-display font-semibold mb-2">¡Reservación Enviada!</h3>
                  <p className="text-charcoal-600">Te contactaremos pronto para confirmar tu reserva.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-2">Nombre Completo</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-lg border border-charcoal-200 focus:border-ember-500 focus:ring-2 focus:ring-ember-200 outline-none transition-all" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 mb-2">Teléfono</label>
                      <input type="tel" required className="w-full px-4 py-3 rounded-lg border border-charcoal-200 focus:border-ember-500 focus:ring-2 focus:ring-ember-200 outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 mb-2">Email</label>
                      <input type="email" required className="w-full px-4 py-3 rounded-lg border border-charcoal-200 focus:border-ember-500 focus:ring-2 focus:ring-ember-200 outline-none transition-all" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 mb-2">Fecha</label>
                      <input type="date" required className="w-full px-4 py-3 rounded-lg border border-charcoal-200 focus:border-ember-500 focus:ring-2 focus:ring-ember-200 outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 mb-2">Hora</label>
                      <select required className="w-full px-4 py-3 rounded-lg border border-charcoal-200 focus:border-ember-500 focus:ring-2 focus:ring-ember-200 outline-none transition-all">
                        <option>2:00 PM</option>
                        <option>3:00 PM</option>
                        <option>4:00 PM</option>
                        <option>5:00 PM</option>
                        <option>6:00 PM</option>
                        <option>7:00 PM</option>
                        <option>8:00 PM</option>
                        <option>9:00 PM</option>
                        <option>10:00 PM</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-2">Número de Personas</label>
                    <select required className="w-full px-4 py-3 rounded-lg border border-charcoal-200 focus:border-ember-500 focus:ring-2 focus:ring-ember-200 outline-none transition-all">
                      {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n}>{n}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-2">Sucursal</label>
                    <select required className="w-full px-4 py-3 rounded-lg border border-charcoal-200 focus:border-ember-500 focus:ring-2 focus:ring-ember-200 outline-none transition-all">
                      <option>Centro</option>
                      <option>San Pedro</option>
                      <option>Santa Catarina</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-2">Comentarios (Opcional)</label>
                    <textarea rows={3} className="w-full px-4 py-3 rounded-lg border border-charcoal-200 focus:border-ember-500 focus:ring-2 focus:ring-ember-200 outline-none transition-all resize-none" placeholder="Ocasión especial, alergias, etc."></textarea>
                  </div>
                  <button type="submit" className="w-full py-4 bg-ember-600 text-white rounded-lg font-semibold hover:bg-ember-700 transition-colors duration-300">
                    Enviar Reservación
                  </button>
                </form>
              )}
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-display font-semibold mb-4">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="text-ember-600" size={20} />
                    <span className="text-charcoal-600">(81) 1234-5678</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="text-ember-600" size={20} />
                    <span className="text-charcoal-600">reservas@elbrasero.mx</span>
                  </div>
                </div>
              </div>
              <div className="bg-ember-600 text-white p-8 rounded-2xl">
                <h3 className="text-xl font-display font-semibold mb-4">Política de Reservaciones</h3>
                <ul className="space-y-2 text-sm text-ember-100">
                  <li>• Confirmaremos tu reserva por teléfono o email</li>
                  <li>• Reservaciones con 24 horas de anticipación</li>
                  <li>• Tolerancia de 15 minutos</li>
                  <li>• Para grupos de 10+ personas, contactar directamente</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

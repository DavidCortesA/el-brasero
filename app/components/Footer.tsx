import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 text-clay-200 grain-overlay">
      <div className="container-base py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-display font-semibold text-white mb-4">El Brasero</h3>
            <p className="text-sm text-clay-400 mb-6 leading-relaxed">
              Asando tradición mexicana desde 1987. Cada corte una obra de arte.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://instagram.com"
                className="w-10 h-10 rounded-full bg-charcoal-800 flex items-center justify-center hover:bg-ember-600 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                className="w-10 h-10 rounded-full bg-charcoal-800 flex items-center justify-center hover:bg-ember-600 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-medium mb-4 font-display text-lg">Navegación</h4>
            <ul className="space-y-2 text-sm">
              {['Inicio', 'Menú', 'Historia', 'Nosotros', 'Sucursales', 'Reservar'].map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link.toLowerCase()}`}
                    className="text-clay-400 hover:text-ember-400 transition-colors duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-medium mb-4 font-display text-lg">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3 text-clay-400">
                <MapPin size={18} className="flex-shrink-0 mt-0.5 text-ember-500" />
                <span>Av. Constitución 1500<br />Monterrey, N.L.</span>
              </li>
              <li className="flex items-center space-x-3 text-clay-400">
                <Phone size={18} className="flex-shrink-0 text-ember-500" />
                <span>(81) 1234-5678</span>
              </li>
              <li className="flex items-center space-x-3 text-clay-400">
                <Mail size={18} className="flex-shrink-0 text-ember-500" />
                <span>hola@elbrasero.mx</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-medium mb-4 font-display text-lg">Horario</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3 text-clay-400">
                <Clock size={18} className="flex-shrink-0 mt-0.5 text-ember-500" />
                <div>
                  <p className="text-white font-medium">Lun - Jue</p>
                  <p>2:00 PM - 11:00 PM</p>
                </div>
              </div>
              <div className="ml-7">
                <p className="text-white font-medium">Vie - Dom</p>
                <p className="text-clay-400">2:00 PM - 12:00 AM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-charcoal-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-clay-500">
            <p>© {new Date().getFullYear()} El Brasero. Todos los derechos reservados.</p>
            <div className="flex space-x-6">
              <Link href="/privacidad" className="hover:text-ember-400 transition-colors">
                Privacidad
              </Link>
              <Link href="/terminos" className="hover:text-ember-400 transition-colors">
                Términos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

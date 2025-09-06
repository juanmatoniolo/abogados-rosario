'use client';

import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, MessageCircle } from 'lucide-react';

export default function FooterAbogado() {
    const phone = '+543415008328';
    const phoneHuman = '341 500 8328';
    const whatsappHref = `https://wa.me/${phone.replace('+', '')}?text=${encodeURIComponent(
        'Hola, quiero consultar sobre sus servicios.'
    )}`;
    const telHref = `tel:${phone}`;
    const email = 'abogadosrosarinos@gmail.com';
    const mapsHref =
        'https://www.google.com/maps/search/?api=1&query=Catamarca+2245+Piso+6+Dto+C+Rosario';

    return (
        <footer className="bg-gradient-to-r from-blue-950 via-blue-900 to-black text-white mt-12">
            <div className="max-w-7xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">
                {/* Logo y descripción */}
                <div>
                    <h3 className="text-lg font-semibold">AbogadosRosarinos.com</h3>
                    <p className="mt-3 text-sm text-blue-100 leading-relaxed">
                        Gonzalo Jeangeorges — Abogado & Informático en Rosario con más de 25 años de trayectoria.
                        <br />
                        Atención legal y tecnológica, presencial y remota.
                    </p>
                </div>

                {/* Navegación */}
                <div>
                    <h4 className="text-md font-semibold mb-3">Navegación</h4>
                    <ul className="space-y-2 text-sm text-blue-100">
                        <li>
                            <Link href="/" className="hover:text-blue-400">Inicio</Link>
                        </li>
                        <li>
                            <Link href="/areas" className="hover:text-blue-400">Áreas del Derecho</Link>
                        </li>
                        <li>
                            <Link href="/diligencias" className="hover:text-blue-400">Diligencias Judiciales</Link>
                        </li>
                        <li>
                            <Link href="/gestorias" className="hover:text-blue-400">Gestoría Extrajudicial</Link>
                        </li>
                        <li>
                            <Link href="/firmadigitaltoken" className="hover:text-blue-400">Firma Digital</Link>
                        </li>
                        <li>
                            <Link href="/contacto" className="hover:text-blue-400">Contacto</Link>
                        </li>
                    </ul>
                </div>

                {/* Contacto */}
                <div>
                    <h4 className="text-md font-semibold mb-3">Contacto</h4>
                    <ul className="space-y-3 text-sm text-blue-100">
                        <li className="flex items-center gap-2">
                            <MessageCircle className="h-4 w-4 text-blue-400" />
                            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                                WhatsApp
                            </a>
                        </li>
                        <li className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-blue-400" />
                            <a href={telHref} className="hover:text-blue-400">{phoneHuman}</a>
                        </li>
                        <li className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-blue-400" />
                            <a href={`mailto:${email}`} className="hover:text-blue-400">{email}</a>
                        </li>
                        <li className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-blue-400" />
                            <a href={mapsHref} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                                Catamarca 2245, Piso 6, Dto. C — Rosario
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Créditos y redes sociales */}
            <div className="border-t border-blue-800 py-4 text-sm text-blue-200 flex flex-col md:flex-row items-center justify-between px-6">
                <p>© {new Date().getFullYear()} AbogadosRosarinos.com — Todos los derechos reservados.</p>
                <div className="flex gap-4 mt-3 md:mt-0">
                    <a href="#" aria-label="Facebook" className="hover:text-blue-400"><Facebook className="h-5 w-5" /></a>
                    <a href="#" aria-label="Instagram" className="hover:text-blue-400"><Instagram className="h-5 w-5" /></a>
                    <a href="#" aria-label="LinkedIn" className="hover:text-blue-400"><Linkedin className="h-5 w-5" /></a>
                </div>
            </div>
        </footer>
    );
}

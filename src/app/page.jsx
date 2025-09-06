import Link from 'next/link';
import { Scale, Gavel, Shield, FileText, Database, PenLine, MapPin, Phone, Mail, MessageCircle, CheckCircle2 } from 'lucide-react';
import GoogleReviews from '@/components/Resenias';

export const metadata = {
  title: 'Abogados en Rosario | Asesoría Legal y Servicios Informáticos — AbogadosRosarinos.com',
  description:
    'Asesoramiento legal en Rosario con enfoque tecnológico: familia, sucesiones, rectificaciones, ciberdelitos, diligencias judiciales, gestoría y firma digital. Atención remota y presencial.',
  keywords: [
    'abogados en Rosario',
    'asesoramiento legal Rosario',
    'firma digital Rosario',
    'diligencias judiciales Rosario',
    'gestoría extrajudicial Rosario',
    'ciberdelitos Rosario',
    'protección de datos Rosario',
  ],
  alternates: { canonical: 'https://abogadosrosarinos.com/' },
  openGraph: {
    title: 'Abogados en Rosario | Asesoría Legal y Servicios Informáticos',
    description:
      'Soluciones legales y tecnológicas: familia, sucesiones, datos personales, diligencias, gestoría y firma digital. Atención ágil, moderna y segura.',
    url: 'https://abogadosrosarinos.com/',
    siteName: 'AbogadosRosarinos.com',
    locale: 'es_AR',
    type: 'website',
  },
  robots: { index: true, follow: true },
  twitter: {
    card: 'summary_large_image',
    title: 'Abogados en Rosario | Servicios Legales + Informática',
    description:
      'Experiencia jurídica + innovación tecnológica. Diligencias, gestoría, firma digital y más.',
  },
};

export default function Page() {
  const phone = '+543415008328';
  const phoneHuman = '341 500 8328';
  const whatsappHref = `https://wa.me/${phone.replace('+', '')}?text=${encodeURIComponent(
    'Hola, quiero reservar un turno. '
  )}`;
  const telHref = `tel:${phone}`;
  const email = 'abogadosrosarinos@gmail.com';
  const mapsHref =
    'https://www.google.com/maps/search/?api=1&query=Catamarca+2245+Piso+6+Dto+C+Rosario';

  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Abogados Rosarinos — Gonzalo Jeangeorges',
    url: 'https://abogadosrosarinos.com/',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Catamarca 2245, Piso 6, Dto. C',
      addressLocality: 'Rosario',
      addressRegion: 'Santa Fe',
      addressCountry: 'AR',
    },
    areaServed: 'Rosario, Santa Fe, Argentina',
    telephone: phone,
    email,
    hasMap: mapsHref,
    priceRange: '$$ ARS',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    contactPoint: [
      { '@type': 'ContactPoint', telephone: phone, contactType: 'customer service', areaServed: 'AR' },
    ],
  };

  return (
    <main className="text-gray-800">
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        // @ts-ignore
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      {/* Hero / Intro */}
      <section id="inicio" className="relative isolate bg-gradient-to-b from-blue-950 via-blue-900 to-black text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-widest text-blue-300">Estudio jurídico digital en Rosario</p>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
              Experiencia jurídica + innovación tecnológica
            </h1>
            <p className="text-base md:text-lg text-blue-100 max-w-3xl">
              En <strong>AbogadosRosarinos.com</strong> combinamos asesoramiento legal especializado con servicios informáticos de alto nivel:
              diligenciamiento y gestión de trámites, <em>firma digital</em> y <em>soporte técnico</em> para profesionales y particulares.
            </p>

            {/* CTA principal */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-blue-500 px-4 py-2 text-white hover:bg-blue-400 active:bg-blue-600 transition"
                aria-label="Reservar turno por WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
                Reservar por WhatsApp
              </a>
              <a
                href={telHref}
                className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 text-white hover:bg-white/20 active:bg-white/25 transition"
                aria-label={`Llamar al ${phoneHuman}`}
              >
                <Phone className="h-5 w-5" />
                Llamar {phoneHuman}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido principal */}
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Sobre el profesional */}
        <section className="mb-12">
          <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-blue-900">Bienvenido</h2>
            <p className="mt-3 text-base leading-relaxed text-gray-700">
              El sitio es gestionado por <strong>Gonzalo Jeangeorges</strong>, abogado e informático con más de 25 años de
              trayectoria en Rosario (Santa Fe). Ofrecemos atención <strong>remota y presencial</strong> con un enfoque ágil,
              moderno y adaptado a la era digital.
            </p>
          </div>
        </section>

        {/* Áreas del Derecho */}
        <section id="areas-del-derecho" aria-labelledby="areas-title" className="mb-12">
          <div className="flex items-center gap-3">
            <Scale className="h-10 w-10 md:h-12 md:w-12 text-blue-700" aria-hidden />
            <h2 id="areas-title" className="text-2xl font-semibold text-blue-900">Asesoría legal ante tribunales de Rosario</h2>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <CardItem title="Derecho de Familia" text="Divorcios express (mutuo o unilateral). Costo de un divorcio. Exequatur. Alimentos. Cuidado personal y régimen de comunicación." />
            <CardItem title="Sucesiones" text="Declaratoria de herederos. Procesos completos de inmuebles y rodados. Costo de declaratoria y denuncia de bienes." />
            <CardItem title="Rectificación de actas" text="Correcciones judiciales y administrativas de actas del Registro Civil de Santa Fe." />
            <div className="rounded-xl border border-blue-100 bg-white p-5">
              <h3 className="font-medium text-gray-900">Delitos informáticos</h3>
              <ul className="mt-2 space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <span>Asesoramiento a víctimas de ciberdelitos y estafas. BCRA y Hábeas Data.</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-blue-100 bg-white p-5">
              <h3 className="font-medium text-gray-900">Auditoría Legal de Páginas Web</h3>
              <ul className="mt-2 space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <FileText className="h-6 w-6 text-blue-600" />
                  <span>Revisión de avisos legales obligatorios. Redacción de Términos y Condiciones y Políticas de Privacidad.</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-blue-100 bg-white p-5">
              <h3 className="font-medium text-gray-900">Protección de datos personales</h3>
              <ul className="mt-2 space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <Database className="h-6 w-6 text-blue-600" />
                  <span>Gestión de bajas en Veraz, Nosis y Central de Deudores del BCRA. Hábeas Data.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Diligencias Judiciales */}
        <section id="diligencias-rosario" aria-labelledby="diligencias-title" className="mb-12">
          <div className="flex items-center gap-3">
            <Gavel className="h-10 w-10 md:h-12 md:w-12 text-blue-700" aria-hidden />
            <h2 id="diligencias-title" className="text-2xl font-semibold text-blue-900">Diligencias judiciales en Rosario</h2>
          </div>
          <div className="mt-4 rounded-xl border border-blue-100 bg-white p-5 text-gray-700">
            Diligenciamiento de <strong>Cédulas-Ley, Mandamientos-Ley y Oficios-Ley</strong> con plazos claros y seguimiento personalizado.
          </div>
        </section>

        {/* Gestoría */}
        <section id="gestoria-rosario" aria-labelledby="gestoria-title" className="mb-12">
          <div className="flex items-center gap-3">
            <FileText className="h-10 w-10 md:h-12 md:w-12 text-blue-700" aria-hidden />
            <h2 id="gestoria-title" className="text-2xl font-semibold text-blue-900">Gestoría y trámites extrajudiciales en Rosario</h2>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <CardItem text="Partidas de nacimiento, matrimonio o defunción (Registro Civil Santa Fe) en formato digital con firma electrónica, QR y código de validación." />
            <CardItem text="Actas de bautismo y matrimonio eclesiásticos certificadas por el Arzobispado de Rosario." />
            <CardItem text="Apostillado de documentos públicos ante el Colegio de Escribanos de Rosario (formato digital)." />
            <CardItem text="Fotocopia de dominios de inmuebles (Registro de la Propiedad de Rosario)." />
            <CardItem text="Registro de marcas (denominativas o mixtas) ante el INPI." />
          </div>
        </section>

        {/* Servicios Informáticos */}
        <section id="firma-digital-token" aria-labelledby="it-title" className="mb-12">
          <div className="flex items-center gap-3">
            <Shield className="h-10 w-10 md:h-12 md:w-12 text-blue-700" aria-hidden />
            <h2 id="it-title" className="text-2xl font-semibold text-blue-900">Servicios informáticos vía remoto (Prov. Santa Fe)</h2>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <CardItem text="Instalación remota de drivers, certificados AC ONTI y firmadores PDF para TOKEN (ePass2003, mToken CryptoID) requeridos por SISFE." />
            <CardItem text="Capacitación en firma digital con Token y Firma Digital Remota vía AnyDesk y WhatsApp." />
            <CardItem text="Instalación remota y provisión de licencias originales: Windows 7/10/11 Pro, Office 2016/2019/2021/2024 Pro, Antivirus (Avast, ESET, Kaspersky, Trend, AdGuard, Bitdefender, McAfee), Adobe Acrobat Pro DC, CCleaner, IObit Driver Booster, etc." />
          </div>
        </section>

        {/* Modalidad de atención / Contacto */}
        <section id="contacto" aria-labelledby="contact-title" className="mb-16">
          <div className="flex items-center gap-3">
            <PenLine className="h-7 w-10 md:h-12 md:w-12 text-blue-700" aria-hidden />
            <h2 id="contact-title" className="text-2xl font-semibold text-blue-900">Modalidad de atención</h2>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-blue-100 bg-white p-5">
              <div className="flex items-center gap-3 text-gray-700">
                <MessageCircle className="h-6 w-6 text-blue-600" />
                <span>WhatsApp</span>
              </div>
              <div className="mt-2 flex flex-wrap gap-3">
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-500">
                  <MessageCircle className="h-5 w-5" /> Abrir chat
                </a>
                <a href={telHref} className="inline-flex items-center gap-2 rounded-xl border border-blue-200 px-4 py-2 text-blue-700 hover:bg-blue-50">
                  <Phone className="h-5 w-5" /> Llamar {phoneHuman}
                </a>
              </div>
            </div>

            <div className="rounded-xl border border-blue-100 bg-white p-5">
              <div className="flex items-center gap-3 text-gray-700">
                <Mail className="h-6 w-6 text-blue-600" />
                <span>Email</span>
              </div>
              <a href={`mailto:${email}`} className="mt-2 inline-block text-blue-700 hover:underline">
                {email}
              </a>
              <div className="mt-4 flex items-center gap-3 text-gray-700">
                <MapPin className="h-6 w-6 text-blue-600" />
                <span>
                  <a href={mapsHref} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                    Catamarca 2245, Piso 6, Dto. C — Rosario
                  </a>
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-600">Atención con <strong>reserva de turno</strong> por WhatsApp o teléfono.</p>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
            <p className="font-medium">Advertencia</p>
            <p className="mt-1">Las consultas legales, gestiones y servicios están arancelados. Consulte previamente los <strong>precios en pesos argentinos</strong>. Algunas páginas poseen acceso restringido por contraseña; la habilitación se otorga una vez abonado el servicio.</p>
          </div>
        </section>

        {/* Cierre */}
        <section className="mb-10 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
          <p className="text-gray-700">
            <strong>AbogadosRosarinos.com</strong> es la síntesis entre experiencia jurídica, innovación tecnológica y atención personalizada.
            <br />
            <span className="text-blue-700 font-medium">Contactanos hoy mismo</span> para una consulta profesional.
          </p>
        </section>

        {/* Navegación interna para UX */}
        <nav aria-label="Atajos" className="flex flex-wrap items-center gap-2 text-sm">
          <span className="text-gray-500">Atajos:</span>
          <Link href="/areas" className="rounded-full border border-blue-200 px-3 py-1 text-blue-700 hover:bg-blue-50">Áreas del Derecho</Link>
          <Link href="/diligencias" className="rounded-full border border-blue-200 px-3 py-1 text-blue-700 hover:bg-blue-50">Diligencias</Link>
          <Link href="/gestorias" className="rounded-full border border-blue-200 px-3 py-1 text-blue-700 hover:bg-blue-50">Gestoría</Link>
          <Link href="/firmadigitaltoken" className="rounded-full border border-blue-200 px-3 py-1 text-blue-700 hover:bg-blue-50">Firma Digital</Link>
          <Link href="/contacto" className="rounded-full border border-blue-200 px-3 py-1 text-blue-700 hover:bg-blue-50">Contacto</Link>
        </nav>
      </div>
      <GoogleReviews/>
    </main>
  );
}

function CardItem({ text }) {
  return (
    <div className="rounded-xl border border-blue-100 bg-white p-5 text-sm text-gray-700">
      <div className="flex items-start gap-2">
        <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
        <span>{text}</span>
      </div>
    </div>
  );
}

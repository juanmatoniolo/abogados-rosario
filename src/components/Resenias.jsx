'use client';

import { Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const reviews = [
  {
    name: 'Monica Monica',
    email: 'monica@gmail.com',
    date: '05/02/2025',
    rating: 5,
    review:
      'Muy buen servicio de asistencia remota para profesionales del derecho en temas de firma digital. Gracias Gonzalo!',
  },
  {
    name: 'Camila Reboulaz Garcia',
    email: 'camila@gmail.com',
    date: '27/12/2024',
    rating: 5,
    review:
      'Sin dudas Gonzalo brinda un excelente servicio! Me gestionó una partida de manera muy rápida y eficaz. Muy profesional 😀 lo recomiendo 100%.',
  },
  {
    name: 'Julio Berardi',
    email: 'julio@gmail.com',
    date: '27/12/2024',
    rating: 5,
    review: 'Muy expeditivos, recomiendo sus servicios.',
  },
  {
    name: 'Ana López',
    email: 'ana.lopez@gmail.com',
    date: '15/01/2025',
    rating: 5,
    review:
      'Excelente atención. Resolvieron mi trámite judicial de forma clara y rápida. Muy profesionales.',
  },
  {
    name: 'Martín Fernández',
    email: 'martin.fernandez@gmail.com',
    date: '20/11/2024',
    rating: 4,
    review:
      'Muy buena gestión. El trato fue cordial y la resolución en tiempo y forma. Los recomiendo.',
  },
  {
    name: 'Laura Gómez',
    email: 'laura.gomez@gmail.com',
    date: '10/12/2024',
    rating: 5,
    review:
      'Me ayudaron con un trámite de firma digital. Muy claros en las instrucciones y muy pacientes.',
  },
  {
    name: 'Carlos Ruiz',
    email: 'carlos.ruiz@gmail.com',
    date: '02/01/2025',
    rating: 5,
    review:
      'Servicio impecable, Gonzalo combina perfectamente la experiencia legal con el soporte informático.',
  },
  {
    name: 'Sofía Martínez',
    email: 'sofia.martinez@gmail.com',
    date: '18/12/2024',
    rating: 5,
    review:
      'Muy confiables y responsables. Recomiendo sus servicios tanto legales como informáticos.',
  },
];

export default function GoogleReviews() {
  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Encabezado */}
        <div className="mb-8 text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
            AbogadosRosarinos.com - Gonzalo Jeangeorges - Abogado & Informático en Rosario.
          </h2>
          <div className="flex justify-center items-center gap-2 mt-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            ))}
            <Star className="h-5 w-5 text-yellow-400" />
            <span className="ml-2 text-sm text-gray-600">63 reseñas Google</span>
          </div>
          <a
            href="https://www.google.com/maps/place/AbogadosRosarinos.com+%7C+Abogado+e+Inform%C3%A1tico+en+Rosario+%2B25+A%C3%B1os/@-32.9378596,-60.6551501,591m/data=!3m2!1e3!4b1!4m6!3m5!1s0x95b7ab12dd66afe1:0xa8970844c50ea422!8m2!3d-32.9378596!4d-60.6525752!16s%2Fg%2F11b5wlxk0k?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
          >
            Escribe una reseña
          </a>
        </div>

        {/* Reseñas en carrusel */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review, idx) => (
            <SwiperSlide key={idx}>
              <div className="rounded-2xl bg-white p-5 shadow-md border border-gray-200 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      {/* Avatar */}
                      <div className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-semibold">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{review.name}</p>
                        <p className="text-xs text-gray-500">{review.date}</p>
                      </div>
                    </div>
                    <span className="text-blue-500 text-xs font-medium">Google</span>
                  </div>

                  <div className="flex gap-1 mb-2">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed">{review.review}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

import { useEffect, useState } from 'react';

const slides = [
  { title: 'MITO: Los carbohidratos son malos.', description: 'Mucha gente cree que los carbohidratos engordan por sí solos, pero la realidad es que son una fuente principal de energía. La clave está en elegir carbohidratos complejos como avena, legumbres y frutas. Evitar los ultraprocesados y azúcares refinados es más efectivo que eliminar todos los carbos.', bgColor: 'bg-blue-200' },
  { title: 'Más proteína no siempre es mejor.', description: 'Consumir mucha proteína no garantiza más músculo ni es automáticamente saludable. El exceso puede sobrecargar los riñones y desplazarte de otros nutrientes esenciales. Una dieta equilibrada y el ejercicio constante son más importantes que la cantidad exacta de proteína.', bgColor: 'bg-green-200' },
  { title: 'Comer menos NO ayuda.', description: 'Omitir comidas con la idea de "ahorrar calorías" puede alterar tu metabolismo y aumentar la ansiedad alimentaria. Comer con regularidad estabiliza los niveles de azúcar en sangre y evita atracones. La planificación es más efectiva que la restricción.', bgColor: 'bg-yellow-200' },
  { title: 'MITO: La grasa es mala.', description: 'Las grasas saludables (como las del aguacate, frutos secos y aceite de oliva) son esenciales para el cerebro y las hormonas. El problema está en las grasas trans o industriales. No hay que temerle a la grasa, sino saber cuál elegir.', bgColor: 'bg-red-200' },
  { title: '"Detox" no es real.', description: 'Los jugos detox o dietas milagro no “limpian” tu cuerpo. Tu hígado y riñones ya hacen ese trabajo de forma natural. En lugar de buscar atajos, enfócate en una alimentación constante, rica en fibra, agua y variedad de nutrientes.', bgColor: 'bg-purple-200' },
];

export default function InfoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // cambia cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => setCurrentIndex(index);
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full overflow-hidden rounded-lg">
      {/* Slide content */}
      <div
        className="h-56 md:h-96 flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`w-full flex-shrink-0 flex items-center justify-center bg-[#FCA31110]`}
          >
            <div className="max-w-6xl text-center px-4">
              <h2 className="text-2xl font-bold mb-2">{slide.title}</h2>
              <p className="text-gray-700">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute z-30 flex space-x-3 bottom-5 left-1/2 transform -translate-x-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-black' : 'bg-white'} border border-black`}
          />
        ))}
      </div>

      {/* Controls */}
      <button onClick={prevSlide} className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 group">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/50 group-hover:bg-white shadow">
          <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
        </span>
      </button>
      <button onClick={nextSlide} className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 group">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/50 group-hover:bg-white shadow">
          <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
        </span>
      </button>
    </div>
  );
}

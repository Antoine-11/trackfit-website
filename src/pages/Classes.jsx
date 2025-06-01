import MainLayout from "../layouts/MainLayout";
import ClassCard from "../components/ClassCard";
import ContactForm from "../components/ContactForm";
import Slider from "../components/Slider";

import yogaImg from "../assets/images/yoga.jpg";
import bootyImg from "../assets/images/booty.jpg";
import spinningImg from "../assets/images/ciclismo-indoor.jpg";
import hiitImg from "../assets/images/hiit.jpg";
import pilatesImg from "../assets/images/pilates.jpg";
import zumbaImg from "../assets/images/zumba.jpg";
import funcionalImg from "../assets/images/funcional.jpg";
import combatImg from "../assets/images/cardiocombat.jpg";
import crossImg from "../assets/images/cross-training.jpg";
import gapImg from "../assets/images/abdominales.jpg";
import SliderImg from "../assets/images/body-pan2.jpg"


export default function Classes() {
  const classes = [
    { title: "GAP", description: "Tonifica glúteos, abdominales y piernas en sesiones dirigidas al fortalecimiento y la definición. Ideal para quienes buscan resultados visibles en la parte inferior del cuerpo.", image: gapImg },
    { title: "Yoga & Stretching", description: "Conecta cuerpo y mente con posturas suaves y ejercicios de respiración. Mejora tu flexibilidad, reduce el estrés y recarga energías.", image: yogaImg },
    { title: "Booty Camp", description: "Clase centrada en glúteos y tren inferior, combinando fuerza, resistencia y ejercicios funcionales. ¡Activa tu cuerpo y esculpe tu figura!", image: bootyImg },
    { title: "Spinning", description: "Vive una experiencia intensa sobre la bici al ritmo de la música. Mejora tu resistencia cardiovascular y quema calorías sin impacto articular.", image: spinningImg },
    { title: "HIIT", description: "Entrenamiento por intervalos de alta intensidad diseñado para maximizar resultados en menos tiempo. Aumenta tu metabolismo y mejora tu capacidad física general.", image: hiitImg },
    { title: "Pilates", description: "Fortalece el core, mejora la postura y alinea tu cuerpo con movimientos precisos y controlados. Ideal para prevenir lesiones y ganar estabilidad.", image: pilatesImg },
    { title: "Zumba", description: "Baila, suda y diviértete con ritmos latinos y coreografías fáciles de seguir. Un entrenamiento cardiovascular disfrazado de fiesta.", image: zumbaImg },
    { title: "Entrenamiento Funcional", description: "Mejora tu rendimiento físico con ejercicios que simulan movimientos de la vida diaria. Trabaja fuerza, equilibrio y coordinación.", image: funcionalImg },
    { title: "Cardio Combat", description: "Combinación de boxeo, kickboxing y artes marciales sin contacto. Desahógate, quema calorías y mejora tu agilidad con energía y actitud.", image: combatImg },
    { title: "Cross Training", description: "Entrenamiento tipo circuito con alta intensidad que combina fuerza, cardio y funcional. Desafía tus límites y supera tus marcas.", image: crossImg },
  ];

  return (
    <MainLayout>
      {/* Slider */}
      <Slider heroImg={SliderImg} title="CLASES COLECTIVAS" />

      {/* Grid de clases */}
      <section className="py-24 bg-white text-gray-900">
        <div className="grid md:grid-cols-2">
          {classes.map((item, index) => (
            <ClassCard key={index} title={item.title} description={item.description} image={item.image} reverse={Math.floor(index / 2) % 2 !== 0} />
          ))}
        </div>
      </section>

      {/* Formulario de contacto */}
      <section className="px-6 py-12 bg-[#F5F5F5]">
        <h2 className="text-2xl font-semibold mb-6 text-center">¿Tienes dudas? Contáctanos</h2>
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </MainLayout>
  );
}

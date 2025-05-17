

import React, { useState } from "react";
import ServiceCard from "../components/ServiceCard";
import ContactForm from "../components/ContactForm";
import TeamMember from "../components/TeamMember";
import Slider from "../components/Slider";

import historiaImage from "../assets/images/trackfit-home-one.jpg";
import sliderImage from "../assets/images/gym-team2.jpg"
import equipo1 from "../assets/images/ana-lopez.jpg";
import equipo2 from "../assets/images/edu-munoz.jpg";
import equipo3 from "../assets/images/ana-lopez.jpg";
import equipo4 from "../assets/images/gines-nico.jpg";
import equipo5 from "../assets/images/raul-almagro.jpg";
import equipo6 from "../assets/images/antonio-garni.jpg";
import equipo7 from "../assets/images/pablo-cestau.jpg";
import equipo8 from "../assets/images/angeles-guti.jpg";
import MainLayout from "../layouts/MainLayout";

export default function About() {
  const services = [
    { title: "Entrenamiento Personal", icon: "https://img.icons8.com/ios-filled/50/dumbbell.png", description: "Planes personalizados y seguimiento" },
    { title: "Nutrición", icon: "https://img.icons8.com/ink/48/healthy-eating.png", description: "Asesoramiento nutricional profesional" },
    { title: "Clases Grupales", description: "Zumba, HIIT, Yoga y más", icon: "https://img.icons8.com/ios-filled/50/dumbbell.png" },
    { title: "Rehabilitación", icon: "https://img.icons8.com/ios/50/physical-therapy.png", description: "Fisioterapia y recuperación" },
  ];

  const team = [
    {
      name: "Laura García", role: "Entrenadora Personal", role2: "Apasionada del fitness y el entrenamiento funcional, Laura motiva a cada cliente a superar sus límites con energía y cercanía. Su enfoque se basa en la constancia y el compromiso.",
      image: equipo1, icon: "https://img.icons8.com/ios/50/instagram-new--v1.png"
    },
    {
      name: "Eduardo Muñoz", role: "Nutricionista", role2: "Especialista en nutrición deportiva y hábitos saludables, Eduardo adapta cada plan alimenticio a los objetivos de nuestros socios, combinando ciencia y cercanía.",
      image: equipo2, icon: "https://img.icons8.com/ios/50/instagram-new--v1.png"
    },
    {
      name: "Ana López", role: "Instructora de Clases Colectivas", role2: "Dinamismo, ritmo y pasión definen las clases de Ana. Experta en HIIT, zumba y yoga, transforma cada sesión en una experiencia vibrante.",
      image: equipo3, icon: "https://img.icons8.com/ios/50/instagram-new--v1.png"
    },
    {
      name: "Ginés Nicolás", role: "Fisioterapeuta", role2: "Con años de experiencia en recuperación y prevención de lesiones, Ginés acompaña a nuestros socios en su camino hacia una salud integral y sin dolor.",
      image: equipo4, icon: "https://img.icons8.com/ios/50/instagram-new--v1.png"
    },
    {
      name: "Raúl Almagro", role: "Entrenador Personal", role2: "Raúl combina el conocimiento académico con la práctica diaria. Diseña rutinas seguras, efectivas y adaptadas a todos los niveles.",
      image: equipo5, icon: "https://img.icons8.com/ios/50/instagram-new--v1.png"
    },
    {
      name: "Antonio Garnica", role: "Instructor de Clases Colectivas", role2: "Energía y entusiasmo contagiosos. Antonio lidera clases llenas de movimiento y motivación, conectando con todos los públicos.",
      image: equipo6, icon: "https://img.icons8.com/ios/50/instagram-new--v1.png"
    },
    {
      name: "Pablo Cestau", role: "Entrenador Personal", role2: "Metódico y motivador, Pablo trabaja mano a mano con cada cliente para alcanzar resultados reales, combinando técnica, disciplina y motivación constante.",
      image: equipo7, icon: "https://img.icons8.com/ios/50/instagram-new--v1.png"
    },
    {
      name: "Ángeles Gutiérrez", role: "Entrenadora Personal", role2: "Enfocándose en la fuerza, la tonificación y el empoderamiento físico de cuerpos femeninos. Ha participado en múltiples campeonatos de culturismo, lo que la convierte en una referente para sus alumnas tanto dentro como fuera del gimnasio.",
      image: equipo8, icon: "https://img.icons8.com/ios/50/instagram-new--v1.png"
    }
  ];

  const [showMore, setShowMore] = useState(false);

  const historiaParrafos = [
    `Todo comenzó el 12 de septiembre de 2010, en pleno corazón del Campo de Gibraltar, cuando dos primos, Javier y Marcos, compartieron una visión: crear un gimnasio que fuera mucho más que un lugar para entrenar. Apasionados por el deporte desde jóvenes, crecieron entre pesas oxidadas, revistas de culturismo clásico y el espíritu de superación que respiraban en los gimnasios de la vieja escuela. Así nació TrackFit, un sueño convertido en realidad que combinaba esa estética "old school" con lo mejor de la tecnología y el diseño moderno.`,

    `Desde sus inicios, TrackFit no fue un gimnasio más. En lugar de seguir tendencias, marcó su propio camino. Se construyó en un edificio de tres plantas, cada una pensada cuidadosamente para ofrecer una experiencia diferente: una planta dedicada a la fuerza y el entrenamiento funcional, otra a clases colectivas como HIIT, boxeo y yoga, y una superior con zona de cardio panorámica, donde se puede entrenar mientras se contempla el paisaje de la comarca.`,

    `Los fundadores creían firmemente que el entrenamiento no solo fortalece el cuerpo, sino también la mente y el carácter. Por eso, desde el primer día, el ambiente de TrackFit ha sido cercano, auténtico y sin prejuicios, donde tanto principiantes como atletas experimentados se sienten en casa. Las paredes decoradas con frases motivadoras, fotografías de culturistas legendarios y detalles industriales aportan una atmósfera única que transporta al visitante al espíritu de los gimnasios de los años 80, pero con el confort y los avances del siglo XXI.`,

    `A lo largo de los años, TrackFit ha evolucionado, ampliando sus instalaciones, renovando sus equipos con tecnología de marcas líderes como Panatta, y formando un equipo humano de entrenadores apasionados y comprometidos. Pero lo que no ha cambiado es su esencia: una comunidad unida por el deseo de mejorar, apoyarse mutuamente y disfrutar del proceso.`,

    `Hoy, más de una década después, TrackFit no es solo un gimnasio. Es un símbolo de perseverancia, un punto de encuentro para quienes creen en el esfuerzo, y una segunda casa para cientos de personas que han transformado su estilo de vida entre sus paredes. Y como dicen sus fundadores: "Aquí no solo entrenas… aquí te descubres."`
  ];

  return (
    <MainLayout>
      <div className="flex flex-col items-center">
        {/* Slider */}
        <Slider heroImg={sliderImage} title="SOBRE NOSOTROS" />

        {/* Servicios */}
        <section className="py-12 px-6 max-w-7xl w-full">
          <h2 className="text-[38px] text-[#14213D] font-bold text-center mb-8">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <ServiceCard key={i} title={s.title} description={s.description} icon={s.icon} />
            ))}
          </div>
        </section>

        {/* Nuestra Historia */}
        <section
          className="relative py-20 px-6 mx-auto w-full overflow-hidden bg-cover bg-center text-white"
          style={{ backgroundImage: `url(${historiaImage})` }}
        >
          <div className="bg-black/60 ml-[12em] md:p-12 lg:max-w-lg rounded-xl">
            <h2 className="text-[38px] font-bold mb-4">Historia de TrackFit</h2>
            <div className="text-gray-100 space-y-4">
              {(showMore ? historiaParrafos : historiaParrafos.slice(0, 2)).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-4 text-[#FCA311] font-semibold hover:underline transition"
            >
              {showMore ? "Ver menos ▲" : "Ver más ▼"}
            </button>
          </div>
        </section>

        {/* Nuestro Equipo */}
        <section className="py-12 px-6 max-w-7xl w-full">
          <h2 className="text-[38px] text-[#14213D] font-bold text-center mb-8">Nuestro Equipo</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <TeamMember
                key={i}
                name={member.name}
                role={member.role}
                role2={member.role2}
                image={member.image}
                icon={member.icon}
              />
            ))}
          </div>
        </section>


        {/* Formulario de contacto */}
        <section className="py-12 px-6 w-full bg-[#E5E5E5]">
          <h2 className="text-[38px] text-[#14213D] font-bold text-center mb-8">¿Tienes preguntas? Contáctanos</h2>
          <ContactForm />
        </section>
      </div>
    </MainLayout>
  );
}

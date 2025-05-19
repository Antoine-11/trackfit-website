import React from "react";
import { motion } from "framer-motion";
import MainLayout from "../layouts/MainLayout";
import TrainingCard from "../components/TrainingCard";
import LastTraining from "../components/LastTraining";
import Slider from "../components/Slider";

import sliderImg from "../assets/images/man-tiredrag.jpg"

export default function Trainings() {
  const trainingLevels = [
    {
      title: "Entrenamiento Básico",
      description: "Ideal para principiantes. Incluye ejercicios de movilidad, fuerza ligera y cardio moderado.",
      contenido: (
        <div className="text-left space-y-4">
          <div>
            <h4 className="font-semibold">Lunes – Full Body 1</h4>
            <ul className="list-disc ml-5">
              <li>Sentadilla con peso corporal – 3x15</li>
              <li>Press banca en máquina – 3x12</li>
              <li>Remo en polea – 3x12</li>
              <li>Plancha – 3x30 seg</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Martes – Cardio + Core</h4>
            <ul className="list-disc ml-5">
              <li>30 min elíptica o caminadora</li>
              <li>Crunch abdominal – 3x20</li>
              <li>Elevaciones de piernas – 3x15</li>
              <li>Russian twists – 3x20</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Jueves – Full Body 2</h4>
            <ul className="list-disc ml-5">
              <li>Prensa de piernas – 3x15</li>
              <li>Jalón al pecho – 3x12</li>
              <li>Press de hombros – 3x12</li>
              <li>Puente de glúteos – 3x15</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Viernes – Cardio + Estiramiento</h4>
            <ul className="list-disc ml-5">
              <li>20-30 min bicicleta estática</li>
              <li>Estiramiento general guiado – 15 min</li>
              <li>Foam roller y respiración</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Entrenamiento Intermedio",
      description: "Perfecto para quienes ya tienen experiencia. Combinamos fuerza, resistencia y técnicas avanzadas.",
      contenido: (
        <div className="text-left space-y-4">
          <div>
            <h4 className="font-semibold">Lunes – Pecho</h4>
            <ul className="list-disc ml-5">
              <li>Press banca plano – 4x8</li>
              <li>Press inclinado mancuerna – 3x10</li>
              <li>Aperturas planas – 3x12</li>
              <li>Fondos asistidos – 3x10</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Martes – Espalda</h4>
            <ul className="list-disc ml-5">
              <li>Dominadas – 3x10</li>
              <li>Remo con barra – 4x10</li>
              <li>Jalón al pecho – 3x12</li>
              <li>Face pulls – 3x15</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Miércoles – Pierna</h4>
            <ul className="list-disc ml-5">
              <li>Sentadilla libre – 4x10</li>
              <li>Zancadas con mancuernas – 3x12</li>
              <li>Prensa – 3x15</li>
              <li>Curl femoral – 3x12</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Jueves – Hombros</h4>
            <ul className="list-disc ml-5">
              <li>Press militar – 4x8</li>
              <li>Elevaciones laterales – 3x15</li>
              <li>Remo al cuello – 3x12</li>
              <li>Pájaros – 3x15</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Viernes – Brazos</h4>
            <ul className="list-disc ml-5">
              <li>Curl con barra – 4x10</li>
              <li>Curl martillo – 3x12</li>
              <li>Press francés – 3x12</li>
              <li>Tríceps en polea – 3x15</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Entrenamiento Avanzado",
      description: "Alto rendimiento con cargas elevadas, intervalos intensos y planificación detallada.",
      contenido: (
        <div className="text-left space-y-4">
          <div>
            <h4 className="font-semibold">Lunes – Pecho</h4>
            <ul className="list-disc ml-5">
              <li>Press banca con barra – 4x8</li>
              <li>Press inclinado con mancuernas – 3x10</li>
              <li>Cruces en polea – 3x15</li>
              <li>Fondos – 3x10</li>
              <li>Pullover – 3x12</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Martes – Espalda</h4>
            <ul className="list-disc ml-5">
              <li>Dominadas lastradas – 4x8</li>
              <li>Remo T – 4x10</li>
              <li>Jalón al pecho – 3x12</li>
              <li>Remo máquina neutro – 3x12</li>
              <li>Face pulls – 3x15</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Miércoles – Piernas</h4>
            <ul className="list-disc ml-5">
              <li>Sentadilla libre – 4x8</li>
              <li>Prensa 45° – 4x10</li>
              <li>Hip thrust – 4x10</li>
              <li>Curl femoral – 3x12</li>
              <li>Extensión cuádriceps – 3x15</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Jueves – Hombros</h4>
            <ul className="list-disc ml-5">
              <li>Press militar barra – 4x8</li>
              <li>Elevaciones laterales – 4x15</li>
              <li>Frontales – 3x12</li>
              <li>Posteriores – 3x15</li>
              <li>Encogimientos – 3x12</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Viernes – Brazos</h4>
            <ul className="list-disc ml-5">
              <li>Curl barra Z – 4x10</li>
              <li>Curl banco inclinado – 3x12</li>
              <li>Martillo – 3x10</li>
              <li>Press francés – 4x10</li>
              <li>Extensión en polea – 3x15</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Sábado – Full Body Metabólico</h4>
            <ul className="list-disc ml-5">
              <li>Kettlebell swings – 3x20</li>
              <li>Push ups – 3x20</li>
              <li>Remo con mancuerna – 3x12</li>
              <li>Burpees – 3x15</li>
              <li>Mountain climbers – 3x30 seg</li>
            </ul>
          </div>
        </div>
      )
    },
  ];


  const lastTraining = {
    date: "28/04/2025",
    type: "Entrenamiento Intermedio",
    duration: "60 minutos",
    focus: "Resistencia y Core",
    trainer: "Carlos Ruiz",
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <MainLayout>
      {/* Slider */}
      <Slider heroImg={sliderImg} title="ENTRENAMIENTOS" />

      {/* Texto informativo */}
      <section className="px-6 py-12 max-w-4xl mx-auto text-center">
        <h2 className="text-[30px] text-[#14213D] font-bold mb-4">Planes adaptados a tu nivel</h2>
        <p className="text-[#14213D] text-[20px]">
          En TrackFit ofrecemos entrenamientos según tu experiencia y objetivos. Ya seas principiante o atleta, tenemos un plan para ti.
        </p>
      </section>

      {/* Grid de niveles de entrenamiento */}
      <section className="px-6 py-12 max-w-6xl mx-auto grid gap-8">
        {trainingLevels.map((level, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <TrainingCard
              title={level.title}
              description={level.description}
              contenido={level.contenido}
            />
          </motion.div>
        ))}
      </section>

      {/* Último entrenamiento registrado */}
      <LastTraining training={lastTraining} />
    </MainLayout>
  );
}

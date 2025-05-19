import { motion } from "framer-motion";
import MainLayout from "../layouts/MainLayout";
import Testimonial from "../components/Testimonial";
import Slider from "../components/Slider";
import FAQ from "../components/FAQ";

import infoImg from "../assets/images/cuerdas-home.jpg";
import sliderImage from "../assets/images/rack-cuerdas.jpg"
import testimonio1Img from "../assets/images/mujer-testimonio.jpg"
import testimonio2Img from "../assets/images/mujer-testimonio2.jpg"
import testimonio3Img from "../assets/images/hombre-testimonio.jpg"
import testimonio4Img from "../assets/images/hombre-mayor-gym.jpg"
import testimonio5Img from "../assets/images/principiante.jpg"

import Gallery from "../components/Gallery";
import img1 from "../assets/images/gym-sala.jpg";
import img2 from "../assets/images/gym-sala2.jpg";
import img3 from "../assets/images/crossfit.jpg";
import img4 from "../assets/images/man-cinta.jpg";
import img5 from "../assets/images/man-row.jpg";
import img6 from "../assets/images/man-tiredrag.jpg";
import img7 from "../assets/images/taquillas.jpg";
import img8 from "../assets/images/vestuarios.jpg";
import img9 from "../assets/images/duchas.jpg";


// Animación básica
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const images = [
  {
    src: img1,
    title: "Tren Superior",
    description: "Espacio equipado con máquinas Panatta de última generación para llevar tu tren superior al máximo nivel.",
  },
  {
    src: img2,
    title: "Tren Inferior",
    description: "Incluye máquinas como Sentadilla Hack, Prensa Oblicua, Vertical y Horizontal, Extensiones, Femoral tumbado, sentado y de pie, multipower, etc.",
  },
  {
    src: img3,
    title: "Peso Libre",
    description: "Para los aficionados del Powerlifting y/o Crossfit.",
  },
  {
    src: img4,
    title: "Cardio",
    description: "Para maximizar tu resistencia, mejorar tu fondo y ejercitar el sistema cardiovascular.",
  },
  {
    src: img5,
    title: "Crossfit/Calistenia",
    description: "Equipado con todo tipo de maquinaria para realizar ejercicios de resistencia, además de racks donde superarte a ti mismo en tus records calisténicos.",
  },
  {
    src: img6,
    title: "Fuerza",
    description: "Espacio totalmente libre donde podrás mejorar tu fuerza bruta y realizar entrenamientos de StrongMan con toda libertad.",
  },
  {
    src: img7,
    title: "Taquillas",
    description: "Proveemos de taquillas seguras por una cuota mensual o días sueltos.",
  },
  {
    src: img8,
    title: "Vestuarios",
    description: "Contamos con vestuarios totalmente seguros para nuestros clientes, en los cuales hay varios baños.",
  },
  {
    src: img9,
    title: "Duchas",
    description: "Nuestros socios también podrán hacer uso de nuestras duchas separadas por sexo una vez finalizado su entrenamiento.",
  },
];

export default function Home() {
  return (
    <MainLayout>
      {/* Slider/Hero */}
      <section className="bg-[#14213D]">
        <Slider heroImg={sliderImage} title="INICIA TU CAMINO" />
      </section>

      {/* Info general con animación */}
      <motion.section className="flex flex-col md:flex-row gap-8 py-14 items-center justify-between bg-[#14213D] text-white" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.8 }} >
        <motion.div className="md:w-1/2 px-12" variants={fadeUp} transition={{ duration: 1, delay: 0.2 }} >
          <h2 className="text-[38px] font-semibold mb-4 text-white">
            No cuentes los días, haz que los días cuenten.
          </h2>
          <p className="text-lg leading-relaxed">
            Te ayudamos a alcanzar tus metas con entrenadores especializados, clases dinámicas y un ambiente motivador. ¡Empieza hoy!
          </p>
          <br />
          <p className="text-lg leading-relaxed">
            En TrackFit no solo entrenas, te transformas. Descubre un gimnasio moderno con un ambiente único, donde todos, desde <strong className="text-[#FCA311]">principiantes</strong> hasta <strong className="text-[#FCA311]">atletas</strong>, encuentran su sitio.
            <br /><br />
            Entrena con la mejor tecnología en máquinas <strong className="text-[#FCA311]">Panatta</strong>, líderes en biomecánica y rendimiento, recién instaladas y listas para llevar tu cuerpo al siguiente nivel.
            <br /><br />
            Disfruta de un ambiente motivador, cercano y <strong className="text-[#FCA311]">sin prejuicios</strong>, donde cada persona cuenta. Nuestro equipo está para ayudarte desde el primer día.
            <br /><br />
            Nos encontramos en una ubicación cómoda y accesible, perfecta para que vengas caminando, en coche o transporte público. <strong className="text-[#FCA311]">¡Sin excusas!</strong>
          </p>
        </motion.div>

        <motion.div className="md:w-1/2" variants={fadeUp} transition={{ duration: 1, delay: 0.4 }} >
          <img src={infoImg} alt="Información" className="rounded-xl shadow-lg" />
        </motion.div>
      </motion.section>

      <div>
        {/* Otros componentes */}
        <Gallery seccion="Instalaciones" images={images} />
      </div>

      {/* Testimonios con animación */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} >
        <Testimonial imagen={testimonio1Img} nombre="- Laura G." opinion=' " Después de años probando gimnasios, finalmente encontré en TrackFit el equilibrio perfecto: 
        máquinas de última generación, ambiente motivador y entrenadores que realmente se preocupan por ti. Es más que un gimnasio, es una comunidad. " ' estilo="flex flex-col md:flex-row gap-10 max-w-7xl mx-auto px-6 py-10 italic" />
      </motion.div>

      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} >
        <Testimonial imagen={testimonio2Img} nombre="- María C." opinion=' " ¡Me encanta el buen rollo que se respira aquí! Desde el primer día me sentí bienvenida. 
        Las clases son súper dinámicas y los entrenadores te motivan a dar lo mejor. Además, está todo limpísimo y muy bien cuidado. " ' estilo="flex flex-col md:flex-row-reverse gap-10 max-w-7xl mx-auto px-6 py-10 italic" />
      </motion.div>

      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} >
        <Testimonial imagen={testimonio3Img} nombre="- Javier M." opinion=' " Lo que más valoro de TrackFit es la calidad de las máquinas Panatta y la atención personalizada. Se nota que han apostado por ofrecer lo mejor. 
        Da gusto entrenar aquí, cada día salgo con más ganas de volver. " ' estilo="flex flex-col md:flex-row gap-10 max-w-7xl mx-auto px-6 py-10 italic" />
      </motion.div>

      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} >
        <Testimonial imagen={testimonio4Img} nombre="- Antonio J. (63 años)" opinion=' " A mi edad pensé que ya no era momento de empezar en un gimnasio, pero en TrackFit me han demostrado lo contrario. 
        Me guiaron desde el primer día con paciencia y profesionalidad. Me siento más activo, fuerte y motivado que nunca. " ' estilo="flex flex-col md:flex-row-reverse gap-10 max-w-7xl mx-auto px-6 py-10 italic" />
      </motion.div>

      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} >
        <Testimonial imagen={testimonio5Img} nombre="- Jesús S. (22 años)" opinion=' " Es mi primer gimnasio y no podría haber elegido mejor. Todo el equipo es cercano, te explican bien cada ejercicio y te ayudan a no sentirte perdido. 
        ¡Me está enganchando el entrenamiento y cada vez me veo mejor! " ' estilo="flex flex-col md:flex-row gap-10 max-w-7xl mx-auto px-6 py-10 italic" />
      </motion.div>

      {/* FAQ con animación */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }} >
        <FAQ />
      </motion.div>
    </MainLayout>
  );
}

import MainLayout from "../layouts/MainLayout";
import ClassCard from "../components/ClassCard";
import classImg from "../assets/images/trackfit-home-one.jpg"; // Usa diferentes imágenes si tienes
import ContactForm from "../components/ContactForm";
import Slider from "../components/Slider";

export default function Classes() {
  const classes = [
    { title: "Cardio Intenso", description: "Quema calorías con sesiones de alta energía.", image: classImg },
    { title: "Yoga & Stretching", description: "Relaja mente y cuerpo con nuestras sesiones de yoga.", image: classImg },
    { title: "Entrenamiento Funcional", description: "Mejora tu fuerza y movilidad general.", image: classImg },
    { title: "Ciclo Indoor", description: "Clases de spinning con música y ritmo intenso.", image: classImg },
    { title: "HIIT", description: "Intervalos de alta intensidad para resultados rápidos.", image: classImg },
    { title: "Pilates", description: "Fortalece tu core con ejercicios controlados.", image: classImg },
  ];

  return (
    <MainLayout>
      {/* Slider */}
      <Slider title="CLASES COLECTIVAS" />

      {/* Grid de clases */}
      <section className="px-6 py-12 bg-white text-gray-900">
        <div className="grid md:grid-cols-2 gap-8">
          {classes.map((item, index) => (
            <ClassCard key={index} title={item.title} description={item.description} image={item.image} />
          ))}
        </div>
      </section>

      {/* Formulario de contacto */}
      <section className="px-6 py-12 bg-[#F5F5F5]">
        <h2 className="text-2xl font-semibold mb-6 text-center">¿Tienes dudas? Contáctanos</h2>
        <form className="max-w-2xl mx-auto grid gap-4">
          <ContactForm />
        </form>
      </section>
    </MainLayout>
  );
}

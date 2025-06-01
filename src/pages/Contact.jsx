import React from "react";
import MainLayout from "../layouts/MainLayout";
import ContactForm from "../components/ContactForm";
import LocationMap from "../components/LocationMap";


export default function Contact() {
  return (
    <MainLayout>
      
      {/* Mapa de Google */}
      <LocationMap link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805.1328581132276!2d-5.368865051839583!3d36.177955324379504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0cc103bf63758f%3A0x8ceb40ee505d39!2sXtremetraining%20sport%20center%20campo%20de%20Gibraltar!5e0!3m2!1ses!2ses!4v1746283143993!5m2!1ses!2ses" />

      {/* Información en tablas */}
      <section className="px-6 pb-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md border-[2px] border-[#FCA311] rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Horarios</h3>
            <table className="w-full text-left">
              <tbody>
                <tr><td>Lunes - Viernes</td><td>6:00 - 23:00</td></tr>
                <tr><td>Sábados</td><td>8:00 - 15:00</td></tr>
                <tr><td>Domingos</td><td>8:00 - 15:00</td></tr>
              </tbody>
            </table>
          </div>

          <div className="bg-white shadow-md border-[2px] border-[#FCA311] rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <table className="w-full text-left">
              <tbody>
                <tr><td>Teléfono</td><td>+34 600 123 456</td></tr>
                <tr><td>Email</td><td>info@trackfit.com</td></tr>
                <tr><td>Dirección</td><td>Av. Huelva, 7, 11314 Campamento, Cádiz</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section className="px-6 pb-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">¿Tienes dudas? Escríbenos</h2>
        <ContactForm />
      </section>
    </MainLayout>
  );
}

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Thanks() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-[#14213D] text-white px-6 text-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold text-[#FCA311] mb-6">
        ¡Gracias por contactarnos!
      </h1>
      <p className="text-lg md:text-xl mb-8 max-w-xl">
        Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible.
      </p>
      <Link
        to="/"
        className="bg-[#FCA311] text-[#14213D] px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition"
      >
        Volver al inicio
      </Link>
    </motion.div>
  );
}

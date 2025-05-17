import { motion } from "framer-motion";

export default function Slider({ title, heroImg }) {
  return (
    <section className="relative w-full h-[60vh] bg-transparent overflow-hidden">
      <motion.img
        src={heroImg}
        alt="Slider"
        className="w-full h-full object-cover rounded-br-[30%]"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute inset-0 flex items-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.4 }}
      >
        <div className="w-full h-full rounded-lg bg-[#14213D] bg-opacity-50 rounded-br-[30%]">
        <h1 className="absolute left-60 top-80 text-white text-4xl md:text-5xl font-bold">{title}</h1>
        </div>
      </motion.div>
    </section>
  );
}

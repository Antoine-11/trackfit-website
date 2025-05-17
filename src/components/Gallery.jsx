import { useState } from "react";
import { motion } from "framer-motion";

export default function Gallery({ images = [], seccion }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="bg-[#E5E5E5] py-12 px-4">
      <h2 className="text-[38px] font-semibold text-center mb-8 text-[#14213D]">{seccion}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {images.map(({ src, title, description }, index) => (
          <motion.div
            key={index}
            className="bg-[#14213D] rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            custom={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onClick={() => setSelectedImage(src)}
          >
            <img src={src} alt={title} className="w-full h-56 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-[22px] text-[#E59615] mb-1">{title}</h3>
              <p className="text-[16px] text-white">{description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Foto ampliada"
            className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}
    </section>
  );
}

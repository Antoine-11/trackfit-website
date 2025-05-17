import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function TrainingCard({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#FCA311]">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600">{description}</p>
        </div>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden mt-4"
          >
            <p className="mt-4 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl
            sagittis faucibus. Proin nec nisl id libero elementum blandit. Donec volutpat orci nec
            sem rutrum, a laoreet elit viverra.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

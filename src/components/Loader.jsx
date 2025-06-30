import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ onComplete }) => {
  const [blast, setBlast] = useState(false);

  useEffect(() => {
    const blastTimer = setTimeout(() => setBlast(true), 2000); // bomb shows 2s
    const finishTimer = setTimeout(() => onComplete(), 3000); // finish after 3s

    return () => {
      clearTimeout(blastTimer);
      clearTimeout(finishTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0  text-white/10 backdrop-blur-md flex items-center justify-center z-50 text-6xl font-bold"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {blast ? "💥" : "💣"}
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;

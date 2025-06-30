import { motion } from "framer-motion";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Hero />
    </motion.div>
  )
}

export default Home

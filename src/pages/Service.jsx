
import Service from '../components/Service';
import { motion, AnimatePresence } from "framer-motion";

const ServicePage = () => {
  return (
    <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className=' bg-gradient-to-br from-black via-gray-900 to-red-900 pl-10 pr-30 px-6 pb-6 pt-16 min-h-screen  text-white'
          >
            <Service />
          </motion.div>
    </AnimatePresence>
  
  )
}

export default ServicePage 

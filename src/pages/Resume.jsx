import Resume from '../components/Resume'
import { motion } from "framer-motion";

const ResumePage = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    >
      <Resume />
    </motion.div>
  )
}


export default ResumePage

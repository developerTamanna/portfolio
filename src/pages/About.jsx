import { motion } from 'framer-motion'
import About from '../components/About'

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className=' pl-10 pr-30 px-6 pt-16 bg-gradient-to-br from-black via-gray-900 to-red-900 text-white min-h-screen flex flex-col items-center justify-start'
    >
      <div className="full mx-auto text-center">
        <h2 className="text-4xl font-bold text-red-500 mb-8">🛠 Skills, Education & More</h2>
        <p className="text-xl text-gray-300 mb-12">
          Hi, I'm <span className="text-blue-400 font-semibold">Maruf Ahmmed</span>, a passionate developer with strong problem-solving ability and expertise in using ChatGPT & AI tools.
        </p>
     </div>
      <About />

    </motion.div>
  )
}

export default AboutPage

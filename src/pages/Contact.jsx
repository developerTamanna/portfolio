import React from 'react'
import ContactForm from '../components/ContactForm'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className='min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-red-900 flex flex-wrap items-start justify-center text-white py-14 space-y-10'>
        <h1 className='text-3xl font-bold w-full text-center'><span className='text-white'>Let's</span> <span className='text-red-500'>Connect.</span></h1>
        <ContactForm />
      </div>

    </motion.div>
  )
}

export default Contact

'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="py-12 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Transform Your Security Operations
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
          Experience the difference between traditional security operations
          and Simbian's revolutionary approach
        </p>
      </motion.div>
    </div>
  );
}
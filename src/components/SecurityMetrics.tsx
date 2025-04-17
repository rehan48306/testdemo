'use client';

import { motion } from 'framer-motion';
import { metrics } from '../data/mockData';

export default function SecurityMetrics() {
  return (
    <section className="py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center mb-12"
      >
        Performance Metrics
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {Object.entries(metrics.with).map(([key, value], index) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="p-6 rounded-lg bg-blue-900/20 border border-blue-800"
          >
            <h3 className="text-lg font-medium capitalize mb-4">
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </h3>
            <div className="flex justify-between items-center">
              <div className="text-red-400">
                <p className="text-sm">Without</p>
                <p className="text-xl font-bold">{metrics.without[key]}</p>
              </div>
              <div className="text-green-400">
                <p className="text-sm">With</p>
                <p className="text-xl font-bold">{value}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
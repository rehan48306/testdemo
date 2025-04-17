'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { alertCards, mockAlerts, progressSteps } from '@/data/mockData';
import { useState, useEffect } from 'react';
import { LiveAlert } from '@/types';
import { Icons } from './Icons';
import ProgressFlow from './ProgressFlow';

export default function ComparisonSection() {
  const [withoutLiveAlerts, setWithoutLiveAlerts] = useState<Record<string, LiveAlert[]>>({});
  const [counts, setCounts] = useState<Record<string, number>>(
    Object.fromEntries(alertCards.map(card => [card.title, card.count]))
  );
  
  useEffect(() => {
    const interval = setInterval(() => {
      alertCards.forEach(card => {
        const newAlert = {
          id: Date.now().toString(),
          message: mockAlerts[Math.floor(Math.random() * mockAlerts.length)],
          timestamp: new Date()
        };
        
        setWithoutLiveAlerts(prev => ({
          ...prev,
          [card.title]: [newAlert, ...(prev[card.title] || [])].slice(0, 3)
        }));

        setCounts(prev => ({
          ...prev,
          [card.title]: prev[card.title] + Math.floor(Math.random() * 3) + 1
        }));
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16">
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold mb-6"
          >
            Without Simbian
          </motion.h2>
          <div className="grid gap-6">
            {alertCards.map((card, index) => {
              const Icon = Icons[card.icon];
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-red-900/20 border border-red-800"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Icon className="w-6 h-6 text-red-400" />
                      <h3 className="text-xl font-semibold">{card.title}</h3>
                    </div>
                    <motion.span 
                      key={counts[card.title]}
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      className="text-2xl font-bold text-red-400"
                    >
                      {counts[card.title]}
                    </motion.span>
                  </div>
                  <p className="text-gray-400 mb-4">{card.description}</p>
                  <AnimatePresence>
                    {withoutLiveAlerts[card.title]?.map((alert) => (
                      <motion.div
                        key={alert.id}
                        initial={{ opacity: 0, height: 0, y: -20 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-sm text-gray-300 py-2 border-t border-red-800/50"
                      >
                        {alert.message}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold mb-6"
          >
            With Simbian
          </motion.h2>
          <ProgressFlow steps={progressSteps} />
          <div className="grid gap-6 mt-8">
            {alertCards.map((card, index) => {
              const Icon = Icons[card.icon];
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-green-900/20 border border-green-800"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Icon className="w-6 h-6 text-green-400" />
                      <h3 className="text-xl font-semibold">{card.title}</h3>
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="flex items-center gap-2"
                    >
                      <span className="text-2xl font-bold text-green-400">0</span>
                      <Icons.CheckCircle className="w-5 h-5 text-green-400" />
                    </motion.div>
                  </div>
                  <p className="text-gray-400">{card.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { AlertCard, LiveAlert } from '@/types';
import { mockAlerts } from '@/data/mockData';
import { Icons } from '../components/Icons';

interface AlertCardsProps {
  cards: AlertCard[];
  variant: 'with' | 'without';
}

export function AlertCards({ cards, variant }: AlertCardsProps) {
  const [liveAlerts, setLiveAlerts] = useState<Record<string, LiveAlert[]>>({});
  const [counts, setCounts] = useState<Record<string, number>>(
    Object.fromEntries(cards.map(card => [card.title, card.count]))
  );

  useEffect(() => {
    if (variant === 'without') {
      const interval = setInterval(() => {
        cards.forEach(card => {
          const newAlert = {
            id: Date.now().toString(),
            message: mockAlerts[Math.floor(Math.random() * mockAlerts.length)],
            timestamp: new Date()
          };
          
          setLiveAlerts(prev => ({
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
    }
  }, [variant, cards]);

  return (
    <div className="grid gap-6">
      {cards.map((card, index) => {
        const Icon = Icons[card.icon];
        const isWithVariant = variant === 'with';
        
        return (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ delay: index * 0.1 }}
            className={`p-6 rounded-xl border ${
              isWithVariant 
                ? 'bg-green-900/20 border-green-800' 
                : 'bg-red-900/20 border-red-800'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Icon className={`w-6 h-6 ${
                  isWithVariant ? 'text-green-400' : 'text-red-400'
                }`} />
                <h3 className="text-xl font-semibold">{card.title}</h3>
              </div>
              <motion.span 
                key={isWithVariant ? 'zero' : counts[card.title]}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                className={`text-2xl font-bold ${
                  isWithVariant ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {isWithVariant ? 0 : counts[card.title]}
              </motion.span>
            </div>
            <p className="text-gray-400 mb-4">{card.description}</p>
            <AnimatePresence>
              {!isWithVariant && liveAlerts[card.title]?.map((alert) => (
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
  );
}
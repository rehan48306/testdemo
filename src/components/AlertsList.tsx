'use client';

import { motion } from 'framer-motion';
import { alertsData } from '../data/mockData';
import { ExclamationCircleIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

interface AlertsListProps {
  type: 'with' | 'without';
}

export default function AlertsList({ type }: AlertsListProps) {
  const alerts = alertsData[type];

  return (
    <div className="space-y-4">
      {alerts.map((alert:any, index:any) => (
        <motion.div
          key={alert.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`p-4 rounded-lg ${
            type === 'with' ? 'bg-green-800/30' : 'bg-red-800/30'
          }`}
        >
          <div className="flex items-center gap-3">
            {type === 'with' ? (
              <ShieldCheckIcon className="w-6 h-6 text-green-400" />
            ) : (
              <ExclamationCircleIcon className="w-6 h-6 text-red-400" />
            )}
            <div>
              <p className="font-medium">{alert.message}</p>
              <p className="text-sm text-gray-300">
                Detection Time: {alert.timeToDetect}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
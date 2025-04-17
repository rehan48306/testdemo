'use client';

import { motion } from 'framer-motion';
import { Icons } from './Icons';
import type { IconName } from './Icons';

interface ProgressStep {
  title: string;
  description: string;
  icon: IconName;
}

interface ProgressFlowProps {
  steps: ProgressStep[];
}

export default function ProgressFlow({ steps }: ProgressFlowProps) {
  return (
    <div className="relative">
      {steps.map((step, index) => {
        const Icon = Icons[step.icon];
        return (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="flex items-start gap-4 mb-6"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-green-900/50 flex items-center justify-center">
                <Icon className="w-5 h-5 text-green-400" />
              </div>
              {index < steps.length - 1 && (
                <div className="absolute top-10 left-1/2 w-0.5 h-12 bg-green-800 -translate-x-1/2" />
              )}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-400">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
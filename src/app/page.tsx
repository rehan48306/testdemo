'use client';

import { motion } from 'framer-motion';
import ComparisonSection from '@/components/ComparisonSection';
import SecurityMetrics from '@/components/SecurityMetrics';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-gray-900 to-black text-white">
      <Hero />
      <div className="container mx-auto px-4 py-6">
        <ComparisonSection />
        <SecurityMetrics />
      </div>
    </main>
  );
}
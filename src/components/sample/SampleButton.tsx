import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';

export const SampleButton: React.FC = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Buttons</h3>
      <div className="flex flex-wrap gap-3">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button variant="default">Primary Action</Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button variant="secondary">Secondary</Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button variant="outline">Outline</Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button variant="ghost">Ghost</Button>
        </motion.div>
      </div>
    </div>
  );
};
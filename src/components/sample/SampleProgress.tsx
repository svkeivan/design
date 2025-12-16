import React from 'react';
import { motion } from 'motion/react';

export const SampleProgress: React.FC = () => {
  const progressItems = [
    { label: 'Assessment Completion', value: 85 },
    { label: 'Skill Development', value: 60 },
    { label: 'Client Satisfaction', value: 92 },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Progress Indicators</h3>
      <div className="space-y-4">
        {progressItems.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="space-y-2"
          >
            <div className="flex justify-between text-sm">
              <span>{item.label}</span>
              <span className="font-medium">{item.value}%</span>
            </div>
            <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${item.value}%` }}
                transition={{ duration: 1, delay: index * 0.2 }}
              />
            </div>
          </motion.div>
        ))}

        {/* Circular Progress */}
        <div className="flex justify-center gap-8 mt-8">
          {[75, 45, 90].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="relative w-20 h-20"
            >
              <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  className="text-muted"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  className="text-primary"
                  strokeLinecap="round"
                  initial={{ strokeDasharray: `${2 * Math.PI * 40}`, strokeDashoffset: `${2 * Math.PI * 40}` }}
                  animate={{ strokeDashoffset: `${2 * Math.PI * 40 * (1 - value / 100)}` }}
                  transition={{ duration: 1.5, delay: 0.8 + index * 0.2 }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-medium">{value}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
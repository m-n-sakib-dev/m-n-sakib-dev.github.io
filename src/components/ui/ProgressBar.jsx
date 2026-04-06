import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ProgressBar({ name, level }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{name}</span>
        <span className="text-xs font-mono font-semibold text-purple-600 dark:text-purple-400">
          {level}%
        </span>
      </div>
      <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: 'linear-gradient(90deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
          }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
        />
      </div>
    </div>
  );
}

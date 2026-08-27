import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ProgressBar({ name, level }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-baseline mb-1.5">
        <span className="text-[13px] text-slate-700 dark:text-slate-200">{name}</span>
        <span className="text-[13px] text-primary font-semibold tabular-nums">{level}%</span>
      </div>
      <div className="h-2.5 w-full bg-slate-200 dark:bg-white/10 border border-slate-300/70 dark:border-white/10 overflow-hidden">
        <motion.div
          className="h-full bg-primary"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        />
      </div>
    </div>
  );
}

import { motion } from 'framer-motion';

const CELLS = 14;

export default function ProgressBar({ name, level }) {
  const filled = Math.round((level / 100) * CELLS);
  const bar = '█'.repeat(filled) + '░'.repeat(Math.max(0, CELLS - filled));

  return (
    <motion.div
      className="mb-2.5 flex items-center gap-3 text-[13px] leading-none"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.6 }}
      transition={{ duration: 0.25 }}
    >
      <span className="w-32 sm:w-40 shrink-0 truncate text-slate-600 dark:text-slate-300">
        {name}
      </span>
      <span className="text-primary tracking-[-0.5px] select-none" aria-hidden="true">
        {bar}
      </span>
      <span className="ml-auto tabular-nums text-slate-400 dark:text-slate-500">
        {String(level).padStart(3, ' ')}%
      </span>
    </motion.div>
  );
}

import { motion } from 'framer-motion';

export default function SectionTitle({ label, title, subtitle }) {
  return (
    <motion.div
      className="mb-14 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      {label && (
        <span className="inline-block text-xs font-mono font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
          {label}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-base sm:text-lg">
          {subtitle}
        </p>
      )}
      <div className="mt-5 flex items-center justify-center gap-2">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500" />
        <div className="h-1.5 w-1.5 rounded-full bg-purple-500" />
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500" />
      </div>
    </motion.div>
  );
}

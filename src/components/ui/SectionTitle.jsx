import { motion } from 'framer-motion';

export default function SectionTitle({ label, title, subtitle }) {
  return (
    <motion.div
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      {label && (
        <div className="mb-3 text-xs tracking-[0.25em] uppercase text-slate-500 dark:text-slate-500">
          <span className="text-primary">//</span> {label}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white leading-tight">
        <span className="text-primary">$ </span>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400 max-w-2xl">
          <span className="text-slate-400 dark:text-slate-600">#</span> {subtitle}
        </p>
      )}
      <div className="term-rule mt-6" />
    </motion.div>
  );
}

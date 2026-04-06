import { motion } from 'framer-motion';
import { experiences } from '../../data';
import SectionTitle from '../ui/SectionTitle';

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-slate-50 dark:bg-transparent">
      <div className="container-main">
        <SectionTitle
          label="Experience"
          title="Work History"
          subtitle="My professional journey in software engineering."
        />

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-cyan-500 to-transparent" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              className={`relative flex gap-6 md:gap-0 mb-10 last:mb-0 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="relative z-10 flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2 mt-1 md:mt-5">
                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold ${
                  exp.type === 'current'
                    ? 'border-purple-500 bg-purple-500 text-white shadow-lg shadow-purple-500/30'
                    : 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-500'
                }`}>
                  {exp.type === 'current' ? '●' : '○'}
                </div>
              </div>

              <div className={`md:w-1/2 pl-14 md:pl-0 ${
                i % 2 === 0
                  ? 'md:pr-12 md:text-right'
                  : 'md:pl-12 md:text-left'
              }`}>
                <div className={`rounded-2xl p-5 border border-slate-200 dark:border-white/10 bg-white glass shadow-md dark:shadow-none card-hover ${
                  exp.type === 'current' ? 'glow-primary' : ''
                }`}>
                  {exp.type === 'current' && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      Current
                    </span>
                  )}
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                  <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-0.5">{exp.company}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mb-4">{exp.period}</p>
                  <ul className={`space-y-2 ${i % 2 === 0 ? 'md:text-left' : ''}`}>
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

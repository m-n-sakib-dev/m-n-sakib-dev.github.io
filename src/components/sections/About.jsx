import { motion } from 'framer-motion';
import { personalInfo, education, achievements, languages } from '../../data';
import SectionTitle from '../ui/SectionTitle';

const stats = [
  { value: '6+', label: 'Years Coding' },
  { value: '6+', label: 'Projects Built' },
  { value: '40–50%', label: 'Query Speedup' },
  { value: '10+', label: 'Tech Stacks' },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-transparent">
      <div className="container-main">
        <SectionTitle label="About Me" title="Who I Am" />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <motion.div
              className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-50 glass shadow-md"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-[4/3] flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-cyan-50 dark:from-purple-900/20 dark:to-cyan-900/20">
                {/* Profile / about image — replace with: <img src="about-image.jpg" alt="Nazmul Sakib" className="w-full h-full object-cover" /> */}
                <svg className="w-24 h-24 text-purple-200 dark:text-purple-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-xs text-slate-400 dark:text-slate-600 font-mono mt-2">about / photo here</span>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl p-4 text-center border border-slate-200 dark:border-white/10 bg-white glass"
                >
                  <p className="text-2xl font-extrabold gradient-text">{s.value}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {personalInfo.profile}
              </p>

              <div className="flex flex-wrap gap-3 mb-6 text-sm text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">{personalInfo.email}</a>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">Education</h3>
              <div className="space-y-2">
                {education.map((e) => (
                  <div key={e.degree} className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0" />
                    <div>
                      <p className="text-lg font-semibold text-slate-800 dark:text-slate-200">{e.degree}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{e.institution} · {e.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">Achievements</h3>
              <div className="space-y-1.5">
                {achievements.map((a) => (
                  <div key={a} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <span className="text-amber-500 mt-0.5">★</span>
                    <span>{a}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((l) => (
                  <span key={l.name} className="text-xs px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white glass text-slate-600 dark:text-slate-300">
                    {l.name} <span className="text-slate-400 dark:text-slate-500">· {l.level}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

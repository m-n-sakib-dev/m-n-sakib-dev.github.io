import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillGroups } from '../../data';
import SectionTitle from '../ui/SectionTitle';
import ProgressBar from '../ui/ProgressBar';

export default function Skills() {
  const [active, setActive] = useState(0);

  return (
    <section id="skills" className="section-padding">
      <div className="container-main">
        <SectionTitle
          label="Skills"
          title="Technical Expertise"
          subtitle="A breakdown of my technical skills across the full stack."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {skillGroups.map((group, i) => (
            <motion.button
              key={group.category}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${
                active === i
                  ? 'bg-purple-600 text-white border-purple-600 shadow-lg shadow-purple-500/20'
                  : 'border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 bg-white glass hover:border-purple-400 dark:hover:border-purple-500'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-mono text-xs">{group.icon}</span>
              {group.category}
            </motion.button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="rounded-2xl p-6 border border-slate-200 dark:border-white/10 bg-white glass shadow-md dark:shadow-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <span className="font-mono text-lg text-purple-600 dark:text-purple-400">
                    {skillGroups[active].icon}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {skillGroups[active].category}
                </h3>
              </div>
              {skillGroups[active].skills.map((skill) => (
                <ProgressBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="grid grid-cols-2 gap-4">
            {skillGroups.map((group, i) => (
              <motion.div
                key={group.category}
                className={`rounded-2xl p-4 border cursor-pointer transition-all duration-200 ${
                  active === i
                    ? 'border-purple-400 dark:border-purple-500/50 bg-purple-50 dark:bg-purple-900/20'
                    : 'border-slate-200 dark:border-white/10 bg-white glass hover:border-purple-300 dark:hover:border-purple-600/40'
                }`}
                onClick={() => setActive(i)}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="text-xl mb-2 font-mono text-purple-600 dark:text-purple-400">
                  {group.icon}
                </div>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1">
                  {group.category}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-500">
                  {group.skills.length} skills
                </p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {group.skills.slice(0, 2).map((s) => (
                    <span key={s.name} className="text-xs px-1.5 py-0.5 rounded bg-slate-100 dark:bg-white/8 text-slate-500 dark:text-slate-500">
                      {s.name.split('/')[0].trim()}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function ProjectCard({ project, index }) {
  const navigate = useNavigate();

  return (
    <motion.div
      className="group relative rounded-2xl overflow-hidden cursor-pointer card-hover
        bg-white glass border border-slate-200 dark:border-white/10
        shadow-md dark:shadow-none"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => navigate(`/project/${project.id}`)}
    >
      {/* Project thumbnail image placeholder */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-100 to-cyan-100 dark:from-purple-900/30 dark:to-cyan-900/30">
        {project.displayImg ? (<img src={project.displayImg} alt="..." className="w-full h-full object-cover" />
        ) : (<><div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-40 dark:opacity-30">
          <svg className="w-12 h-12 text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">project screenshot</span>
        </div></>)}


        <div className="absolute top-3 right-3">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/80 dark:bg-black/40 backdrop-blur-sm text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/30">
            {project.badge}
          </span>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-xs text-white font-medium">Click to view details →</span>
        </div>
      </div>

      <div className="p-5">
        <div className="mb-1">
          <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
            {project.category}
          </span>
        </div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-0.5">
          {project.title}
        </h3>
        <p className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-2">
          {project.subtitle}
        </p>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">
          {project.shortDesc}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/8 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-xs px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/8 text-slate-500 dark:text-slate-500">
              +{project.tech.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

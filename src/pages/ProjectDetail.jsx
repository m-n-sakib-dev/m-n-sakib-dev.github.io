import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data';

function BackIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

const screenshotLabels = [
  'Main / Home view',
  'Core feature view',
  'Detail / Inner page',
  'Admin / Dashboard view',
  'Mobile responsive view',
];

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Project not found</h2>
        <button
          onClick={() => navigate('/')}
          className="btn-primary px-6 py-2.5 rounded-xl text-sm font-semibold"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const screenshotCount = Math.max(project.screenshots?.length || 0, 3);

  return (
    <div className="min-h-screen pt-20">
      <div className="container-main py-12">
        <motion.button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors mb-8 group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="group-hover:-translate-x-1 transition-transform">
            <BackIcon />
          </span>
          Back to projects
        </motion.button>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">{project.category}</span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">
                  {project.badge}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-1">
                {project.title}
              </h1>
              <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold mb-5">{project.subtitle}</p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{project.longDesc}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Screenshots</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {Array.from({ length: screenshotCount }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 bg-gradient-to-br from-purple-50 to-cyan-50 dark:from-purple-900/20 dark:to-cyan-900/20 aspect-video flex flex-col items-center justify-center gap-2"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  >
                    {/* Replace each div with: <img src="screenshot-{i+1}.png" alt="{screenshotLabels[i]}" className="w-full h-full object-cover" /> */}
                    <svg className="w-10 h-10 text-slate-300 dark:text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-xs text-slate-400 dark:text-slate-600 font-mono text-center px-4">
                      {screenshotLabels[i] || `Screenshot ${i + 1}`}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="rounded-2xl p-5 border border-slate-200 dark:border-white/10 bg-white glass shadow-md dark:shadow-none">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/30 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl p-5 border border-slate-200 dark:border-white/10 bg-white glass shadow-md dark:shadow-none space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">Links</h3>
              {project.liveLink ? (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 w-full btn-primary px-4 py-2.5 rounded-xl text-sm font-semibold justify-center"
                >
                  <ExternalIcon />
                  Live Demo
                </a>
              ) : (
                <div className="flex items-center gap-2 w-full px-4 py-2.5 rounded-xl text-sm font-medium justify-center border border-slate-200 dark:border-white/10 text-slate-400 dark:text-slate-600 cursor-not-allowed">
                  <ExternalIcon />
                  Live Demo (coming soon)
                </div>
              )}
              {project.githubLink ? (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 w-full btn-outline px-4 py-2.5 rounded-xl text-sm font-semibold justify-center"
                >
                  <GithubIcon />
                  View on GitHub
                </a>
              ) : (
                <div className="flex items-center gap-2 w-full px-4 py-2.5 rounded-xl text-sm font-medium justify-center border border-slate-200 dark:border-white/10 text-slate-400 dark:text-slate-600 cursor-not-allowed">
                  <GithubIcon />
                  GitHub (private)
                </div>
              )}
            </div>

            <div className="rounded-2xl p-5 border border-slate-200 dark:border-white/10 bg-white glass shadow-md dark:shadow-none">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">Category</h3>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{project.category}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

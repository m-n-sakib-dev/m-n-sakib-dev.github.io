import { motion } from 'framer-motion';
import { personalInfo } from '../../data';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-20 dark:opacity-10 bg-purple-400 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full opacity-20 dark:opacity-10 bg-cyan-400 blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-10 dark:opacity-5 bg-violet-500 blur-3xl" />
      </div>

      <div className="container-main py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={item} className="mb-4">
              <span className="inline-flex items-center gap-2 text-sm font-mono font-medium px-4 py-1.5 rounded-full border border-purple-300 dark:border-purple-500/40 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1 variants={item} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900 dark:text-white mb-4">
              Hi, I&apos;m{' '}
              <span className="gradient-text block sm:inline">
                Nazmul Sakib
              </span>
            </motion.h1>

            <motion.p variants={item} className="text-xl sm:text-2xl font-semibold text-slate-600 dark:text-slate-300 mb-5">
              Full-Stack Software Engineer
            </motion.p>

            <motion.p variants={item} className="text-base text-slate-500 dark:text-slate-400 leading-relaxed mb-8 max-w-lg">
              B.Sc. CS graduate from CUET. Building production-level full-stack features with
              Laravel, Nuxt, React and FastAPI. Passionate about clean architecture and shipping fast with AI-assisted workflows.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-3 mb-10">
              <button
                onClick={scrollToProjects}
                className="btn-primary px-6 py-3 rounded-xl font-semibold text-sm"
              >
                View Projects
              </button>
              <button
                onClick={scrollToContact}
                className="btn-outline px-6 py-3 rounded-xl font-semibold text-sm"
              >
                Get in Touch
              </button>
            </motion.div>

            <motion.div variants={item} className="flex items-center gap-6">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hidden lg:flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative">
              <div className="w-72 h-72 rounded-3xl overflow-hidden border-2 border-purple-300 dark:border-purple-500/30 shadow-2xl glow-primary float-animation">
                {/* Profile photo — replace with: <img src="your-photo.jpg" alt="Nazmul Sakib" className="w-full h-full object-cover" /> */}
                <div className="w-full h-full bg-gradient-to-br from-purple-100 via-violet-100 to-cyan-100 dark:from-purple-900/40 dark:via-violet-900/40 dark:to-cyan-900/40 flex flex-col items-center justify-center gap-3">
                  <svg className="w-20 h-20 text-purple-300 dark:text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">profile photo here</span>
                </div>
              </div>

              <motion.div
                className="absolute -top-4 -right-4 bg-white dark:glass rounded-2xl px-3 py-2 shadow-lg dark:shadow-black/20 border border-slate-100 dark:border-white/10"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">⚡</span>
                  <div>
                    <p className="text-xs font-bold text-slate-800 dark:text-white">CI/CD Pipeline</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Zero-touch deploy</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-white dark:glass rounded-2xl px-3 py-2 shadow-lg dark:shadow-black/20 border border-slate-100 dark:border-white/10"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">🚀</span>
                  <div>
                    <p className="text-xs font-bold text-slate-800 dark:text-white">40–50% Faster</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Query optimization</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-600">
          <span className="text-xs">Scroll</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}

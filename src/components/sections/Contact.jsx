import { motion } from 'framer-motion';
import { personalInfo } from '../../data';
import SectionTitle from '../ui/SectionTitle';

const contactItems = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'mdsakib.ndc17@gmail.com',
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone',
    value: '+880 1631891718',
    href: `tel:${personalInfo.phone}`,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Location',
    value: '72/A Maniknagar, Dhaka-1203',
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-slate-50 dark:bg-transparent">
      <div className="container-main">
        <SectionTitle
          label="Contact"
          title="Let's Connect"
          subtitle="Open for full-time roles, freelance projects, or just a chat."
        />

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Get in Touch</h3>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
              I&apos;m currently open to new opportunities. Whether you have a question,
              a project proposal, or just want to say hello — my inbox is always open.
            </p>

            <div className="space-y-3 pt-2">
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-500 mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-3">
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white glass text-sm text-slate-700 dark:text-slate-300 hover:border-purple-400 dark:hover:border-purple-500 transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </motion.a>
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white glass text-sm text-slate-700 dark:text-slate-300 hover:border-blue-400 dark:hover:border-blue-500 transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="rounded-2xl p-6 border border-slate-200 dark:border-white/10 bg-white glass shadow-md dark:shadow-none"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">Quick Message</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = `mailto:${personalInfo.email}`;
              }}
              className="space-y-3"
            >
              <div>
                <label className="text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-3 py-2.5 rounded-xl text-sm border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500 dark:focus:border-purple-500 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-3 py-2.5 rounded-xl text-sm border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500 dark:focus:border-purple-500 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-600 dark:text-slate-400 block mb-1">Message</label>
                <textarea
                  rows={4}
                  placeholder="Your message..."
                  className="w-full px-3 py-2.5 rounded-xl text-sm border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500 dark:focus:border-purple-500 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full btn-primary px-4 py-2.5 rounded-xl text-sm font-semibold"
              >
                Send via Email
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

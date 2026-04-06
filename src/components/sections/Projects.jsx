import { motion } from 'framer-motion';
import { projects } from '../../data';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-main">
        <SectionTitle
          label="Projects"
          title="Things I've Built"
          subtitle="A selection of projects from production work to personal experiments."
        />

        <motion.div
          className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

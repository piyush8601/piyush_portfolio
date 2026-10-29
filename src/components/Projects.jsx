import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <motion.article
            key={project.title}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{
              duration: 0.65,
              delay: (index % 2) * 0.14,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: false, amount: 0.25 }}
            className="group overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950/60 transition-all duration-300 hover:-translate-y-1 hover:border-purple-800 hover:shadow-xl hover:shadow-purple-950/20"
          >
            <img
              src={project.image}
              alt={`${project.title} project`}
              className="h-40 w-full bg-neutral-900 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="p-4">
              <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-base font-semibold text-neutral-100">
                  {project.title}
                </h3>
                {project.isInternal ? (
                  <span className="rounded-full border border-purple-800/70 bg-purple-950/50 px-3 py-1 text-xs font-medium text-purple-300">
                    Enterprise Project
                  </span>
                ) : project.link ? (
                  <a
                    className="flex shrink-0 items-center gap-1 text-sm text-yellow-400 hover:underline"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title}`}
                  >
                    View project <FiExternalLink />
                  </a>
                ) : null}
              </div>
              <p className="text-sm leading-5 text-neutral-400">
                {project.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded bg-neutral-900 px-2.5 py-1 text-xs font-medium text-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
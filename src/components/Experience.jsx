import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section className="border-b border-neutral-900 pb-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>
      <div className="mx-auto flex max-w-5xl flex-col gap-5">
        {EXPERIENCES.map((exp, index) => {
          const responsibilities = exp.description
            .split("•")
            .map((item) => item.trim())
            .filter(Boolean);
          const hasBulletPoints = responsibilities.length > 1;

          return (
            <motion.article
              key={`${exp.company}-${exp.role}`}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              transition={{
                duration: 0.65,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: false, amount: 0.25 }}
              className="grid gap-5 rounded-xl border border-neutral-800 bg-neutral-950/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-800 hover:shadow-xl hover:shadow-purple-950/20 sm:p-6 md:grid-cols-[180px_minmax(0,1fr)]"
            >
              <div className="md:border-r md:border-neutral-800 md:pr-5">
                <span className="inline-flex rounded-full border border-purple-800/60 bg-purple-950/40 px-3 py-1 text-xs font-medium text-purple-300">
                  {exp.year}
                </span>
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold text-neutral-100">
                  {exp.role}
                </h3>
                <p className="mt-1 text-sm font-medium text-purple-200">
                  {exp.company}
                </p>
                {hasBulletPoints ? (
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-neutral-400 marker:text-purple-400">
                    {responsibilities.map((responsibility) => (
                      <li key={responsibility}>{responsibility}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-4 text-sm leading-6 text-neutral-400">
                    {exp.description}
                  </p>
                )}
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-neutral-900 px-2.5 py-1 text-xs font-medium text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;

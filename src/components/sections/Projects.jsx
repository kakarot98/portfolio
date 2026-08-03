import { motion, useReducedMotion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa';
import Section from '../ui/Section';
import Reveal from '../layout/Reveal';
import repos from '../../data/pinnedRepos.json';

/** Pick black or white text so a language tag stays readable on its brand color. */
function getContrastingColor(hex) {
  if (!hex) return '#333333';

  const value = hex.replace('#', '');
  const r = parseInt(value.substr(0, 2), 16);
  const g = parseInt(value.substr(2, 2), 16);
  const b = parseInt(value.substr(4, 2), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  return luminance > 0.5 ? '#1A1A1A' : '#FFFFFF';
}

const Projects = () => {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="projects" kicker="Things I've built" title="Projects">
      <div className="grid gap-5 sm:grid-cols-2">
        {repos.map((project, index) => (
          <Reveal key={project.repo} delay={index * 0.05}>
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={reduceMotion ? {} : { y: -3 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="flex h-full flex-col rounded-xl border border-line bg-secondary p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              <div className="mb-3 flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-text">{project.repo}</h3>
                <FaGithub aria-hidden="true" className="mt-1 flex-shrink-0 text-muted" />
              </div>

              <p className="mb-6 line-clamp-3 flex-grow text-[15px] leading-relaxed text-muted">
                {project.description || 'No description available.'}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                {project.language && (
                  <span
                    className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
                    style={{
                      backgroundColor: project.languageColor || '#CCCCCC',
                      color: getContrastingColor(project.languageColor),
                    }}
                  >
                    {project.language}
                  </span>
                )}

                <span className="flex items-center gap-1.5 text-sm text-muted">
                  <FaStar aria-hidden="true" className="text-xs" />
                  <span className="tabular-nums">{project.stars}</span>
                  <span className="sr-only">stars</span>
                </span>

                <span className="flex items-center gap-1.5 text-sm text-muted">
                  <FaCodeBranch aria-hidden="true" className="text-xs" />
                  <span className="tabular-nums">{project.forks}</span>
                  <span className="sr-only">forks</span>
                </span>
              </div>
            </motion.a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Projects;

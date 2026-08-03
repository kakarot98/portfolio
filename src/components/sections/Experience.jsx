import Section from '../ui/Section';
import Reveal from '../layout/Reveal';
import experience from '../../data/experienceData.json';

const Experience = () => (
  <Section id="experience" kicker="Where I've worked" title="Experience">
    <ol className="relative border-l border-line pl-6 sm:pl-8">
      {experience.map((role, index) => (
        <Reveal
          key={`${role.company}-${role.dates}`}
          as="li"
          delay={index * 0.05}
          className="relative pb-12 last:pb-0"
        >
          {/* Timeline node */}
          <span
            aria-hidden="true"
            className={`absolute -left-[calc(1.5rem+4.5px)] top-2 h-2.5 w-2.5 rounded-full sm:-left-[calc(2rem+4.5px)] ${
              role.current ? 'bg-accentDeep ring-4 ring-accent/35' : 'bg-line ring-4 ring-primary'
            }`}
          />

          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <h3 className="text-lg font-semibold text-text">
              {role.title}
              <span className="text-muted"> · </span>
              <span className="font-medium text-accentDeep">{role.company}</span>
            </h3>
            <p className="flex-shrink-0 text-sm tabular-nums text-muted">{role.dates}</p>
          </div>

          <ul className="mt-4 space-y-2.5">
            {role.details.map((detail) => (
              <li key={detail} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                <span aria-hidden="true" className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </ol>
  </Section>
);

export default Experience;

import Section from '../ui/Section';
import Reveal from '../layout/Reveal';
import education from '../../data/educationData.json';

const Education = () => (
  <Section id="education" kicker="Where I studied" title="Education">
    <div className="grid gap-5 sm:grid-cols-2">
      {education.map((entry, index) => (
        <Reveal
          key={entry.institution}
          delay={index * 0.05}
          className="rounded-xl border border-line bg-secondary p-6 shadow-sm"
        >
          <h3 className="text-lg font-semibold text-text">{entry.institution}</h3>
          <p className="mt-1 text-[15px] text-accentDeep">{entry.degree}</p>
          <p className="mt-1 text-sm tabular-nums text-muted">{entry.duration}</p>

          <h4 className="mt-5 text-xs font-semibold uppercase tracking-wider text-muted">
            Relevant coursework
          </h4>
          <p className="mt-2 text-[15px] leading-relaxed text-muted">
            {entry.coursework.join(', ')}
          </p>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Education;

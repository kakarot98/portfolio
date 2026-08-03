import Section from '../ui/Section';
import Reveal from '../layout/Reveal';
import Chip from '../ui/Chip';
import skillGroups from '../../data/skillsData.json';

const Skills = () => (
  <Section id="skills" kicker="What I work with" title="Skills">
    <div className="grid gap-10 sm:grid-cols-2">
      {skillGroups.map((group, index) => (
        <Reveal key={group.title} delay={index * 0.05}>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">
            {group.title}
          </h3>
          <ul className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <li key={skill}>
                <Chip>{skill}</Chip>
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Skills;

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import profile from '../../data/profileData.json';
import photo from '../../assets/profile_glasses.jpg';

const links = (social) => [
  { href: social.github, label: 'GitHub', Icon: FaGithub },
  { href: social.linkedin, label: 'LinkedIn', Icon: FaLinkedin },
  { href: `mailto:${social.email}`, label: 'Email', Icon: HiOutlineMail },
];

/**
 * LCP element — rendered eagerly with no entry animation so it paints immediately.
 */
const Hero = () => {
  const { name, title, roles, blurb, social } = profile;

  return (
    <section
      id="about"
      className="mx-auto w-full max-w-content px-5 pb-4 pt-14 sm:px-8 md:pb-10 md:pt-20"
    >
      <div className="flex flex-col-reverse items-start gap-8 md:flex-row md:items-center md:justify-between md:gap-14">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accentDeep">
            {title}
          </p>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-text sm:text-5xl">
            {name}
          </h1>

          <p className="mt-4 text-base text-muted">{roles.join(' · ')}</p>

          <p className="mt-6 text-lg leading-relaxed text-text">{blurb}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {links(social).map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                {...(href.startsWith('mailto:')
                  ? {}
                  : { target: '_blank', rel: 'noopener noreferrer' })}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-secondary px-4 py-2 text-sm font-medium text-text transition-colors duration-200 hover:border-accent hover:text-accentDeep"
              >
                <Icon aria-hidden="true" className="text-base" />
                {label}
              </a>
            ))}
          </div>
        </div>

        <img
          src={photo}
          alt={name}
          width="176"
          height="176"
          decoding="async"
          className="h-32 w-32 flex-shrink-0 rounded-full border border-line object-cover shadow-sm sm:h-44 sm:w-44"
        />
      </div>
    </section>
  );
};

export default Hero;

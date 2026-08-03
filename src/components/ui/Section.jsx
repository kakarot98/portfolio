import Reveal from '../layout/Reveal';

/**
 * Anchor target + consistent vertical rhythm + section heading.
 * `id` doubles as the nav scroll-spy target.
 */
const Section = ({ id, title, kicker, children, className = '' }) => (
  <section id={id} className={`mx-auto w-full max-w-content px-5 py-14 sm:px-8 md:py-20 ${className}`}>
    <Reveal>
      <header className="mb-10 md:mb-12">
        {kicker && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accentDeep">
            {kicker}
          </p>
        )}
        <h2 className="text-2xl font-bold tracking-tight text-text md:text-3xl">{title}</h2>
        <div className="mt-4 h-px w-full bg-line" />
      </header>
    </Reveal>
    {children}
  </section>
);

export default Section;

import { motion, useReducedMotion } from 'framer-motion';

/**
 * Single entry-animation wrapper used by every section. Fades and lifts content
 * into view once, then never animates again. Renders a plain div when the user
 * has asked for reduced motion.
 */
const Reveal = ({ children, className = '', delay = 0, as = 'div' }) => {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.4, ease: 'easeOut', delay }}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;

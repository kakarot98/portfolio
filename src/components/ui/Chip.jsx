/**
 * Small pill used for skills and project language tags.
 */
const Chip = ({ children, className = '' }) => (
  <span
    className={`inline-flex items-center rounded-full border border-accent/70 bg-accent/20 px-3 py-1 text-sm font-medium text-text ${className}`}
  >
    {children}
  </span>
);

export default Chip;

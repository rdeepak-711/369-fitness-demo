const Spinner = ({ className = 'w-6 h-6 border-2' }) => (
  <span className={`inline-block animate-spin rounded-full border-current border-r-transparent ${className}`} />
);

export default Spinner;



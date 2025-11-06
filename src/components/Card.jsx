const Card = ({ className = '', children }) => (
  <div className={`bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${className}`}>
    {children}
  </div>
);

export default Card;



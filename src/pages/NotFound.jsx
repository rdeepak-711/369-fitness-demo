import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="pt-24 pb-20 container mx-auto px-5 text-center">
    <h1 className="font-heading text-5xl mb-4">404</h1>
    <p className="text-gray-600 mb-8">The page you are looking for was not found.</p>
    <Link to="/" className="btn-primary">Go Home</Link>
  </div>
);

export default NotFound;



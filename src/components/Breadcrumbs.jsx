import { Link, useLocation } from 'react-router-dom';

const labelMap = {
  'about': 'About',
  'programs': 'Programs',
  'membership': 'Membership',
  'wellness': 'Wellness',
  'testimonials': 'Testimonials',
  'contact': 'Contact',
  'admin': 'Admin',
  'privacy': 'Privacy',
  'terms': 'Terms',
};

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length === 0) return null;
  let pathAcc = '';
  return (
    <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
      <ol className="flex items-center gap-2">
        <li><Link to="/" className="hover:text-brand-red">Home</Link></li>
        {parts.map((seg, idx) => {
          pathAcc += `/${seg}`;
          const isLast = idx === parts.length - 1;
          const label = labelMap[seg] || seg;
          return (
            <li key={idx} className="flex items-center gap-2">
              <span>/</span>
              {isLast ? (
                <span className="text-brand-black font-medium">{label}</span>
              ) : (
                <Link to={pathAcc} className="hover:text-brand-red">{label}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;



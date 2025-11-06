import SEO from '../components/SEO';

const Privacy = () => {
  return (
    <div className="pt-24 pb-20 container mx-auto px-5">
      <SEO title="Privacy Policy" description="How we collect, use, and protect your information at 369 Fitness Wellness." path="/privacy" />
      <h1 className="font-heading text-4xl mb-6">Privacy Policy</h1>
      <p className="text-gray-700 mb-4">We respect your privacy. This policy explains what data we collect and how we use it.</p>
      <h2 className="font-heading text-2xl mt-8 mb-3">What we collect</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Contact details you submit (name, email, phone, preferred time, message)</li>
        <li>Technical data like device, browser, and general analytics</li>
      </ul>
      <h2 className="font-heading text-2xl mt-8 mb-3">How we use your data</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>To contact you for trial bookings or service updates</li>
        <li>To improve our services and website experience</li>
      </ul>
      <h2 className="font-heading text-2xl mt-8 mb-3">Your choices</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Request data deletion or export by contacting us</li>
        <li>Opt out of marketing communications at any time</li>
      </ul>
      <p className="text-gray-700 mt-8">For questions, email us at <a className="text-brand-red" href="mailto:info@369fitnesswellness.com">info@369fitnesswellness.com</a>.</p>
    </div>
  );
};

export default Privacy;



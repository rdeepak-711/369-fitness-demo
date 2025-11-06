const ShareButtons = ({ url = (typeof window !== 'undefined' ? window.location.href : ''), text = '369 Fitness Wellness' }) => {
  const twitter = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
  const facebook = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  const whatsapp = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`;
  return (
    <div className="flex items-center gap-3">
      <a className="btn-secondary px-3 py-2 text-sm" href={twitter} target="_blank" rel="noreferrer">Share on X</a>
      <a className="btn-secondary px-3 py-2 text-sm" href={facebook} target="_blank" rel="noreferrer">Share on Facebook</a>
      <a className="btn-secondary px-3 py-2 text-sm" href={whatsapp} target="_blank" rel="noreferrer">Share on WhatsApp</a>
    </div>
  );
};

export default ShareButtons;



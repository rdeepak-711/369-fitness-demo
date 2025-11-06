import { useEffect, useState } from 'react';

const Admin = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [key, setKey] = useState(localStorage.getItem('adminKey') || '');
  const [input, setInput] = useState('');
  const [showPwd, setShowPwd] = useState(false);

  useEffect(() => {
    async function fetchBookings() {
      try {
        if (!key) { setLoading(false); return; }
        const res = await fetch('/api/bookings', { headers: { 'x-admin-key': key } });
        if (!res.ok) throw new Error('Failed to load bookings');
        const data = await res.json();
        setBookings(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    fetchBookings();
    // On unmount (navigating away), clear admin session to require login again
    return () => {
      localStorage.removeItem('adminKey');
    };
  }, [key]);

  const login = (e) => {
    e.preventDefault();
    if (!input) return;
    localStorage.setItem('adminKey', input);
    setKey(input);
  };

  const logout = () => {
    localStorage.removeItem('adminKey');
    setKey('');
    setBookings([]);
  };

  const markContacted = async (id) => {
    try {
      const res = await fetch(`/api/bookings/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', 'x-admin-key': key },
        body: JSON.stringify({ status: 'contacted' })
      });
      if (!res.ok) throw new Error('Update failed');
      const { booking } = await res.json();
      setBookings(prev => prev.map(b => b.id === booking.id ? booking : b));
    } catch (e) {
      alert(e.message);
    }
  };

  const exportCsv = async () => {
    try {
      const res = await fetch('/api/bookings.csv', { headers: { 'x-admin-key': key } });
      if (!res.ok) throw new Error('Export failed');
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'bookings.csv';
      a.click();
      URL.revokeObjectURL(url);
    } catch (e) {
      alert(e.message);
    }
  };

  const sendTestEmail = async () => {
    try {
      const res = await fetch('/api/test-email', { method: 'POST', headers: { 'x-admin-key': key } });
      if (!res.ok) throw new Error('Test email failed');
      alert('Test email sent');
    } catch (e) {
      alert(e.message);
    }
  };

  if (!key) {
    return (
      <div className="pt-32 md:pt-40 pb-20 container mx-auto px-5 max-w-md">
        <h1 className="font-heading text-3xl mb-6">Admin Login</h1>
        <form onSubmit={login} className="space-y-4 bg-white p-6 rounded shadow">
          <div>
            <label className="block text-sm font-semibold mb-2">Admin Password</label>
            <div className="relative">
              <input
                type={showPwd ? 'text' : 'password'}
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                className="w-full pr-12 pl-4 py-3 border rounded"
                placeholder="Enter admin password"
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPwd(s => !s)}
                className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-600 hover:text-brand-red"
                aria-label={showPwd ? 'Hide password' : 'Show password'}
              >
                {showPwd ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.94 10.94 0 0 1 12 20C7 20 2.73 16.11 1 12a11.21 11.21 0 0 1 5.17-5.83"/><path d="M22.54 11.88A11.05 11.05 0 0 0 12 4a10.39 10.39 0 0 0-1.61.13"/><path d="M10.73 5.08A11.05 11.05 0 0 0 1 12c.64 1.64 2.7 4.46 6 6"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z"/><circle cx="12" cy="12" r="3"/></svg>
                )}
              </button>
            </div>
          </div>
          <button className="btn-primary w-full">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 container mx-auto px-5">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-heading text-3xl">Admin - Bookings</h1>
        <div className="flex gap-2">
          <button onClick={exportCsv} className="btn-secondary">Export CSV</button>
          <button onClick={sendTestEmail} className="btn-secondary">Send Test Email</button>
          <button onClick={logout} className="btn-secondary">Logout</button>
        </div>
      </div>
      {loading && <div>Loading...</div>}
      {error && <div className="text-red-600">{error}</div>}
      {!loading && !error && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-brand-light text-left">
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Preferred Time</th>
                <th className="p-3">Message</th>
                <th className="p-3">Created</th>
                <th className="p-3">Status</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr key={b.id} className="border-t">
                  <td className="p-3">{b.name}</td>
                  <td className="p-3">{b.email}</td>
                  <td className="p-3">{b.phone}</td>
                  <td className="p-3">{b.preferredTime || '—'}</td>
                  <td className="p-3 max-w-xs truncate" title={b.message || ''}>{b.message || '—'}</td>
                  <td className="p-3 text-sm text-gray-600">{new Date(b.createdAt).toLocaleString()}</td>
                  <td className="p-3">{b.status}</td>
                  <td className="p-3">
                    {b.status !== 'contacted' && (
                      <button onClick={() => markContacted(b.id)} className="btn-primary px-3 py-1 text-sm">Mark Contacted</button>
                    )}
                  </td>
                </tr>
              ))}
              {bookings.length === 0 && (
                <tr>
                  <td className="p-4" colSpan={5}>No bookings yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Admin;



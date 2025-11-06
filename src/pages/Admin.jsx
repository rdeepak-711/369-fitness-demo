import { useEffect, useState } from 'react';

const Admin = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchBookings() {
      try {
        const res = await fetch('/api/bookings');
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
  }, []);

  return (
    <div className="pt-24 pb-20 container mx-auto px-5">
      <h1 className="font-heading text-3xl mb-6">Admin - Bookings</h1>
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
                <th className="p-3">Created</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr key={b.id} className="border-t">
                  <td className="p-3">{b.name}</td>
                  <td className="p-3">{b.email}</td>
                  <td className="p-3">{b.phone}</td>
                  <td className="p-3">{b.preferredTime || '—'}</td>
                  <td className="p-3 text-sm text-gray-600">{new Date(b.createdAt).toLocaleString()}</td>
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



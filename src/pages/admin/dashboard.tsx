import React, { useEffect, useState } from 'react';
import axios from 'axios';

type Lead = any;

const AdminDashboard = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState('');

  const token = typeof window !== 'undefined' ? localStorage.getItem('gh_token') : null;

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await axios.get('/api/leads', { headers: { Authorization: `Bearer ${token}` } });
      setLeads(res.data);
    } catch (e) {
      console.error(e);
    } finally { setLoading(false); }
  };

  useEffect(() => { fetchLeads(); }, []);

  const updateStatus = async (id: number, status: string) => {
    await axios.put(`/api/leads/${id}`, { status }, { headers: { Authorization: `Bearer ${token}` } });
    fetchLeads();
  };

  const deleteLead = async (id: number) => {
    if (!confirm('Delete lead?')) return;
    await axios.delete(`/api/leads/${id}`, { headers: { Authorization: `Bearer ${token}` } });
    fetchLeads();
  };

  const filtered = filter ? leads.filter(l => l.caseType === filter) : leads;

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <div className="mt-4 flex gap-3 items-center">
        <select onChange={e => setFilter(e.target.value)} className="border p-2">
          <option value="">All</option>
          <option>Notice</option>
          <option>Refund</option>
          <option>ITC</option>
          <option>Audit</option>
          <option>Other</option>
        </select>
        <button className="bg-gray-100 p-2" onClick={fetchLeads}>{loading ? 'Refreshing...' : 'Refresh'}</button>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Phone</th>
              <th className="border px-4 py-2">Case</th>
              <th className="border px-4 py-2">Created</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((l) => (
              <tr key={l.id}>
                <td className="border px-4 py-2">{l.id}</td>
                <td className="border px-4 py-2">{l.name}</td>
                <td className="border px-4 py-2">{l.phone}</td>
                <td className="border px-4 py-2">{l.caseType}</td>
                <td className="border px-4 py-2">{new Date(l.createdAt).toLocaleString()}</td>
                <td className="border px-4 py-2">
                  <select defaultValue={l.status} onChange={(e) => updateStatus(l.id, e.target.value)} className="border p-1">
                    <option value="NEW">New</option>
                    <option value="IN_REVIEW">In Review</option>
                    <option value="CONTACTED">Contacted</option>
                    <option value="CLOSED">Closed</option>
                  </select>
                </td>
                <td className="border px-4 py-2">
                  <button onClick={() => window.open(`/api/leads/${l.id}`, '_blank')} className="mr-2 text-sm text-blue-600">View</button>
                  <button onClick={() => deleteLead(l.id)} className="text-sm text-red-600">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
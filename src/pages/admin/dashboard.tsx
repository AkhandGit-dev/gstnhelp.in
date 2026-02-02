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

  const getStatusColor = (status: string) => {
    if (status === 'NEW') return 'bg-blue-100 text-blue-800';
    if (status === 'IN_REVIEW') return 'bg-yellow-100 text-yellow-800';
    if (status === 'CONTACTED') return 'bg-green-100 text-green-800';
    return 'bg-gray-100 text-gray-800';
  };

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
        <button className="bg-white border px-4 py-2 rounded hover:bg-gray-50" onClick={fetchLeads}>{loading ? 'Refreshing...' : 'Refresh'}</button>
      </div>

      <div className="mt-6 overflow-x-auto shadow ring-1 ring-black ring-opacity-5 rounded-lg">
        <table className="min-w-full divide-y divide-gray-300 bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Case</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filtered.map((l) => (
              <tr key={l.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">#{l.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{l.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{l.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{l.caseType}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(l.createdAt).toLocaleDateString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <select 
                    defaultValue={l.status} 
                    onChange={(e) => updateStatus(l.id, e.target.value)} 
                    className={`text-xs font-semibold rounded-full px-2 py-1 border-0 ${getStatusColor(l.status)}`}
                  >
                    <option value="NEW">New</option>
                    <option value="IN_REVIEW">In Review</option>
                    <option value="CONTACTED">Contacted</option>
                    <option value="CLOSED">Closed</option>
                  </select>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button onClick={() => window.open(`/api/leads/${l.id}`, '_blank')} className="text-indigo-600 hover:text-indigo-900 mr-4">View</button>
                  <button onClick={() => deleteLead(l.id)} className="text-red-600 hover:text-red-900">Delete</button>
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
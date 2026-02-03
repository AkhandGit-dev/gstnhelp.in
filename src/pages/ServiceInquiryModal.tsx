import React, { useState } from 'react';
import axios from 'axios';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
}

const ServiceInquiryModal: React.FC<Props> = ({ isOpen, onClose, serviceName }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = new FormData();
      payload.append('name', formData.name);
      payload.append('phone', formData.phone);
      payload.append('email', formData.email);
      payload.append('caseType', serviceName);
      payload.append('description', `Inquiry for service: ${serviceName}`);
      payload.append('preferredContact', 'Phone');

      await axios.post('/api/leads', payload);
      setStep('success');
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 animate-fade-in">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl font-bold">
          ✕
        </button>
        
        {step === 'success' ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">✓</div>
            <h3 className="text-2xl font-bold text-gray-800">Thank You!</h3>
            <p className="mt-2 text-gray-600">
              We have received your request for <strong>{serviceName}</strong>. 
              Our GST expert will contact you soon.
            </p>
            <button onClick={onClose} className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Close
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-bold text-gray-900 mb-1">Avail Service</h3>
            <p className="text-sm text-blue-600 font-medium mb-6">{serviceName}</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  required 
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input 
                  required 
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  placeholder="Enter 10-digit number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  required 
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  placeholder="name@example.com"
                />
              </div>
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-blue-900 text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition disabled:opacity-70 mt-2"
              >
                {loading ? 'Submitting...' : 'Request Callback'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceInquiryModal;
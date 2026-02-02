import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

type FormValues = {
  name: string;
  email?: string;
  phone: string;
  gstin?: string;
  caseType: string;
  refNumber?: string;
  amount?: string;
  description?: string;
  preferredContact: string;
  files?: FileList;
  recaptchaToken?: string;
};

const LeadForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({ defaultValues: { caseType: 'Notice', preferredContact: 'Phone' } });
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    setServerError(null);
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([k, v]) => {
        if (!v) return;
        if (k === 'files' && v instanceof FileList) {
          for (let i = 0; i < v.length; i++) formData.append('files', v[i]);
        } else {
          formData.append(k, String(v));
        }
      });

      // optional: attach reCAPTCHA token here
      const res = await axios.post('/api/leads', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
      if (res.status === 201) {
        reset();
        window.location.href = '/thank-you?ref=' + res.data.id;
      }
    } catch (err: any) {
      setServerError(err?.response?.data?.message || 'An error occurred');
    } finally { setLoading(false); }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input {...register('name', { required: 'Name is required' })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2" placeholder="John Doe" />
          {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input {...register('email', { pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email' } })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2" placeholder="john@company.com" />
          {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input {...register('phone', { required: 'Phone is required' })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2" placeholder="+91 98765 43210" />
          {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">GSTIN</label>
          <input {...register('gstin')} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2" placeholder="Optional" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Case Type</label>
          <select {...register('caseType')} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2 bg-white">
            <option>Notice</option>
            <option>Refund</option>
            <option>ITC</option>
            <option>Audit</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Notice Ref / Refund Type</label>
          <input {...register('refNumber')} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Amount Involved (₹)</label>
          <input {...register('amount')} type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Description of the issue</label>
        <textarea {...register('description')} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2" rows={4} placeholder="Please describe the notice or refund issue briefly..."></textarea>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Upload supporting documents</label>
        <input type="file" multiple {...register('files')} className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Preferred contact method</label>
        <select {...register('preferredContact')} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2 bg-white">
          <option>Phone</option>
          <option>Email</option>
          <option>WhatsApp</option>
        </select>
      </div>

      {/* Placeholder for reCAPTCHA - implement with your site key on production */}

      {serverError && <p className="text-red-600">{serverError}</p>}

      <div className="flex gap-3">
        <button type="submit" disabled={loading} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md shadow transition-colors disabled:bg-blue-300">
          {loading ? 'Submitting...' : 'Submit Case for Review'}
        </button>
        <a href="https://wa.me/919999999999" className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 font-medium flex items-center justify-center">WhatsApp Us</a>
      </div>
    </form>
  );
};

export default LeadForm;
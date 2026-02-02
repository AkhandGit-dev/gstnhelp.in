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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-6 rounded shadow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Full Name</label>
          <input {...register('name', { required: 'Name is required' })} className="mt-1 w-full border p-2 rounded" />
          {errors.name && <p className="text-red-600 text-sm">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input {...register('email', { pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email' } })} className="mt-1 w-full border p-2 rounded" />
          {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">Phone</label>
          <input {...register('phone', { required: 'Phone is required' })} className="mt-1 w-full border p-2 rounded" />
          {errors.phone && <p className="text-red-600 text-sm">{errors.phone.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">GSTIN</label>
          <input {...register('gstin')} className="mt-1 w-full border p-2 rounded" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium">Case Type</label>
          <select {...register('caseType')} className="mt-1 w-full border p-2 rounded">
            <option>Notice</option>
            <option>Refund</option>
            <option>ITC</option>
            <option>Audit</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Notice Ref / Refund Type</label>
          <input {...register('refNumber')} className="mt-1 w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium">Amount Involved</label>
          <input {...register('amount')} className="mt-1 w-full border p-2 rounded" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">Description</label>
        <textarea {...register('description')} className="mt-1 w-full border p-2 rounded" rows={5}></textarea>
      </div>

      <div>
        <label className="block text-sm font-medium">Upload supporting documents</label>
        <input type="file" multiple {...register('files')} className="mt-1" />
      </div>

      <div>
        <label className="block text-sm font-medium">Preferred contact</label>
        <select {...register('preferredContact')} className="mt-1 w-full border p-2 rounded">
          <option>Phone</option>
          <option>Email</option>
          <option>WhatsApp</option>
        </select>
      </div>

      {/* Placeholder for reCAPTCHA - implement with your site key on production */}

      {serverError && <p className="text-red-600">{serverError}</p>}

      <div className="flex gap-3">
        <button type="submit" disabled={loading} className="bg-green-600 text-white px-4 py-2 rounded">{loading ? 'Submitting...' : 'Submit Case'}</button>
        <a href="https://wa.me/919999999999" className="px-4 py-2 border rounded">Quick WhatsApp</a>
      </div>
    </form>
  );
};

export default LeadForm;
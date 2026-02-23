import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';

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
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    setServerError(null);

    if (!captchaToken) {
      setServerError('Please complete the reCAPTCHA verification.');
      setLoading(false);
      return;
    }

    try {
      // Prepare the success URL
      const successUrl = (id: string) => `/thank-you?ref=${id}`;
      
      // Helper to call the global gtagSendEvent if it exists, otherwise fallback
      const triggerConversion = (url: string) => {
        if (typeof window !== 'undefined' && (window as any).gtagSendEvent) {
          (window as any).gtagSendEvent(url);
        } else {
          window.location.href = url;
        }
      };

      const formData = new FormData();
      Object.entries(data).forEach(([k, v]) => {
        if (!v) return;
        if (k === 'files' && v instanceof FileList) {
          for (let i = 0; i < v.length; i++) formData.append('files', v[i]);
        } else {
          formData.append(k, String(v));
        }
      });

      if (captchaToken) {
        formData.append('recaptchaToken', captchaToken);
      }

      // Fix: Do NOT set Content-Type manually for FormData. 
      // Axios/Browser will set it automatically with the correct boundary.
      const res = await axios.post('/api/leads', formData);
      if (res.status === 201) {
        reset();
        setCaptchaToken(null);
        recaptchaRef.current?.reset();
        triggerConversion(successUrl(res.data.id));
      }
    } catch (err: any) {
      setServerError(err?.response?.data?.message || 'An error occurred');
    } finally { setLoading(false); }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-500"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
          <input {...register('name', { required: 'Name is required' })} className="w-full rounded-lg border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 p-3 text-sm" placeholder="John Doe" />
          {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
          <input {...register('email', { pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email' } })} className="w-full rounded-lg border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 p-3 text-sm" placeholder="john@company.com" />
          {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Phone <span className="text-red-500">*</span></label>
          <input {...register('phone', { required: 'Phone is required' })} className="w-full rounded-lg border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 p-3 text-sm" placeholder="+91 98765 43210" />
          {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">GSTIN</label>
          <input {...register('gstin')} className="w-full rounded-lg border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 p-3 text-sm" placeholder="Optional" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Case Type</label>
          <select {...register('caseType')} className="w-full rounded-lg border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 p-3 text-sm">
            <option>Notice</option>
            <option>Refund</option>
            <option>ITC</option>
            <option>Audit</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Ref No.</label>
          <input {...register('refNumber')} className="w-full rounded-lg border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 p-3 text-sm" placeholder="e.g. ZA..." />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Amount (₹)</label>
          <input {...register('amount')} type="number" className="w-full rounded-lg border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 p-3 text-sm" placeholder="Approx Value" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Description of the issue</label>
        <textarea {...register('description')} className="w-full rounded-lg border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 p-3 text-sm" rows={4} placeholder="Please describe the notice or refund issue briefly..."></textarea>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Upload Documents</label>
        <input type="file" multiple {...register('files')} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-colors cursor-pointer" />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Preferred contact method</label>
        <select {...register('preferredContact')} className="w-full rounded-lg border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 p-3 text-sm">
          <option>Phone</option>
          <option>Email</option>
          <option>WhatsApp</option>
        </select>
      </div>

      <div className="mt-4">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
          onChange={(token) => setCaptchaToken(token)}
        />
      </div>

      {serverError && <p className="text-red-600">{serverError}</p>}

      <div className="flex gap-3">
        <button type="submit" disabled={loading} className="flex-1 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed">
          {loading ? 'Submitting...' : 'Submit Case for Review'}
        </button>
        <a href="https://wa.me/918793552739?text=Hello%20I%20am%20visiting%20gstnhelp.in%20and%20need%20GST%20assistance" className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-bold flex items-center justify-center transition-colors">WhatsApp</a>
      </div>
    </form>
  );
};

export default LeadForm;
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  phone: string;
  gstin?: string;
  caseType: string;
  refNumber?: string;
  amount?: string;
  description: string;
  files: FileList;
};

const LeadForm: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>();
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onSubmit = async (data: FormData) => {
    setSubmitStatus('idle');
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('caseType', data.caseType);
    formData.append('description', data.description);
    if (data.gstin) formData.append('gstin', data.gstin);
    if (data.refNumber) formData.append('refNumber', data.refNumber);
    if (data.amount) formData.append('amount', data.amount);
    
    if (data.files && data.files.length > 0) {
      for (let i = 0; i < data.files.length; i++) {
        formData.append('files', data.files[i]);
      }
    }

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        body: formData,
      });
      if (!res.ok) throw new Error('Submission failed');
      setSubmitStatus('success');
      reset();
    } catch (e) {
      console.error(e);
      setSubmitStatus('error');
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="text-green-600 text-5xl mb-4">✓</div>
        <h3 className="text-2xl font-bold text-gray-800">Case Submitted Successfully!</h3>
        <p className="mt-2 text-gray-600">Our experts will review your details and contact you shortly.</p>
        <button onClick={() => setSubmitStatus('idle')} className="mt-6 text-blue-600 underline">Submit another case</button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-100">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Submit Case for Free Review</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
            <input {...register('name', { required: true })} className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Your Name" />
            {errors.name && <span className="text-red-500 text-xs">Required</span>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
            <input {...register('phone', { required: true })} className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="9876543210" />
            {errors.phone && <span className="text-red-500 text-xs">Required</span>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input {...register('email')} type="email" className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="you@company.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">GSTIN (Optional)</label>
            <input {...register('gstin')} className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="GST Number" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Case Type *</label>
          <select {...register('caseType', { required: true })} className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none bg-white">
            <option value="">Select Issue Type...</option>
            <option value="Notice">GST Notice Reply</option>
            <option value="Refund">GST Refund Delay</option>
            <option value="ITC">ITC Mismatch / Blocked ITC</option>
            <option value="Audit">Department Audit</option>
            <option value="Other">Other / Advisory</option>
          </select>
          {errors.caseType && <span className="text-red-500 text-xs">Required</span>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Notice/Ref No. (if any)</label>
            <input {...register('refNumber')} className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. ZA..." />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Amount Involved (₹)</label>
            <input {...register('amount')} type="number" className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Approx amount" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Issue Description *</label>
          <textarea {...register('description', { required: true })} rows={3} className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Briefly describe your issue..."></textarea>
          {errors.description && <span className="text-red-500 text-xs">Required</span>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Upload Documents (Notice/Screenshots)</label>
          <input {...register('files')} type="file" multiple className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
          <p className="text-xs text-gray-400 mt-1">Max 8MB. PDF, JPG, PNG allowed.</p>
        </div>

        <div className="pt-2">
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-blue-900 text-white font-bold py-3 px-4 rounded hover:bg-blue-800 transition disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Case for Free Review'}
          </button>
        </div>

        <p className="text-xs text-center text-gray-500 mt-4">
          🔒 Your data is 100% confidential and secure.
        </p>
      </form>
    </div>
  );
};

export default LeadForm;
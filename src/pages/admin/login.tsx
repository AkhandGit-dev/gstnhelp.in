import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/router';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    try {
      const res = await axios.post('/api/auth/login', data);
      localStorage.setItem('gh_token', res.data.token);
      router.push('/admin/dashboard');
    } catch (e: any) {
      alert(e?.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold">Admin Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 max-w-md">
        <div>
          <label className="block">Email</label>
          <input {...register('email')} className="w-full border p-2" />
        </div>
        <div className="mt-3">
          <label className="block">Password</label>
          <input type="password" {...register('password')} className="w-full border p-2" />
        </div>
        <div className="mt-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
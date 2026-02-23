import React from 'react';

const Testimonial: React.FC<{ name: string; text: string }>= ({name, text}) => {
  return (
    <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 relative">
      <div className="absolute top-6 left-6 text-blue-100 text-6xl font-serif leading-none -z-0">“</div>
      <div className="relative z-10">
        <p className="text-gray-600 leading-relaxed italic">"{text}"</p>
        <p className="mt-6 font-bold text-gray-900 border-t border-gray-100 pt-4">— {name}</p>
      </div>
    </div>
  );
};

export default Testimonial;
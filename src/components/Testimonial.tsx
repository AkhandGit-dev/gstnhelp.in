import React from 'react';

const Testimonial: React.FC<{ name: string; text: string }>= ({name, text}) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 relative">
      <div className="absolute top-4 left-4 text-blue-50 text-5xl font-serif leading-none -z-0">“</div>
      <div className="relative z-10">
        <p className="text-gray-600 text-sm leading-relaxed italic">"{text}"</p>
        <p className="mt-4 font-bold text-gray-900 border-t border-gray-100 pt-3 text-sm">— {name}</p>
      </div>
    </div>
  );
};

export default Testimonial;
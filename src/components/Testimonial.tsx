import React from 'react';

const Testimonial: React.FC<{ name: string; text: string }>= ({name, text}) => {
  return (
    <div className="p-4 bg-white rounded shadow">
      <p className="text-sm">"{text}"</p>
      <p className="mt-3 font-semibold">— {name}</p>
    </div>
  );
};

export default Testimonial;
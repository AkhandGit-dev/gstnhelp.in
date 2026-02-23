import React from 'react';

const ServiceCard: React.FC<{ title: string; desc: string; price?: string; onAvail?: () => void }> = ({title, desc, price, onAvail}) => {
  return (
    <div className="p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-all duration-300 flex flex-col h-full bg-white hover:-translate-y-1">
      <h3 className="font-bold text-lg text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 flex-grow leading-relaxed">{desc}</p>
      {price && <p className="mt-3 font-semibold text-blue-700 bg-blue-50 inline-block px-3 py-1 rounded-full text-xs w-fit">Estimated: {price}</p>}
      
      <button onClick={onAvail} className="mt-5 w-full bg-gray-900 text-white py-2.5 rounded-lg hover:bg-blue-600 transition-colors text-sm font-bold">
        Avail Service
      </button>
    </div>
  );
};

export default ServiceCard;
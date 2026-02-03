import React from 'react';

const ServiceCard: React.FC<{ title: string; desc: string; price?: string; onAvail?: () => void }> = ({title, desc, price, onAvail}) => {
  return (
    <div className="p-6 border rounded hover:shadow flex flex-col h-full bg-white">
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 flex-grow">{desc}</p>
      {price && <p className="mt-3 font-semibold">Estimated: {price}</p>}
      
      <button onClick={onAvail} className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition text-sm font-semibold">
        Avail Service
      </button>
    </div>
  );
};

export default ServiceCard;
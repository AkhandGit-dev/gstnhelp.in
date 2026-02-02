import React from 'react';

const ServiceCard: React.FC<{ title: string; desc: string; price?: string }>= ({title, desc, price}) => {
  return (
    <div className="p-6 border rounded hover:shadow">
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
      {price && <p className="mt-3 font-semibold">Estimated: {price}</p>}
    </div>
  );
};

export default ServiceCard;
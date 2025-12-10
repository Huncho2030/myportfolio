import React from 'react';

export function ServiceCard({ icon, title, description, features }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
      <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
        {icon}
      </div>
      <h3 className="mb-3 text-slate-900">{title}</h3>
      <p className="text-slate-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-slate-600 flex items-start gap-2">
            <span className="text-indigo-600 mt-1">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

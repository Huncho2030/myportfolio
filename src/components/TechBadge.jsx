import React from 'react';

export function TechBadge({ name, icon }) {
  return (
    <div className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full inline-flex items-center gap-2 hover:bg-indigo-200 transition-colors">
      {icon}
      <span>{name}</span>
    </div>
  );
}

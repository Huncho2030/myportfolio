import React from 'react';

export function Button({ children, variant = 'primary', onClick, href, className = '' }) {
  const baseClasses = 'px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2';
  
  const variantClasses = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
    secondary: 'bg-slate-700 text-white hover:bg-slate-800',
    outline: 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} download={href.includes('cv') || href.includes('resume')}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

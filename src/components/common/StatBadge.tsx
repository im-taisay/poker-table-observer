'use client';
import React from 'react';

export type StatBadgeProps = {
  value?: number | string | null;
  label: string;
  colorClass?: string; // e.g. 'text-yellow-400'
  bgClass?: string; // e.g. 'bg-slate-800'
  minWidth?: string; // e.g. 'min-w-[56px]'
};

export const StatBadge = ({
  value,
  label,
  colorClass = 'text-white',
  bgClass = 'bg-slate-800',
  minWidth = 'min-w-[56px]',
}: StatBadgeProps) => {
  const display = value === undefined || value === null || value === '' ? '-' : value;
  return (
    <div className={`${bgClass} px-2 py-1 rounded ${minWidth} text-center`}>
      <div className={`text-sm font-bold ${colorClass} tabular-nums`}>
        {display}
        {typeof display === 'number' ? '%' : ''}
      </div>
      <div className="text-xs text-gray-300">{label}</div>
    </div>
  );
};

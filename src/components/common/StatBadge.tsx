'use client';
import React from 'react';

export type StatBadgeProps = {
  value?: number | string | null;
  label: string;
  colorClass?: string; // e.g. 'text-yellow-400'
  bgClass?: string; // e.g. 'bg-slate-800'
  minWidth?: string; // e.g. 'min-w-[56px]'
  minHeight?: string; // e.g. 'min-h-[40px]'
  badgeHeight?: number; // height in px used to scale text (optional)
};

export const StatBadge = ({
  value,
  label,
  colorClass = 'text-white',
  bgClass = 'bg-slate-800',
  minWidth = 'min-w-[56px]',
  minHeight = 'min-h-[40px]',
  badgeHeight = 35,
}: StatBadgeProps) => {
  const display = value === undefined || value === null || value === '' ? '-' : value;
  // set CSS variable --badge-h for children to compute font-size relative to container height
  const style: React.CSSProperties = { '--badge-h': `${badgeHeight}px` } as React.CSSProperties;

  return (
    <div
      style={style}
      className={`${bgClass} px-2 py-1 rounded ${minWidth} ${minHeight} text-center align-middle flex flex-col justify-center`}
    >
      <div
        className={`text-sm font-bold ${colorClass} tabular-nums text-[calc(var(--badge-h)*0.45)] leading-none`}
      >
        {display}
        {typeof display === 'number' ? '%' : ''}
      </div>
      <div className="text-xs text-gray-300 text-[calc(var(--badge-h)*0.22)] leading-none pt-1">
        {label}
      </div>
    </div>
  );
};

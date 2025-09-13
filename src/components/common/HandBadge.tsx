'use client';
import React, { useEffect, useRef, useState } from 'react';

export type StatBadgeProps = {
  value?: number | null;
  label: string;
  colorClass?: string; // e.g. 'text-yellow-400'
  bgClass?: string; // e.g. 'bg-slate-800'
  minWidth?: string; // e.g. 'min-w-[56px]'
  minHeight?: string; // e.g. 'min-h-[40px]'
  badgeHeight?: number; // height in px used to scale text (optional)
};

export const HandsBadge = ({
  value = 0,
  label,
  colorClass = 'text-white',
  bgClass = 'bg-slate-800',
  minWidth = 'min-w-[56px]',
  minHeight = 'min-h-[40px]',
  badgeHeight = 35,
}: StatBadgeProps) => {
  // flash highlight when value changes (skip initial mount)
  const [highlight, setHighlight] = useState(false);
  const firstRef = useRef(true);
  const prevRef = useRef<number | null | undefined>(value);

  useEffect(() => {
    if (firstRef.current) {
      firstRef.current = false;
      prevRef.current = value;
      return;
    }

    if (prevRef.current !== value) {
      prevRef.current = value;
      setHighlight(true);
      const t = setTimeout(() => setHighlight(false), 600);
      return () => clearTimeout(t);
    }
  }, [value]);

  const style: React.CSSProperties = {
    ['--badge-h']: `${badgeHeight}px`,
  } as React.CSSProperties;

  return (
    <div
      style={style}
      className={`${bgClass} px-2 py-1 rounded ${minWidth} ${minHeight} text-center align-middle flex flex-col justify-center transition-all duration-200 ${
        highlight ? 'ring-4 ring-yellow-400/50 scale-105' : ''
      }`}
    >
      <div
        className={`text-sm font-bold ${colorClass} tabular-nums text-[calc(var(--badge-h)*0.45)] leading-none`}
      >
        {value}
      </div>
      <div className="text-xs text-gray-300 text-[calc(var(--badge-h)*0.22)] leading-none pt-1">
        {label}
      </div>
    </div>
  );
};

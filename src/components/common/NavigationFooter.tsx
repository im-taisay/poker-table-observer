'use client';

import { BarChart3, History } from 'lucide-react';

interface NavigationFooterProps {
  activeTab: 'analysis' | 'history';
  setActiveTab: (tab: 'analysis' | 'history') => void;
}

export const NavigationFooter = ({ activeTab, setActiveTab }: NavigationFooterProps) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border">
      <div className="flex">
        <button
          onClick={() => setActiveTab('analysis')}
          className={`flex-1 flex flex-col items-center justify-center py-3 px-4 ${
            activeTab === 'analysis' ? 'text-primary bg-primary/10' : 'text-muted-foreground'
          }`}
        >
          <BarChart3 className="w-5 h-5 mb-1" />
          <span className="text-xs font-medium">Analysis</span>
        </button>
        <button
          onClick={() => setActiveTab('history')}
          className={`flex-1 flex flex-col items-center justify-center py-3 px-4 ${
            activeTab === 'history' ? 'text-primary bg-primary/10' : 'text-muted-foreground'
          }`}
        >
          <History className="w-5 h-5 mb-1" />
          <span className="text-xs font-medium">History</span>
        </button>
      </div>
    </div>
  );
};

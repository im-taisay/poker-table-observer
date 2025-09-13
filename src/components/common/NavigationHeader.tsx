'use client';

import { BarChart3, History } from 'lucide-react';
import { Button } from '../ui/button';

interface NavigationHeaderProps {
  activeTab: 'analysis' | 'history';
  setActiveTab: (tab: 'analysis' | 'history') => void;
}

export const NavigationHeader = ({ activeTab, setActiveTab }: NavigationHeaderProps) => {
  return (
    <div className="flex space-x-1 bg-muted p-1 rounded-lg">
      <Button
        variant={activeTab === 'analysis' ? 'default' : 'ghost'}
        onClick={() => setActiveTab('analysis')}
        className={`flex-1 ${
          activeTab === 'analysis'
            ? 'bg-background text-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        <BarChart3 className="w-4 h-4 mr-2" />
        Analysis
      </Button>
      <Button
        variant={activeTab === 'history' ? 'default' : 'ghost'}
        onClick={() => setActiveTab('history')}
        className={`flex-1 ${
          activeTab === 'history'
            ? 'bg-background text-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        <History className="w-4 h-4 mr-2" />
        History
      </Button>
    </div>
  );
};

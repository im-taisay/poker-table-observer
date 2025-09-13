import { Plus } from 'lucide-react';

import { Header } from '@/components/common/Header';
import { HistoryPageClient } from './pageClient';

import '@/app/globals.css';

const HistoryPage = () => {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <Header />
        <HistoryPageClient />
      </div>
    </div>
  );
};

export default HistoryPage;

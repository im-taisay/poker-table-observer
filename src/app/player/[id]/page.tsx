import { Header } from '@/components/common/Header';
import { PageClient } from './PageClient';

import '@/app/globals.css';

export default function PlayerPage() {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <Header />
        <PageClient />
      </div>
    </div>
  );
}

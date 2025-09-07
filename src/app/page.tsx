import { PageClient } from './PageClient';

import './globals.css';

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <PageClient />
      </div>
    </div>
  );
}

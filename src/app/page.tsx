// import Header from '../components/common/Header';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlayerList } from './_components/PlayerList';
import { PageClient } from './PageClient';

import { PlayerWithStats } from '@/types/player';

import './globals.css';

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        {/* <Header /> */}
        {/* <PlayerList playerList={samplePlayer} /> */}
        {/* <Button
          onClick={sampleOnClick}
          className="self-center sm:self-end bg-primary hover:bg-primary/90 mt-4 sm:mt-0"
        >
          <Plus className="w-4 h-4 mr-2" />
          プレイヤー追加
        </Button> */}
        <PageClient />
      </div>
    </div>
  );
}

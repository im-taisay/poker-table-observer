import Header from '../components/common/Header';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlayerList } from './_components/PlayerList';

import { PlayerWithStats } from '@/types/player';

import './globals.css';

export default function Home() {
  const sampleOnClick = () => {
    console.log('clicked');
  };

  const samplePlayer: PlayerWithStats[] = [
    {
      seat: 1,
      name: 'Player 1',
      description: 'Aggressive player',
      stats: { hands: 100, vpip: 25, pfr: 20, reRaise: 15 },
    },
    {
      seat: 2,
      name: 'Player 2',
      description: 'Tight player',
      stats: { hands: 150, vpip: 30, pfr: 22, reRaise: 18 },
    },
    {
      seat: 3,
      name: 'Player 3',
      description: 'Loose player',
      stats: { hands: 200, vpip: 28, pfr: 19, reRaise: 12 },
    },
  ];

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <Header />
        <PlayerList playerList={samplePlayer} />
        {/* <Button
          onClick={sampleOnClick}
          className="self-center sm:self-end bg-primary hover:bg-primary/90 mt-4 sm:mt-0"
        >
          <Plus className="w-4 h-4 mr-2" />
          プレイヤー追加
        </Button> */}
      </div>
    </div>
  );
}

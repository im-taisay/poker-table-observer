'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

import { PlayerWithStats } from '@/types/player';

interface PlayerListProps {
  playerList: PlayerWithStats[];
}

export const PlayerList = ({ playerList }: PlayerListProps) => {
  return (
    <div>
      {playerList.map((player) => (
        <Card
          key={player.seat}
          className="bg-card border-border hover:bg-card/80 transition-colors"
        >
          <CardContent className="p-3">
            <div className="flex items-center">
              {/* プレイヤーの情報を表示するためのコンポーネント */}
              <div>
                <span>{player.seat}</span>
              </div>
              <div>
                <span className="font-bold text-lg ml-2">{player.name}</span>
              </div>
              <div className="flex gap-1 mr-2">
                <div className="bg-slate-800 px-2 py-1 rounded min-w-[45px] text-center">
                  <div className="text-sm font-bold text-yellow-400">{player.stats?.vpip}%</div>
                  <div className="text-xs text-gray-300">VPIP</div>
                </div>
                <div className="bg-slate-800 px-2 py-1 rounded min-w-[45px] text-center">
                  <div className="text-sm font-bold text-cyan-400">{player.stats?.pfr}%</div>
                  <div className="text-xs text-gray-300">PFR</div>
                </div>
                <div className="bg-slate-800 px-2 py-1 rounded min-w-[45px] text-center">
                  <div className="text-sm font-bold text-red-400">{player.stats?.reRaise}%</div>
                  <div className="text-xs text-gray-300">3bet</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

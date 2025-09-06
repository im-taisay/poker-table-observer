'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

import { PlayerWithStats } from '@/types/player';

import { usePlayers } from '@/providers/player-provider';

import { PF_ACTION } from '@/const/player';

export const PlayerCard = ({ player }: { player: PlayerWithStats }) => {
  const { onRecordAction } = usePlayers();

  return (
    <Card key={player.seat} className="bg-card border-border hover:bg-card/80 transition-colors">
      <CardContent className="p-3">
        <div className="sm:flex sm:justify-between sm:items-center">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">#{player.seat}</span>
            </div>
            <div>
              <span className="font-bold text-lg ml-2">{player.name}</span>
            </div>
            <div className="flex items-center ml-auto">
              <div className="ml-4 mr-2 text-sm text-gray-400 italic sm:inline">
                <span>{player.stats?.hands}H</span>
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
          </div>
          <div className="flex justify-center sm:block mt-5 gap-4">
            <Button
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onRecordAction(player.id, PF_ACTION.FOLD);
              }}
              className="w-12 h-10 p-0 text-xs bg-gray-800/10 border border-gray-400 text-gray-400 hover:bg-gray-800/20"
            >
              Fold
            </Button>

            <Button
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onRecordAction(player.id, PF_ACTION.CALL);
              }}
              className="w-12 h-10 p-0 text-xs bg-chart-2/10 border border-chart-2/50 text-chart-2 hover:bg-chart-2/20"
            >
              Call
            </Button>
            <Button
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onRecordAction(player.id, PF_ACTION.RAISE);
              }}
              className="w-12 h-10 p-0 text-xs bg-destructive/10 border border-destructive/50 text-destructive hover:bg-destructive/20"
            >
              Raise
            </Button>
            <Button
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onRecordAction(player.id, PF_ACTION.RE_RAISE);
              }}
              className="w-12 h-10 p-0 text-xs bg-accent/10 border border-accent-1/50 text-chart-1 hover:bg-chart-1/20"
            >
              3bet
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

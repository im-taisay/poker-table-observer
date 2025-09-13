'use client';

import { useRouter } from 'next/navigation';
import { ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { HandsBadge } from '@/components/common/HandBadge';
import { StatBadge } from '@/components/common/StatBadge';

import { PlayerWithStats } from '@/types/player';

import { usePlayers } from '@/providers/player-provider';

import { PF_ACTION } from '@/const/player';

export const PlayerCard = ({ player }: { player: PlayerWithStats }) => {
  const router = useRouter();

  const goToPlayerDetail = (id: number) => {
    router.push(`/player/${id}`);
  };

  const { onRecordAction } = usePlayers();

  return (
    <Card key={player.seat} className="bg-card border-border hover:bg-card/80 transition-colors">
      <CardContent className="p-3">
        <div className="sm:flex sm:justify-between sm:items-center">
          <div className="sm:flex items-center">
            <div
              className="flex items-center gap-3 flex-1 group bg-accent/5 sm:bg-transparent rounded-lg p-2 sm:p-0 border border-accent/20 sm:border-transparent active:bg-accent/10 sm:active:bg-transparent cursor-pointer"
              onClick={() => goToPlayerDetail(player.id)}
            >
              <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">#{player.seat}</span>
              </div>
              <div className="ml-3">
                <span className="font-bold text-lg">{player.name}</span>
              </div>
              {/* show chevron at the right only when group is hovered/focused */}
              <ChevronRight className="ml-auto text-gray-400 opacity-100 group-focus-within:opacity-100 transition-opacity duration-150" />
            </div>
            <div className="flex justify-center items-center ml-auto mt-2 sm:mt-0">
              <div className="ml-4 mr-2 text-sm text-gray-400 italic sm:inline">
                <HandsBadge value={player.stats?.hands} label="Hands" colorClass="text-gray-400" />
              </div>
              <div className="flex gap-1 mr-2">
                <StatBadge value={player.stats?.vpip} label="VPIP" colorClass="text-yellow-400" />
                <StatBadge value={player.stats?.pfr} label="PFR" colorClass="text-red-400" />
                <StatBadge value={player.stats?.reRaise} label="3bet" colorClass="text-blue-400" />
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-5 sm:mt-0 gap-4">
            <Button
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onRecordAction(player.id, PF_ACTION.FOLD);
              }}
              className="w-12 h-10 p-0 text-xs bg-gray-800/10 border border-gray-400 text-gray-400 hover:bg-chart-1/20 sm:ml-2 active:scale-95 active:translate-y-0.5 transition-transform"
            >
              Fold
            </Button>

            <Button
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onRecordAction(player.id, PF_ACTION.CALL);
              }}
              className="w-12 h-10 p-0 text-xs bg-chart-2/10 border border-chart-2/50 text-chart-2 hover:bg-chart-2/20 sm:ml-2 active:scale-95 active:translate-y-0.5 transition-transform"
            >
              Call
            </Button>
            <Button
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onRecordAction(player.id, PF_ACTION.RAISE);
              }}
              className="w-12 h-10 p-0 text-xs bg-destructive/10 border border-destructive/50 text-destructive hover:bg-destructive/20 sm:ml-2 active:scale-95 active:translate-y-0.5 transition-transform"
            >
              Raise
            </Button>
            <Button
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onRecordAction(player.id, PF_ACTION.RE_RAISE);
              }}
              className="w-12 h-10 p-0 text-xs bg-blue-400/10 border border-blue-400/50 text-blue-400 hover:bg-blue-400/20 sm:ml-2 active:scale-95 active:translate-y-0.5 transition-transform"
            >
              3bet
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

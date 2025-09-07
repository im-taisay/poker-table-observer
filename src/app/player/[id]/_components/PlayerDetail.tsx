'use client';

import { User, Edit2, Trash2, Trash, Plus } from 'lucide-react';
import { RecordedHand } from './RecordedHand';
import { StatBadge } from '@/components/common/StatBadge';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { usePlayers } from '@/providers/player-provider';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface PlayerDetailProps {
  setIsOpenSelectShowedHandsModal: (open: boolean) => void;
  playerId: number;
}

export const PlayerDetail = ({ setIsOpenSelectShowedHandsModal, playerId }: PlayerDetailProps) => {
  const { players, onUpdatePlayer, onResetStats, onResetHands } = usePlayers();

  const player = players.find((p) => p.id === playerId);

  if (!player) return null;

  return (
    <div>
      <div className="flex items-center justify-between w-full">
        <span className="flex items-center gap-2">
          <User className="w-5 h-5" />#{player.seat} {player.name}
        </span>
        <Button
          size="sm"
          variant="ghost"
          onClick={() => console.log('Edit player', player.id)}
          className="h-8 w-8 p-0"
        >
          <Edit2 className="w-4 h-4" />
        </Button>
      </div>
      <div className="mb-4">
        <Label className="text-xs text-muted-foreground mb-2 block">Stats</Label>
        <div className="flex gap-2 flex-wrap">
          <StatBadge
            value={player.stats?.vpip}
            label="VPIP"
            colorClass="text-yellow-400"
            minWidth="w-20"
            minHeight="h-14"
            badgeHeight={50}
          />
          <StatBadge
            value={player.stats?.pfr}
            label="PFR"
            colorClass="text-cyan-400"
            minWidth="w-20"
            badgeHeight={50}
          />
          <StatBadge
            value={player.stats?.reRaise}
            label="3bet"
            colorClass="text-red-400"
            minWidth="w-20"
            badgeHeight={50}
          />
        </div>
      </div>
      <div className="space-y-3">
        <div>
          <Label className="text-xs text-muted-foreground mb-1 block">Notes</Label>
          <Textarea
            value={player.notes || ''}
            onChange={(e) => onUpdatePlayer({ ...player, notes: e.target.value })}
            placeholder="Play style etc..."
            className="text-sm resize-none"
            rows={2}
          />
        </div>
      </div>

      {/* showed hands history */}
      <div className="mt-4">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">Showed Hand</CardTitle>
              <Button onClick={() => setIsOpenSelectShowedHandsModal(true)}>
                <Plus />
                Add Hand
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <div className="text-sm text-muted-foreground">No hand history available.</div>
            <div className="flex justify-between w-30 mt-2">
              {player.stats?.showedHands?.map((recordedHand, index) => (
                <RecordedHand
                  key={index}
                  hand={recordedHand.hand}
                  position={recordedHand.position}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-4 flex justify-between">
        <div className="flex justify-between mt-4">
          <Button
            variant="outline"
            onClick={() => onResetStats(player.id)}
            className="bg-destructive hover:bg-destructive/90"
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Reset Stats
          </Button>
        </div>

        <div className="flex justify-between mt-4">
          <Button
            variant="outline"
            onClick={() => onResetHands(player.id)}
            className="bg-destructive hover:bg-destructive/90"
          >
            <Trash className="w-4 h-4 mr-2" />
            Reset Hands
          </Button>
        </div>
      </div>
    </div>
  );
};

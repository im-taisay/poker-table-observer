'use client';

import { PlayerCard } from './PlayerCard';
import { useMemo } from 'react';
import { usePlayers } from '@/providers/player-provider';

export const PlayerList = () => {
  const { players } = usePlayers();

  const sortedPlayers = [...players].sort((a, b) => (a.seat ?? 0) - (b.seat ?? 0));

  return (
    <div className="space-y-4">
      {sortedPlayers.map((player) => (
        <PlayerCard key={player.id} player={player} />
      ))}
    </div>
  );
};

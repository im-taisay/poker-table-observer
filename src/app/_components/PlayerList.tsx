'use client';

import { PlayerCard } from './PlayerCard';

import { usePlayers } from '@/providers/player-provider';

export const PlayerList = () => {
  const { players } = usePlayers();

  return (
    <div className="space-y-4">
      {players.map((player) => (
        <PlayerCard key={player.id} player={player} />
      ))}
    </div>
  );
};

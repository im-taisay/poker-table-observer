'use client';

import { PlayerCard } from './PlayerCard';

import { PlayerWithStats } from '@/types/player';

interface PlayerListProps {
  playerList: PlayerWithStats[];
  onRecordAction: (playerId: number, action: 'fold' | 'call' | 'raise' | 'reRaise') => void;
}

export const PlayerList = ({ playerList, onRecordAction }: PlayerListProps) => {
  return (
    <div className="mb-6">
      {playerList.map((player) => (
        <PlayerCard key={player.id} player={player} onRecordAction={onRecordAction} />
      ))}
    </div>
  );
};

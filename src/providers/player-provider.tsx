'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import type { PlayerWithStats } from '@/types/player';

type PlayersContextType = {
  players: PlayerWithStats[];
  addPlayer: (p: PlayerWithStats) => void;
  onRecordAction: (id: number, action: string) => void;
};

const PlayersContext = createContext<PlayersContextType | undefined>(undefined);

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const [players, setPlayers] = useState<PlayerWithStats[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('players');
      if (raw) setPlayers(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('players', JSON.stringify(players));
    } catch {}
  }, [players]);

  const addPlayer = (p: PlayerWithStats) => setPlayers((s) => [...s, p]);
  const onRecordAction = (id: number, action: string) => {
    setPlayers((prev) => prev.map((pl) => (pl.id !== id ? pl : { ...pl /* update stats here */ })));
  };

  return (
    <PlayersContext.Provider value={{ players, addPlayer, onRecordAction }}>
      {children}
    </PlayersContext.Provider>
  );
}

export function usePlayers() {
  const ctx = useContext(PlayersContext);
  if (!ctx) throw new Error('usePlayers must be used within PlayerProvider');
  return ctx;
}

'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import type { PlayerWithStats, PlayerStats, PlayerInfo } from '@/types/player';
import { PF_ACTION, PF_ACTION_TYPE } from '@/const/player';
import { calculateStats } from '@/lib/stats';

type PlayersContextType = {
  players: PlayerWithStats[];
  addPlayer: (player: PlayerInfo) => void;
  onRecordAction: (id: number, action: PF_ACTION_TYPE) => void;
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

  /**
   * Adds a new player to the list.
   * @param newPlayer The player information to add.
   */
  const addPlayer = (newPlayer: PlayerInfo) => {
    setPlayers([
      ...players,
      {
        id: players.length + 1,
        seat: newPlayer.seat,
        name: newPlayer.name,
        description: newPlayer.description,
        stats: {
          hands: 0,
          vpip: 0,
          pfr: 0,
          reRaise: 0,
          pfCallCount: 0,
          pfRaiseCount: 0,
          pfReRaiseCount: 0,
        },
      },
    ]);
  };

  /**
   * Records an action performed by a player.
   * @param playerId The ID of the player performing the action.
   * @param action The action being performed.
   */
  const onRecordAction = (playerId: number, action: PF_ACTION_TYPE) => {
    setPlayers((prev) =>
      prev.map((player) => {
        if (player.id !== playerId) return player;

        const stats: PlayerStats = player.stats;

        // add one hand played
        let updatedStats = { ...stats, hands: stats.hands + 1 };

        if (action === PF_ACTION.CALL) {
          updatedStats.pfCallCount = stats.pfCallCount + 1;
        } else if (action === PF_ACTION.RAISE) {
          updatedStats.pfRaiseCount = stats.pfRaiseCount + 1;
        } else if (action === PF_ACTION.RE_RAISE) {
          updatedStats.pfRaiseCount = stats.pfRaiseCount + 1;
          updatedStats.pfReRaiseCount = stats.pfReRaiseCount + 1;
        }

        updatedStats = calculateStats({ ...player, stats: updatedStats });

        return {
          ...player,
          stats: updatedStats,
        };
      })
    );
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

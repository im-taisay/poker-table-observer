'use client';

import { useState } from 'react';

import { Plus } from 'lucide-react';

import { Header } from '@/components/common/Header';
import { PlayerList } from './_components/PlayerList';
import { Button } from '@/components/ui/button';
import { AddPlayerModal } from './_components/AddPlayerModal';

import { PlayerInfo, PlayerStats, PlayerWithStats } from '@/types/player';

import { PF_ACTION, PF_ACTION_TYPE } from '@/const/player';

import { calculateStats } from '@/lib/stats';

export const PageClient = () => {
  const sampleOnClick = () => {
    console.log('clicked');
  };

  const [players, setPlayers] = useState<PlayerWithStats[]>([]);

  const [isOpenAddPlayerModal, setIsOpenAddPlayerModal] = useState(false);

  /**
   * Adds a new player to the list.
   * @param newPlayer The player information to add.
   */
  const execAddPlayer = (newPlayer: PlayerInfo) => {
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
    setIsOpenAddPlayerModal(false);
  };

  /**
   * Records an action performed by a player.
   * @param playerId The ID of the player performing the action.
   * @param action The action being performed.
   */
  const onRecordAction = (playerId: number, action: PF_ACTION_TYPE) => {
    console.log(`Player ${playerId} performed action: ${action}`);

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
    <div>
      <div className="mb-6">
        <Header />
      </div>
      <PlayerList playerList={players} onRecordAction={onRecordAction} />
      <div className="flex justify-center sm:justify-end">
        <Button
          onClick={() => setIsOpenAddPlayerModal(true)}
          className="self-center sm:self-end bg-primary hover:bg-primary/90 mt-4 sm:mt-0"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Player
        </Button>
      </div>
      {isOpenAddPlayerModal && (
        <AddPlayerModal setShowAddPlayer={setIsOpenAddPlayerModal} addPlayer={execAddPlayer} />
      )}
    </div>
  );
};

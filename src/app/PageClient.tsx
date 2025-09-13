'use client';

import { useState } from 'react';

import { Plus } from 'lucide-react';

import { Header } from '@/components/common/Header';
import { PlayerList } from './_components/PlayerList';
import { Button } from '@/components/ui/button';
import { AddPlayerModal } from './_components/AddPlayerModal';
import { NavigationHeader } from '@/components/common/NavigationHeader';

export const PageClient = () => {
  const [isOpenAddPlayerModal, setIsOpenAddPlayerModal] = useState(false);

  return (
    <div>
      <div className="mb-6">
        <Header />
      </div>
      <div className="mb-10">
        <NavigationHeader activeTab="analysis" setActiveTab={() => {}} />
      </div>
      <PlayerList />
      <div className="flex justify-center sm:justify-end sm:mt-4">
        <Button
          onClick={() => setIsOpenAddPlayerModal(true)}
          className="self-center sm:self-end bg-primary hover:bg-primary/90 mt-4 sm:mt-0"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Player
        </Button>
      </div>
      {isOpenAddPlayerModal && <AddPlayerModal setShowAddPlayer={setIsOpenAddPlayerModal} />}
    </div>
  );
};

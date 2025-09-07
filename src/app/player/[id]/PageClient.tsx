'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { PlayerDetail } from './_components/PlayerDetail';
import { SelectShowedHandsModal } from './_components/SelectShowedHandsModal';

import { PlayerProvider } from '@/providers/player-provider';

export const PageClient = () => {
  const [isOpenSelectShowedHandsModal, setIsOpenSelectShowedHandsModal] = useState(false);
  return (
    <PlayerProvider>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Player Details</CardTitle>
          </CardHeader>
          <CardContent>
            <PlayerDetail setIsOpenSelectShowedHandsModal={setIsOpenSelectShowedHandsModal} />
          </CardContent>
        </Card>
      </div>
      {isOpenSelectShowedHandsModal && (
        <SelectShowedHandsModal setIsOpenSelectShowedHandsModal={setIsOpenSelectShowedHandsModal} />
      )}
    </PlayerProvider>
  );
};

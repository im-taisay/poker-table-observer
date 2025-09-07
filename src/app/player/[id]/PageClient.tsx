'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { PlayerDetail } from './_components/PlayerDetail';
import { SelectShowedHandsModal } from './_components/SelectShowedHandsModal';

export const PageClient = () => {
  const [isOpenSelectShowedHandsModal, setIsOpenSelectShowedHandsModal] = useState(false);

  // get id from url
  const params = useParams();
  const idParam = params?.id;
  const playerId = idParam ? Number(idParam) : undefined;

  if (!playerId) return null;

  return (
    <div>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Player Details</CardTitle>
          </CardHeader>
          <CardContent>
            <PlayerDetail
              playerId={playerId}
              setIsOpenSelectShowedHandsModal={setIsOpenSelectShowedHandsModal}
            />
          </CardContent>
        </Card>
      </div>
      {isOpenSelectShowedHandsModal && (
        <SelectShowedHandsModal
          playerId={playerId}
          setIsOpenSelectShowedHandsModal={setIsOpenSelectShowedHandsModal}
        />
      )}
    </div>
  );
};

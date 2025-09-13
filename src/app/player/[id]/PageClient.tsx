'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { PlayerDetail } from './_components/PlayerDetail';
import { SelectShowedHandsModal } from './_components/SelectShowedHandsModal';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export const PageClient = () => {
  const [isOpenSelectShowedHandsModal, setIsOpenSelectShowedHandsModal] = useState(false);

  // get id from url
  const params = useParams();
  const idParam = params?.id;
  const playerId = idParam ? Number(idParam) : undefined;

  const router = useRouter();

  const backToPlayers = () => {
    router.push(`/`);
  };

  if (!playerId) return null;

  return (
    <div>
      <Button
        variant="outline"
        className="border-border bg-transparent mb-4 active:scale-95 active:translate-y-0.5 transition-transform"
        onClick={backToPlayers}
      >
        <ArrowLeft className="w-4 h-4 mr-0.5" />
        戻る
      </Button>
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

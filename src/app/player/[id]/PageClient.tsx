'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { PlayerDetail } from './_components/PlayerDetail';

import { PlayerProvider, usePlayers } from '@/providers/player-provider';

export const PageClient = () => {
  return (
    <PlayerProvider>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Player Details</CardTitle>
          </CardHeader>
          <CardContent>
            <PlayerDetail />
          </CardContent>
        </Card>
      </div>
    </PlayerProvider>
  );
};

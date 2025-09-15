'use client';
import { useState } from 'react';

import { Save } from 'lucide-react';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PositionSelector } from './_components/PositionSelector';
import { BoardSelector } from './_components/BoardSelector';
import { BetActionSelector } from './_components/BetActionSelector';

import { Position } from '@/types/game';

export const PageClient = () => {
  const [heroPosition, setHeroPosition] = useState<Position>('BTN');
  const [villainPosition, setVillainPosition] = useState<Position>('BB');
  // const [currentStreet, setCurrentStreet] = useState<PostFlopStreet>('Flop');

  const [board, setBoard] = useState({
    flop: ['', '', ''],
    turn: '',
    river: '',
  });

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-card-foreground">Hand History</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Position Selection */}
          <div className="grid grid-cols-2 gap-4">
            <PositionSelector label="Hero" position={heroPosition} setPosition={setHeroPosition} />
            <PositionSelector
              label="Villain"
              position={villainPosition}
              setPosition={setVillainPosition}
            />
          </div>
          {/* Board Selection */}
          <div className="mt-6">
            <Card className="bg-muted/30 border-border">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  ボードカード選択
                </CardTitle>
              </CardHeader>
              <CardContent>
                <BoardSelector board={board} onBoardChange={setBoard} />
              </CardContent>
            </Card>
          </div>

          {/* Bet Action Selection */}
          <div className="mt-6">
            <BetActionSelector heroPosition={heroPosition} villainPosition={villainPosition} />
          </div>
          {/* Action Buttons */}
          <div className="flex gap-2 justify-end">
            <Button variant="outline" onClick={() => console.log('cancel')} className="mr-2">
              キャンセル
            </Button>
            <Button onClick={() => {}} className="bg-primary hover:bg-primary/90">
              <Save className="w-4 h-4 mr-2" />
              Save
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

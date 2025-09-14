'use client';
import { useState } from 'react';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PositionSelector } from './_components/PositionSelector';
import { BoardSelector } from './_components/BoardSelector';

import { STREETS } from '@/const/game';

import { Position, Street } from '@/types/game';

export const PageClient = () => {
  const [heroPosition, setHeroPosition] = useState<Position | undefined>(undefined);
  const [villainPosition, setVillainPosition] = useState<Position | undefined>(undefined);
  const [currentStreet, setCurrentStreet] = useState<Street>('PreFlop');

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

          {/* Street Selection */}
          <Tabs
            value={currentStreet}
            onValueChange={(value: string) => setCurrentStreet(value as Street)}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-4">
              {Object.values(STREETS).map((street) => (
                <TabsTrigger key={street} value={street} className="capitalize">
                  {street}
                </TabsTrigger>
              ))}
            </TabsList>
            {Object.values(STREETS).map((street) => (
              <TabsContent key={street} value={street} className="mt-4">
                <div className="text-sm text-muted-foreground">Content for {street}</div>
                <div className="grid gap-4">
                  {street === STREETS.PRE_FLOP ? (
                    <div></div>
                  ) : (
                    <Card className="bg-muted/30 border-border">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                          {/* {boardInfo.label} */}
                        </CardTitle>
                      </CardHeader>

                      <CardContent>
                        <BoardSelector
                          street={street}
                          openCardModal={(street) => console.log(`Open card modal for ${street}`)}
                        />
                      </CardContent>
                    </Card>
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

'use client';
import { useState } from 'react';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PositionSelector } from './_components/PositionSelector';

import { POSITIONS, STREETS } from '@/const/game';

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
                <div className="grid gap-4"></div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

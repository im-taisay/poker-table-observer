'use client';

import { useState } from 'react';
import { PlayingCardSelector } from '@/components/common/PlayingCardSelector';
import { DisplayPlayingCard } from '@/components/common/DisplayPlayingCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

import { POSITIONS } from '@/const/game';
import { PlayingCardType } from '@/types/game';

import { usePlayers } from '@/providers/player-provider';

interface SelectShowedHandsModalProps {
  setIsOpenSelectShowedHandsModal: (isOpen: boolean) => void;
  playerId: number;
}

export const SelectShowedHandsModal = ({
  setIsOpenSelectShowedHandsModal,
  playerId,
}: SelectShowedHandsModalProps) => {
  const [selectedPosition, setSelectedPosition] = useState(POSITIONS[0]);
  const [selectedCards, setSelectedCards] = useState<PlayingCardType[]>([]);

  const { addShowedHands } = usePlayers();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/80">
      <Card>
        <CardContent>
          <div className="mb-4">
            <div className="mb-4 p-3 bg-muted/30 rounded-lg">
              <div className="text-sm text-muted-foreground mb-2">Selected Hands:</div>
              <div className="flex gap-2 items-center">
                {selectedCards.map((card, index) => {
                  return <DisplayPlayingCard key={index} {...card} />;
                })}
                {Array.from({ length: 2 - selectedCards.length }).map((_, index) => (
                  <div
                    key={`empty-${index}`}
                    className="w-12 h-16 border-2 border-dashed border-gray-400 rounded-lg"
                  ></div>
                ))}
              </div>
            </div>
            <div className="text-sm text-muted-foreground mb-2">Position:</div>
            <div className="flex gap-1 flex-wrap">
              {POSITIONS.map((position) => (
                <Button
                  key={position}
                  variant={selectedPosition === position ? 'default' : 'outline'}
                  onClick={() => setSelectedPosition(position)}
                  size="lg"
                  className={`text-xs px-2 py-1 h-10 w-12 ${
                    selectedPosition === position
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-transparent border-border hover:bg-accent'
                  }`}
                >
                  {position}
                </Button>
              ))}
            </div>
          </div>
          <PlayingCardSelector
            selectedCards={selectedCards}
            onSelectCard={(rank: string, suit: string) => {
              setSelectedCards([...selectedCards, { rank, suit }]);
            }}
          />
          <div className="flex justify-center gap-3">
            <Button
              onClick={() => {
                addShowedHands(playerId, selectedPosition, [selectedCards[0], selectedCards[1]]);
                setIsOpenSelectShowedHandsModal(false);
              }}
              className="mt-4 w-24 bg-primary hover:bg-primary/90"
            >
              Save
            </Button>
            <Button
              onClick={() => setIsOpenSelectShowedHandsModal(false)}
              className="mt-4 w-24 hover:bg-secondary/10 bg-secondary"
            >
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

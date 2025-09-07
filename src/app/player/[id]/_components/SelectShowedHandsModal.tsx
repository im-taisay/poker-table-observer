'use client';

import { useState } from 'react';
import { PlayingCardSelector } from '@/components/common/PlayingCardSelector';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

import { POSITIONS } from '@/const/game';

interface SelectShowedHandsModalProps {
  setIsOpenSelectShowedHandsModal: (isOpen: boolean) => void;
}

export const SelectShowedHandsModal = ({
  setIsOpenSelectShowedHandsModal,
}: SelectShowedHandsModalProps) => {
  const [selectedPosition, setSelectedPosition] = useState(POSITIONS[0]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/80">
      <Card>
        <CardContent>
          <div className="mb-4">
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
          <PlayingCardSelector />
          <div className="flex justify-center gap-3">
            <Button className="mt-4 w-24 bg-primary hover:bg-primary/90">Save</Button>
            <Button
              onClick={() => setIsOpenSelectShowedHandsModal(false)}
              className="mt-4 w-24 hover:bg-accent"
            >
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

'use client';

import { Plus } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import { PostFlopStreet } from '@/types/game';
import { STREETS, POST_FLOP_BOARD_CARD } from '@/const/game';

interface BoardSelectorProps {
  street: PostFlopStreet;
  openCardModal: (street: PostFlopStreet) => void;
}

export const BoardSelector = ({ street, openCardModal }: BoardSelectorProps) => {
  return (
    <Card>
      <CardContent>
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">{street}: </span>
          </div>
          <div className="relative">
            <div className="flex items-center gap-2">
              {POST_FLOP_BOARD_CARD.map(
                (element) =>
                  element.STREET === street && (
                    <div key={element.STREET} className="flex items-center gap-1">
                      {Array.from({ length: element.COUNT }).map((_, idx) => (
                        <Button
                          key={`${element.STREET}-${idx}`}
                          variant="outline"
                          onClick={() => openCardModal(element.STREET as PostFlopStreet)}
                          className="w-10 h-12 p-0 border-2 border-dashed border-muted-foreground/30 hover:border-muted-foreground/50 flex items-center justify-center"
                        >
                          <Plus className="w-4 h-4 text-muted-foreground" />
                        </Button>
                      ))}
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

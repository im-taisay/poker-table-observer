'use client';

import { Plus, X } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlayingCardSelector } from '@/components/common/PlayingCardSelector';

import { PostFlopStreet } from '@/types/game';
import { useState, useCallback } from 'react';
import type { PlayingCardType } from '@/types/game';
import { STREETS, POST_FLOP_BOARD_CARD } from '@/const/game';

interface BoardSelectorProps {
  street: PostFlopStreet;
  openCardModal: (street: PostFlopStreet) => void;
}

export const BoardSelector = ({ street, openCardModal }: BoardSelectorProps) => {
  const [showSelector, setShowSelector] = useState(false);
  const [activeStreet, setActiveStreet] = useState<PostFlopStreet | null>(null);
  const [selectedCards, setSelectedCards] = useState<PlayingCardType[]>([]);

  const handleSelectCard = useCallback((rank: string, suit: string) => {
    setSelectedCards((prev) => {
      const exists = prev.some((c) => c.rank === rank && c.suit === suit);
      if (exists) return prev;
      if (prev.length >= POST_FLOP_BOARD_CARD.find((e) => e.STREET === activeStreet)?.COUNT!) {
        return prev;
      }
      return [...prev, { rank, suit }];
    });
  }, []);

  const handleOpen = useCallback(
    (s: PostFlopStreet) => {
      setActiveStreet(s);
      openCardModal(s); // keep existing external handling
      setShowSelector(true);
    },
    [openCardModal]
  );
  const handleClose = () => setShowSelector(false);

  return (
    <div>
      <Card>
        <CardContent>
          <div className="flex items-center gap-2 mb-2">
            <p className="text-sm font-medium">{street}</p>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <div className="relative">
              <div className="flex items-center gap-2">
                {(() => {
                  // cumulative display: include all streets up to current one
                  const currentIndex = POST_FLOP_BOARD_CARD.findIndex((e) => e.STREET === street);
                  const visible =
                    currentIndex === -1 ? [] : POST_FLOP_BOARD_CARD.slice(0, currentIndex + 1);
                  return visible.map((element) => (
                    <div key={element.STREET} className="flex items-center gap-1">
                      {Array.from({ length: element.COUNT }).map((_, idx) => (
                        <Button
                          key={`${element.STREET}-${idx}`}
                          variant="outline"
                          onClick={() => handleOpen(element.STREET as PostFlopStreet)}
                          className="w-10 h-12 p-0 border-2 border-dashed border-muted-foreground/30 hover:border-muted-foreground/50 flex items-center justify-center"
                        >
                          <Plus className="w-4 h-4 text-muted-foreground" />
                        </Button>
                      ))}
                    </div>
                  ));
                })()}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {showSelector && (
        <>
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-40"
            onClick={handleClose}
            aria-hidden="true"
          />
          <div
            className="fixed inset-x-0 bottom-0 z-50 rounded-t-xl border border-border bg-card shadow-2xl animate-in slide-in-from-bottom duration-200"
            role="dialog"
            aria-modal="true"
            aria-label="Select board cards"
          >
            <div className="flex items-center justify-between px-4 pt-3 pb-2 border-b border-border/60">
              <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                {activeStreet ?? 'Board'} Cards
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="h-7 w-7 p-0"
                onClick={handleClose}
                aria-label="Close selector"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="p-3 max-h-[55vh] overflow-y-auto">
              <PlayingCardSelector selectedCards={selectedCards} onSelectCard={handleSelectCard} />
            </div>
            <div className="h-3" />
          </div>
        </>
      )}
    </div>
  );
};

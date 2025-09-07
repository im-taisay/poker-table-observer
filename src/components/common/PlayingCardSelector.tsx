'use client';

import { PlayingCard } from './PlayingCard';
import { RANKS, SUITS } from '@/const/game';
import type { PlayingCardType } from '@/types/game';

interface PlayingCardSelectorProps {
  selectedCards: PlayingCardType[];
  onSelectCard: (rank: string, suit: string) => void;
}

export const PlayingCardSelector = ({ selectedCards, onSelectCard }: PlayingCardSelectorProps) => {
  return (
    <div className="space-y-2">
      <div className="grid grid-cols-13 gap-1">
        {/* Spades row */}
        {RANKS.map((rank) => (
          <PlayingCard
            key={`${rank}${SUITS.SPADES}`}
            rank={rank}
            suit={{ display: SUITS.SPADES.DISPLAY, label: SUITS.SPADES.LABEL }}
            selectedCards={selectedCards}
            onSelectCard={onSelectCard}
            bgColor={SUITS.SPADES.COLOR}
          />
        ))}
        {/* Hearts row */}
        {RANKS.map((rank) => (
          <PlayingCard
            key={`${rank}${SUITS.HEARTS}`}
            rank={rank}
            suit={{ display: SUITS.HEARTS.DISPLAY, label: SUITS.HEARTS.LABEL }}
            selectedCards={selectedCards}
            onSelectCard={onSelectCard}
            bgColor={SUITS.HEARTS.COLOR}
          />
        ))}
        {/* Clubs row */}
        {RANKS.map((rank) => (
          <PlayingCard
            key={`${rank}${SUITS.CLUBS}`}
            rank={rank}
            suit={{ display: SUITS.CLUBS.DISPLAY, label: SUITS.CLUBS.LABEL }}
            selectedCards={selectedCards}
            onSelectCard={onSelectCard}
            bgColor={SUITS.CLUBS.COLOR}
          />
        ))}
        {/* Diamonds row */}
        {RANKS.map((rank) => (
          <PlayingCard
            key={`${rank}${SUITS.DIAMONDS}`}
            rank={rank}
            suit={{ display: SUITS.DIAMONDS.DISPLAY, label: SUITS.DIAMONDS.LABEL }}
            selectedCards={selectedCards}
            onSelectCard={onSelectCard}
            bgColor={SUITS.DIAMONDS.COLOR}
          />
        ))}
      </div>
      <div className="text-sm text-muted-foreground">Click to select a card</div>
      <div className="text-xs text-muted-foreground">
        Note: Selected cards are disabled to prevent duplicate selection.
      </div>
    </div>
  );
};

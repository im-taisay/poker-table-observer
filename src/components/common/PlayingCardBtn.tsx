'use client';

import { CARD_COLOR_CLASSES } from '@/const/game';
import { PlayingCardType } from '@/types/game';

interface PlayingCardProps {
  rank: string;
  suit: {
    display: string;
    label: string;
  };
  onSelectCard: (rank: string, suit: string) => void;
  selectedCards: PlayingCardType[];
  bgColor: string;
  disabled?: boolean;
}

export const PlayingCard = ({
  rank,
  suit,
  onSelectCard,
  selectedCards,
  bgColor,
  disabled,
}: PlayingCardProps) => {
  const base =
    'w-6.5 h-12 text-white rounded flex flex-col items-center justify-center text-xs font-bold';
  const colorClass =
    (CARD_COLOR_CLASSES as Record<string, string>)[bgColor] ?? CARD_COLOR_CLASSES.gray;

  return (
    <button
      key={`${rank}${suit}`}
      onClick={() => onSelectCard(rank, suit.label)}
      disabled={
        selectedCards.some((card) => card.rank === rank && card.suit === suit.label) || disabled
      }
      className={`${base} ${colorClass}`}
    >
      <span className="text-xs leading-none">{rank}</span>
      <span className="text-xs leading-none">{suit.display}</span>
    </button>
  );
};

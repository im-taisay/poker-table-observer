'use client';

import { PlayingCardType } from '@/types/game';
import { SUITS, CARD_COLOR_CLASSES } from '@/const/game';

export const DisplayPlayingCard = ({ rank, suit }: PlayingCardType) => {
  const bgKey = (
    suit === SUITS.HEARTS.LABEL
      ? SUITS.HEARTS.COLOR
      : suit === SUITS.DIAMONDS.LABEL
        ? SUITS.DIAMONDS.COLOR
        : suit === SUITS.CLUBS.LABEL
          ? SUITS.CLUBS.COLOR
          : SUITS.SPADES.COLOR
  ) as keyof typeof CARD_COLOR_CLASSES;

  const displaySuit = Object.values(SUITS)
    .map((element: { LABEL: string; DISPLAY: string; COLOR: string }) => {
      if (element.LABEL === suit) {
        return element.DISPLAY;
      }
      return null;
    })
    .filter(Boolean)[0];

  return (
    <div
      className={`w-12 h-14 ${CARD_COLOR_CLASSES[bgKey]} border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer `}
    >
      <span className="text-lg font-bold text-white">{rank}</span>
      <span className={`text-lg text-white `}>{displaySuit}</span>
    </div>
  );
};

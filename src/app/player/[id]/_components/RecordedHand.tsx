'use client';

import { DisplayPlayingCard } from '@/components/common/DisplayPlayingCard';
import { PlayingCardType } from '@/types/game';

interface RecordedHandProps {
  hand: [PlayingCardType, PlayingCardType];
  position: string;
}

export const RecordedHand = ({ hand, position }: RecordedHandProps) => {
  return (
    <div className="border border-gray-800 rounded-lg">
      <span className="inline-block bg-gray-700 text-gray-200 text-xs font-semibold px-2 py-1 rounded-full mx-2 mt-2">
        {position}
      </span>
      <div className="flex gap-2 p-2">
        <DisplayPlayingCard {...hand[0]} />
        <DisplayPlayingCard {...hand[1]} />
      </div>
    </div>
  );
};

import { Card } from '@/components/ui/card';
import { DisplayPlayingCard } from '@/components/common/DisplayPlayingCard';
import { PlayingCardType } from '@/types/game';
import { POSITIONS, SUITS, CARD_COLOR_CLASSES } from '@/const/game';

interface RecordedHandProps {
  hand: [PlayingCardType, PlayingCardType];
}

export const RecordedHand = ({ hand }: RecordedHandProps) => {
  return (
    <div className="border border-gray-800 rounded-lg">
      <div className="flex gap-2 p-2">
        <DisplayPlayingCard {...hand[0]} />
        <DisplayPlayingCard {...hand[1]} />
      </div>
    </div>
  );
};

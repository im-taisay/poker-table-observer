'use client';

interface PlayingCardProps {
  rank: string;
  suit: string;
  onSelectCard: (rank: string, suit: string) => void;
  selectedCards: string[];
  bgColor: string;
  disabled?: boolean;
}

const COLOR_CLASSES = {
  blue: 'bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800',
  green: 'bg-green-600 hover:bg-green-700 disabled:bg-green-800',
  red: 'bg-red-600 hover:bg-red-700 disabled:bg-red-800',
  gray: 'bg-gray-600 hover:bg-gray-700 disabled:bg-gray-800',
} as const;

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
  const colorClass = (COLOR_CLASSES as Record<string, string>)[bgColor] ?? COLOR_CLASSES.gray;

  return (
    <button
      key={`${rank}${suit}`}
      onClick={() => onSelectCard(rank, suit)}
      disabled={selectedCards.includes(`${rank}${suit}`) || disabled}
      className={`${base} ${colorClass}`}
    >
      <span className="text-xs leading-none">{rank}</span>
      <span className="text-xs leading-none">{suit}</span>
    </button>
  );
};

import { PlayingCard } from './PlayingCard';

export const PlayingCardSelector = () => {
  const ranks = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];
  const suits = ['♠︎', '♥︎', '♦︎', '♣︎'];

  return (
    <div className="space-y-2">
      <div className="grid grid-cols-13 gap-1">
        {/* Spades row */}
        {ranks.map((rank) => (
          <PlayingCard
            key={`${rank}♠︎`}
            rank={rank}
            suit="♠︎"
            selectedCards={[]}
            onSelectCard={() => {}}
            bgColor="gray"
          />
        ))}
        {/* Hearts row */}
        {ranks.map((rank) => (
          <PlayingCard
            key={`${rank}♥︎`}
            rank={rank}
            suit="♥︎"
            selectedCards={[]}
            onSelectCard={() => {}}
            bgColor="red"
          />
        ))}
        {/* Clubd row */}
        {ranks.map((rank) => (
          <PlayingCard
            key={`${rank}♣︎`}
            rank={rank}
            suit="♣︎"
            selectedCards={[]}
            onSelectCard={() => {}}
            bgColor="green"
          />
        ))}
        {/* Diamonds row */}
        {ranks.map((rank) => (
          <PlayingCard
            key={`${rank}♦︎`}
            rank={rank}
            suit="♦︎"
            selectedCards={[]}
            onSelectCard={() => {}}
            bgColor="blue"
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

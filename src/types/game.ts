export interface PlayingCardType {
  rank: string;
  suit: string;
}

export type Position = 'UTG' | '+1' | '+2' | 'LJ' | 'HJ' | 'CO' | 'BTN' | 'SB' | 'BB';

export type Street = 'PreFlop' | 'Flop' | 'Turn' | 'River';

export interface PlayingCardType {
  rank: string;
  suit: string;
}

export type Position = 'UTG' | '+1' | '+2' | 'LJ' | 'HJ' | 'CO' | 'BTN' | 'SB' | 'BB';

export type Street = 'PreFlop' | 'Flop' | 'Turn' | 'River';

export type PostFlopStreet = 'Flop' | 'Turn' | 'River';

export type ActionType = 'fold' | 'call' | 'raise' | 'check' | 'bet';

export interface GameAction {
  id: string;
  street: Street;
  position: 'hero' | 'villain';
  action: 'fold' | 'call' | 'raise' | 'check' | 'bet';
  amount?: number;
  amountType?: 'bb' | 'pot';
}

export interface Action {
  amountType: 'bb' | 'pot';
  amount: number;
  action: ActionType;
  position: 'hero' | 'villain';
  street: PostFlopStreet;
}

export interface HandHistory {
  id: string;
  heroPosition: Position;
  villainPosition: Position;
  board: PlayingCardType[];
  actions: {
    preflop: {
      hero: Action[];
      villain: Action[];
    };
    flop: {
      hero: Action[];
      villain: Action[];
    };
    turn: {
      hero: Action[];
      villain: Action[];
    };
    river: {
      hero: Action[];
      villain: Action[];
    };
  };
}

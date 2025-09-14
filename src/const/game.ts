export const POSITIONS = ['UTG', '+1', '+2', 'LJ', 'HJ', 'CO', 'BTN', 'SB', 'BB'];

export const RANKS = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];
export const SUITS = {
  SPADES: { LABEL: 'spades', DISPLAY: '♠︎', COLOR: 'gray' },
  HEARTS: { LABEL: 'hearts', DISPLAY: '♥︎', COLOR: 'red' },
  DIAMONDS: { LABEL: 'diamonds', DISPLAY: '♦︎', COLOR: 'blue' },
  CLUBS: { LABEL: 'clubs', DISPLAY: '♣︎', COLOR: 'green' },
};

export const CARD_COLOR_CLASSES = {
  blue: 'bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800',
  green: 'bg-green-600 hover:bg-green-700 disabled:bg-green-800',
  red: 'bg-red-600 hover:bg-red-700 disabled:bg-red-800',
  gray: 'bg-gray-600 hover:bg-gray-700 disabled:bg-gray-800',
} as const;

export const PF_ACTIONS = {
  FOLD: 'fold',
  CALL: 'call',
  RAISE: 'raise',
  RE_RAISE: '3bet',
} as const;

export const POST_ACTIONS = {
  CHECK: 'check',
  BET: 'bet',
  CALL: 'call',
  RAISE: 'raise',
  ALL_IN: 'all-in',
  FOLD: 'fold',
};

export const STREETS = {
  PRE_FLOP: 'PreFlop',
  FLOP: 'Flop',
  TURN: 'Turn',
  RIVER: 'River',
} as const;

export const POST_FLOP_BOARD_CARD = [
  { STREET: 'Flop', COUNT: 3 },
  { STREET: 'Turn', COUNT: 1 },
  { STREET: 'River', COUNT: 1 },
] as const;

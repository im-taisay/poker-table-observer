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

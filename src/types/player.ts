import { PlayingCardType } from '@/types/game';

export interface PlayerInfo {
  id: number;
  seat: number;
  name: string;
  notes: string;
}

export interface PlayerStats {
  hands: number;
  vpip: number; // Voluntarily Put Money In Pot
  pfr: number; // Pre-Flop Raise
  reRaise: number; // Pre-Flop 3bet
  pfCallCount: number; // Pre-Flop Call Count
  pfRaiseCount: number; // Pre-Flop Raise Count
  pfReRaiseCount: number; // Pre-Flop 3bet Count
  showedHands?: { position: string; hand: [PlayingCardType, PlayingCardType] }[]; // Showed Hands
}

// プレイヤーに統計を合成した型
export type PlayerWithStats = PlayerInfo & { stats: PlayerStats };

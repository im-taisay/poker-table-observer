import type { PlayerWithStats, PlayerStats } from '@/types/player';

/**
 * Calculates the statistics for a given player.
 * @param player The player with stats to calculate.
 * @returns The calculated player stats.
 */
export function calculateStats(player: PlayerWithStats): PlayerStats {
  const { hands, pfCallCount, pfRaiseCount, pfReRaiseCount } = player.stats;
  if (!hands || hands === 0) return { ...player.stats, vpip: 0, pfr: 0, reRaise: 0 };

  return {
    ...player.stats,
    vpip: Math.round(((pfCallCount + pfRaiseCount) / hands) * 100),
    pfr: Math.round((pfRaiseCount / hands) * 100),
    reRaise: Math.round((pfReRaiseCount / hands) * 100),
  };
}

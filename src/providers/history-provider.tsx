'use client';

import { createContext, useContext, useState } from 'react';

import { HandHistory, PostFlopStreet, Action } from '@/types/game';

type HistoryContextType = {
  handHistory: HandHistory[];
  addToHandHistory: (entry: HandHistory) => void;
  addHeroAction: (street: PostFlopStreet, action: Action) => void;
  addVillainAction: (street: PostFlopStreet, action: Action) => void;
};

const HistoryContext = createContext<HistoryContextType | undefined>(undefined);

export function HistoryProvider({ children }: { children: React.ReactNode }) {
  const [handHistory, setHandHistory] = useState<HandHistory[]>([]);

  const addToHandHistory = (entry: HandHistory) => {
    setHandHistory((prev) => [...prev, entry]);
  };

  const addHeroAction = (street: PostFlopStreet, action: Action) => {
    // Implement the logic to add a hero action to the hand history
    setHandHistory((prev) => {
      const lastEntry = prev[prev.length - 1];
      if (lastEntry) {
        lastEntry.actions[street.toLowerCase() as keyof typeof lastEntry.actions].hero.push(action);
      }
      return [...prev];
    });
  };

  const addVillainAction = (street: PostFlopStreet, action: Action) => {
    // Implement the logic to add a villain action to the hand history
    setHandHistory((prev) => {
      const lastEntry = prev[prev.length - 1];
      if (lastEntry) {
        lastEntry.actions[street.toLowerCase() as keyof typeof lastEntry.actions].villain.push(
          action
        );
      }
      return [...prev];
    });
  };

  return (
    <HistoryContext.Provider
      value={{ handHistory, addToHandHistory, addHeroAction, addVillainAction }}
    >
      {children}
    </HistoryContext.Provider>
  );
}

export function useHistory() {
  const ctx = useContext(HistoryContext);
  if (!ctx) throw new Error('useHistory must be used within HistoryProvider');
  return ctx;
}

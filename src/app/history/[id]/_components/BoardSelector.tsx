'use client';

import { Button } from '@/components/ui/button';
import { Street } from '@/types/game';
import { Plus, X } from 'lucide-react';

interface BoardSelectorProps {
  board: {
    flop: string[];
    turn: string;
    river: string;
  };
  onBoardChange: (board: { flop: string[]; turn: string; river: string }) => void;
  focusStreet?: Street;
}

export const BoardSelector = ({ board }: BoardSelectorProps) => {
  return (
    <div className="space-y-3">
      <div className="flex gap-2 justify-center items-center">
        {/* Flop Cards */}
        {board.flop.map((card, index) => (
          <div key={`flop-${index}`} className="relative">
            {card ? (
              <div className="w-12 h-16 bg-white border border-border rounded text-sm flex items-center justify-center font-mono relative group cursor-pointer shadow-sm">
                {card}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    console.log('remove flop card');
                  }}
                  className="absolute -top-1 -right-1 h-5 w-5 p-0 bg-destructive/80 hover:bg-destructive opacity-0 group-hover:opacity-100 transition-opacity rounded-full"
                >
                  <X className="w-3 h-3 text-white" />
                </Button>
              </div>
            ) : (
              <Button
                variant="outline"
                onClick={() => {
                  console.log('add flop card');
                }}
                className="w-12 h-16 p-0 border-2 border-dashed border-muted-foreground/30 hover:border-muted-foreground/50 hover:bg-muted/20"
              >
                <Plus className="w-5 h-5 text-muted-foreground" />
              </Button>
            )}
          </div>
        ))}

        {/* Separator */}
        <div className="w-px h-8 bg-border mx-0.2" />

        {/* Turn Card */}
        <div className="relative">
          {board.turn ? (
            <div className="w-12 h-16 bg-white border border-border rounded text-sm flex items-center justify-center font-mono relative group cursor-pointer shadow-sm">
              {board.turn}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  console.log('remove turn card');
                }}
                className="absolute -top-1 -right-1 h-5 w-5 p-0 bg-destructive/80 hover:bg-destructive opacity-0 group-hover:opacity-100 transition-opacity rounded-full"
              >
                <X className="w-3 h-3 text-white" />
              </Button>
            </div>
          ) : (
            <Button
              variant="outline"
              onClick={() => {
                console.log('add turn card');
              }}
              className="w-12 h-16 p-0 border-2 border-dashed border-muted-foreground/30 hover:border-muted-foreground/50 hover:bg-muted/20"
            >
              <Plus className="w-5 h-5 text-muted-foreground" />
            </Button>
          )}
        </div>

        {/* Separator */}
        <div className="w-px h-8 bg-border mx-0.2" />

        {/* River Card */}
        <div className="relative">
          {board.river ? (
            <div className="w-12 h-16 bg-white border border-border rounded text-sm flex items-center justify-center font-mono relative group cursor-pointer shadow-sm">
              {board.river}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => console.log('remove river card')}
                className="absolute -top-1 -right-1 h-5 w-5 p-0 bg-destructive/80 hover:bg-destructive opacity-0 group-hover:opacity-100 transition-opacity rounded-full"
              >
                <X className="w-3 h-3 text-white" />
              </Button>
            </div>
          ) : (
            <Button
              variant="outline"
              onClick={() => console.log('add river card')}
              className="w-12 h-16 p-0 border-2 border-dashed border-muted-foreground/30 hover:border-muted-foreground/50 hover:bg-muted/20"
            >
              <Plus className="w-5 h-5 text-muted-foreground" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

'use client';

import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { NavigationHeader } from '@/components/common/NavigationHeader';

export const HistoryPageClient = () => {
  return (
    <div className="space-y-4">
      <NavigationHeader activeTab="history" setActiveTab={() => {}} />
      {/* Add New Game Button */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-foreground">ハンド履歴</h2>
        <Button onClick={() => {}} className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          新しいハンド
        </Button>
      </div>
      {/* Game History List */}
      <div className="space-y-3">
        <Card>
          <CardContent>
            <h3 className="font-semibold">Game 1</h3>
            <p className="text-sm text-muted-foreground">Player 1 vs Player 2</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

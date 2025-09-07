'use client';

import { useState } from 'react';

import { Plus } from 'lucide-react';

import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

import { usePlayers } from '@/providers/player-provider';

import { PlayerInfo } from '@/types/player';

interface AddPlayerModalProps {
  setShowAddPlayer: (show: boolean) => void;
}

export const AddPlayerModal = ({ setShowAddPlayer }: AddPlayerModalProps) => {
  const { addPlayer } = usePlayers();

  const [newPlayer, setNewPlayer] = useState<PlayerInfo>({
    id: 0, // id will be set when adding the player
    seat: 1,
    name: '',
    notes: '',
  });

  const handleAddPlayer = () => {
    addPlayer(newPlayer);
    setShowAddPlayer(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/80">
      <Card className="bg-card border-border w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-card-foreground flex items-center gap-2">
            <Plus className="w-5 h-5" />
            プレイヤー追加
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <div className="space-y-4">
            <div>
              <Label className="text-sm text-muted-foreground mb-2 block">Seat #:</Label>
              <Input
                type="number"
                value={newPlayer.seat}
                onChange={(e) =>
                  setNewPlayer({ ...newPlayer, seat: Number.parseInt(e.target.value) })
                }
                className="w-full"
              />
            </div>
            <div>
              <Label className="text-sm text-muted-foreground mb-2 block">名前 or 特徴:</Label>
              <Input
                value={newPlayer.name}
                onChange={(e) => setNewPlayer({ ...newPlayer, name: e.target.value })}
                className="w-full"
              />
            </div>
            <div>
              <Label className="text-sm text-muted-foreground mb-2 block">Notes:</Label>
              <Textarea
                value={newPlayer.notes}
                onChange={(e) => setNewPlayer({ ...newPlayer, notes: e.target.value })}
                placeholder="プレイヤーの詳細を入力..."
                className="w-full"
              />
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <Button
              onClick={() => setShowAddPlayer(false)}
              variant="outline"
              className="bg-transparent"
            >
              キャンセル
            </Button>
            <Button
              onClick={() => handleAddPlayer()}
              className="bg-primary hover:bg-primary/90 ml-2"
            >
              追加
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

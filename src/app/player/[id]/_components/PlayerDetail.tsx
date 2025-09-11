'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, Edit2, Trash2, Trash, Plus } from 'lucide-react';

import { RecordedHand } from './RecordedHand';
import { StatBadge } from '@/components/common/StatBadge';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { usePlayers } from '@/providers/player-provider';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { DeleteConfirmationModal } from '@/components/common/DeleteConfirmModal';

interface PlayerDetailProps {
  setIsOpenSelectShowedHandsModal: (open: boolean) => void;
  playerId: number;
}

export const PlayerDetail = ({ setIsOpenSelectShowedHandsModal, playerId }: PlayerDetailProps) => {
  const router = useRouter();
  const { players, onUpdatePlayer, onResetStats, onResetHands, deletePlayer } = usePlayers();

  const player = players.find((p) => p.id === playerId);

  const [isEditing, setIsEditing] = useState(false);
  const [editPlayerInfo, setEditPlayerInfo] = useState<{ name: string; seat: number }>({
    name: '',
    seat: 0,
  });
  const [isOpenDeleteConfirmModal, setIsOpenDeleteConfirmModal] = useState(false);
  const { name: editName, seat: editSeat } = editPlayerInfo;

  useEffect(() => {
    if (!player || isEditing) return;
    setEditPlayerInfo({ name: player.name, seat: player.seat });
  }, [player, isEditing]);

  if (!player) return null;

  return (
    <div>
      {isEditing ? (
        <div>
          <div className="flex items-center gap-2 flex-1">
            <Input
              type="number"
              value={editSeat}
              onChange={(e) =>
                setEditPlayerInfo({ ...editPlayerInfo, seat: Number.parseInt(e.target.value) })
              }
              className="w-16 h-8 text-sm"
              placeholder="Seat"
            />
            <Input
              value={editName}
              onChange={(e) => setEditPlayerInfo({ ...editPlayerInfo, name: e.target.value })}
              className="flex-1 h-8 text-sm"
              placeholder="Name"
            />
          </div>
          <div className="flex gap-2 mt-3 justify-end">
            <Button
              size="sm"
              onClick={() => {
                onUpdatePlayer({ ...player, ...editPlayerInfo });
                setIsEditing(false);
              }}
              className="h-8 px-3"
            >
              Save
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setIsEditing(false)}
              className="h-8 px-3 bg-transparent"
            >
              Cancel
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between w-full">
          <span className="flex items-center gap-2">
            <User className="w-5 h-5" />#{player.seat} {player.name}
          </span>
          <div>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setIsEditing(true)}
              className="h-8 w-8 p-0"
            >
              <Edit2 className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setIsOpenDeleteConfirmModal(true)}
              className="h-8 w-8 p-0 text-destructive hover:text-destructive hover:bg-destructive/10"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
      <div className="mb-4">
        <Label className="text-xs text-muted-foreground mb-2 block">Stats</Label>
        <div className="flex gap-2 flex-wrap">
          <StatBadge
            value={player.stats?.vpip}
            label="VPIP"
            colorClass="text-yellow-400"
            minWidth="w-20"
            minHeight="h-14"
            badgeHeight={50}
          />
          <StatBadge
            value={player.stats?.pfr}
            label="PFR"
            colorClass="text-red-400"
            minWidth="w-20"
            badgeHeight={50}
          />
          <StatBadge
            value={player.stats?.reRaise}
            label="3bet"
            colorClass="text-blue-400"
            minWidth="w-20"
            badgeHeight={50}
          />
        </div>
      </div>
      <div className="space-y-3">
        <div>
          <Label className="text-xs text-muted-foreground mb-1 block">Notes</Label>
          <Textarea
            value={player.notes || ''}
            onChange={(e) => onUpdatePlayer({ ...player, notes: e.target.value })}
            placeholder="Play style etc..."
            className="text-sm resize-none"
            rows={2}
          />
        </div>
      </div>

      {/* showed hands history */}
      <div className="mt-4">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">Showed Hand</CardTitle>
              <Button onClick={() => setIsOpenSelectShowedHandsModal(true)}>
                <Plus />
                Add Hand
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            {player.stats.showedHands?.length === 0 && (
              <div className="text-sm text-muted-foreground">No hand history.</div>
            )}
            <div className="flex flex-wrap gap-2 mt-2 justify-start items-start">
              {player.stats?.showedHands?.map((recordedHand, index) => (
                <div key={index} className="flex-none w-21 sm:w-24 md:w-28 lg:w-32">
                  <RecordedHand hand={recordedHand.hand} position={recordedHand.position} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-4 flex justify-between">
        <div className="flex justify-between mt-4">
          <Button
            variant="outline"
            onClick={() => onResetStats(player.id)}
            className="bg-destructive hover:bg-destructive/90"
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Reset Stats
          </Button>
        </div>

        <div className="flex justify-between mt-4">
          <Button
            variant="outline"
            onClick={() => onResetHands(player.id)}
            className="bg-destructive hover:bg-destructive/90"
          >
            <Trash className="w-4 h-4 mr-2" />
            Reset Hands
          </Button>
        </div>
      </div>
      {isOpenDeleteConfirmModal && (
        <DeleteConfirmationModal
          title="Delete Player"
          message={`Are you sure you want to delete this player?\n This action cannot be undone.`}
          onClose={() => setIsOpenDeleteConfirmModal(false)}
          onConfirm={() => {
            deletePlayer(player.id);
            setIsOpenDeleteConfirmModal(false);
            router.push(`/`);
          }}
        />
      )}
    </div>
  );
};

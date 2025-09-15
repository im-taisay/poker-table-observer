'use client';

import { useState } from 'react';

import { ArrowRight, X } from 'lucide-react';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

import { useHistory } from '@/providers/history-provider';

import { Position, PostFlopStreet, Street, Action, ActionType } from '@/types/game';
import { STREETS, POST_ACTIONS } from '@/const/game';

interface BetActionSelectorProps {
  heroPosition: Position;
  villainPosition: Position;
}

export const BetActionSelector = ({ heroPosition, villainPosition }: BetActionSelectorProps) => {
  const { addHeroAction, addVillainAction } = useHistory();

  const [actions, setActions] = useState<Action[]>([]);
  const [currentStreet, setCurrentStreet] = useState<PostFlopStreet>('Flop');

  // Action input state
  const [actionType, setActionType] = useState<'fold' | 'check' | 'call' | 'raise' | 'bet'>(
    'check'
  );
  const [betAmount, setBetAmount] = useState('');
  const [betType, setBetType] = useState<'bb' | 'pot'>('bb');

  const getPositionOrder = (street: Street): Position[] => {
    if (street === STREETS.PRE_FLOP) {
      // プリフロップはUTGから開始
      return ['UTG', '+1', '+2', 'LJ', 'HJ', 'CO', 'BTN', 'SB', 'BB'];
    } else {
      // ポストフロップはSBから開始
      return ['SB', 'BB', 'UTG', '+1', '+2', 'LJ', 'HJ', 'CO', 'BTN'];
    }
  };

  const getNextActionPosition = (): 'hero' | 'villain' => {
    const streetActions = actions.filter((action) => action.street === currentStreet);
    const positionOrder = getPositionOrder(currentStreet);

    // 現在のストリートでのアクション数に基づいて次のプレイヤーを決定
    const actionCount = streetActions.length;

    const activePositions = [heroPosition, villainPosition].sort((a, b) => {
      return positionOrder.indexOf(a) - positionOrder.indexOf(b);
    });

    // 交互にアクションを割り当てる(奇数回目はOOP、偶数回目はIP)
    const nextPositionIndex = actionCount % 2;
    const nextPosition = activePositions[nextPositionIndex];

    return nextPosition === heroPosition ? 'hero' : 'villain';
  };

  const addAction = () => {
    if (!actionType) return;

    const nextPosition = getNextActionPosition();

    const newAction: Action = {
      amountType: betType,
      amount: Number(betAmount),
      action: actionType,
      position: nextPosition,
      street: currentStreet,
    };

    console.log('add action:', newAction);

    if (nextPosition === 'hero') {
      addHeroAction(currentStreet, newAction);
    } else {
      addVillainAction(currentStreet, newAction);
    }

    setActions((prev) => [...prev, newAction]);
    // init
    setBetAmount('');
  };

  const getNextPlayerLabel = () => {
    const nextPosition = getNextActionPosition();
    const positionName = nextPosition === 'hero' ? heroPosition : villainPosition;
    const playerType = nextPosition === 'hero' ? 'Hero' : 'Villain';
    return `${playerType} (${positionName})`;
  };

  const formatAction = (action: Action) => {
    const positionLabel = action.position === 'hero' ? heroPosition : villainPosition;
    let actionText = action.action;

    if (action.amount && action.amountType) {
      actionText += ` ${action.amount}${action.amountType === 'bb' ? 'bb' : '%pot'}`;
    }

    return `${positionLabel}: ${actionText}`;
  };

  return (
    <Card className="bg-muted/30 border-border">
      <CardHeader>
        <CardTitle className="text-sm font-medium text-muted-foreground">
          ベットアクション選択
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs
          value={currentStreet}
          onValueChange={(value: string) => setCurrentStreet(value as PostFlopStreet)}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-4">
            {Object.values(STREETS).map((street) => (
              <TabsTrigger key={street} value={street} className="capitalize">
                {street}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.values(STREETS).map((street) => {
            // const streetActions = getStreetActions(street);

            return (
              <TabsContent key={street} value={street} className="space-y-4 mt-4">
                <div className="space-y-4">
                  {/* Next Action Player */}
                  <div className="text-xs text-blue-600 bg-blue-50 px-3 py-2 rounded-md border">
                    Next Action: {getNextPlayerLabel()}
                  </div>

                  {/* Action Input */}
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <Label className="text-sm text-muted-foreground mb-2 block">Action</Label>
                      <Select
                        value={actionType}
                        onValueChange={(value: string) => setActionType(value as ActionType)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fold">Fold</SelectItem>
                          <SelectItem value="check">Check</SelectItem>
                          <SelectItem value="bet">Bet</SelectItem>
                          <SelectItem value="call">Call</SelectItem>
                          <SelectItem value="raise">Raise</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {(actionType === POST_ACTIONS.BET || actionType === POST_ACTIONS.RAISE) && (
                    <div className="grid grid-cols-3 gap-2">
                      <div className="col-span-2">
                        <Label className="text-sm text-muted-foreground mb-2 block">Amount</Label>
                        <Input
                          type="number"
                          value={betAmount}
                          onChange={(e) => setBetAmount(e.target.value)}
                          placeholder="Enter amount"
                        />
                      </div>
                      <div>
                        <Label className="text-sm text-muted-foreground mb-2 block">Unit</Label>
                        <Select
                          value={betType}
                          onValueChange={(value: 'bb' | 'pot') => setBetType(value)}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="bb">BB</SelectItem>
                            <SelectItem value="pot">% Pot</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  )}

                  <Button className="w-full" onClick={addAction}>
                    <ArrowRight className="w-4 h-4 mr-2" />
                    アクション追加
                  </Button>
                </div>

                <div className="space-y-2">
                  <h5 className="text-sm font-medium text-foreground">記録されたアクション</h5>
                  <div className="space-y-1">
                    {actions.map((action, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-background/50 p-2 rounded border"
                      >
                        <span className="text-sm">{formatAction(action)}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {}}
                          className="h-6 w-6 p-0 hover:bg-destructive/20"
                        >
                          <X className="w-3 h-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </CardContent>
    </Card>
  );
};

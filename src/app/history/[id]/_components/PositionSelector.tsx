'use client';

import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { POSITIONS } from '@/const/game';
import { Position } from '@/types/game';

interface PositionSelectorProps {
  label: string;
  position: Position | undefined;
  setPosition: (position: Position) => void;
}

export const PositionSelector = ({ label, position, setPosition }: PositionSelectorProps) => {
  return (
    <div>
      <Label className="text-sm text-muted-foreground mb-2 block">{label}</Label>
      <Select value={position} onValueChange={(value: Position) => setPosition(value)}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {POSITIONS.map((position) => (
            <SelectItem key={position} value={position}>
              {position}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <h1>Poker Table Observer</h1>
              <Button
                onClick={() => console.log('add player')}
                className="bg-primary hover:bg-primary/90"
              >
                <Plus className="w-4 h-4 mr-2" />
                プレイヤー追加
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

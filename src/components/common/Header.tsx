'use client';

// import { Plus } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const sampleOnClick = () => {
//   console.log('clicked');
// };

export const Header = () => {
  return (
    // Header
    <div className="">
      {/* stack vertically on small screens, horizontal from `sm` and up */}
      <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-4 w-full sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground text-center sm:text-left">
            Poker Table Observer
          </h1>
        </div>
        {/* <Button
          onClick={sampleOnClick}
          className="self-center sm:self-end bg-primary hover:bg-primary/90 mt-4 sm:mt-0"
        >
          <Plus className="w-4 h-4 mr-2" />
          プレイヤー追加
        </Button> */}
      </div>
    </div>
  );
};

'use client';

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
      </div>
    </div>
  );
};

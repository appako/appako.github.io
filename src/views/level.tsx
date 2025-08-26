import { FC } from 'react';

export type LevelValue = 1 | 2 | 3 | 4 | 5;

export type LevelProps = { value: LevelValue };
export const Level: FC<LevelProps> = ({ value }) => {
  return (
    <div className="flex-1">
      <div className="relative h-1.5 bg-gray-500 rounded-full w-full">
        <div
          className="absolute top-0 left-0 h-1.5 bg-blue-100 rounded-full"
          style={{ width: `${(value / 5) * 100}%` }}
        />
      </div>
    </div>
  );
};

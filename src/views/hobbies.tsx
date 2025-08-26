import { FC, PropsWithChildren } from 'react';

export const Hobbies: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="mb-6 w-full">
      <h2 className="text-base font-semibold mb-2">Hobbies</h2>
      <div className="text-xs">{children}</div>
    </div>
  );
};

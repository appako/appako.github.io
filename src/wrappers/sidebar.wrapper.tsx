import { FC, PropsWithChildren } from 'react';

export const Sidebar: FC<PropsWithChildren> = ({ children }) => {
  return (
    <aside className="hidden sm:flex w-1/3 bg-gray-800 text-white flex-col items-center py-10 px-8 relative">
      {children}
    </aside>
  );
};

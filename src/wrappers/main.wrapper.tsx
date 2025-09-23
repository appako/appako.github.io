import { FC, PropsWithChildren } from 'react';

export const MainWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <main className="w-auto sm:w-2/3 bg-white p-8 flex flex-col">{children}</main>;
};

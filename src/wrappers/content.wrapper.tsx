import { FC, PropsWithChildren } from 'react';

export const ContentWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className="flex w-[900px] rounded-2xl shadow-xl overflow-hidden">{children}</div>;
};

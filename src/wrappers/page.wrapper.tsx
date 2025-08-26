import { FC, PropsWithChildren } from 'react';

export const PageWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className="min-h-screen bg-gray-100 flex justify-center items-center py-8">{children}</div>;
};

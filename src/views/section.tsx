import { FC, PropsWithChildren } from 'react';

export const SectionWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <section className="mb-8">{children}</section>;
};

export const SectionName: FC<PropsWithChildren> = ({ children }) => {
  return <h2 className="text-xl font-bold mb-2">{children}</h2>;
};

export const SectionTitle: FC<PropsWithChildren> = ({ children }) => {
  return <div className="mb-2 font-semibold">{children} </div>;
};

export const SectionSubTitle: FC<PropsWithChildren> = ({ children }) => {
  return <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">{children} </div>;
};

export const SectionContent: FC<PropsWithChildren> = ({ children }) => {
  return <div className="text-sm mb-1 text-gray-700">{children}</div>;
};

export const SectionList: FC<PropsWithChildren> = ({ children }) => {
  return <ul className="list-disc ml-6 text-sm text-gray-700">{children}</ul>;
};

import { FC } from 'react';
import { Level, LevelValue } from './level';

export type Language = { name: string; level: LevelValue };
export type LanguagesProps = { languages: Language[] };

const renderLanguage = (lang: Language) => (
  <li key={lang.name} className="flex-col space-y-2">
    <div>
      <span className="flex-1">{lang.name}</span>
    </div>
    <Level value={lang.level} />
  </li>
);

export const Languages: FC<LanguagesProps> = ({ languages }) => {
  return (
    <div className="mb-6 w-full">
      <h2 className="text-base font-semibold mb-2">Languages</h2>
      <ul className="text-xs space-y-3">{languages.map(renderLanguage)}</ul>
    </div>
  );
};

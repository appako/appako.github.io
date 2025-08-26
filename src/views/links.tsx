import { FC } from 'react';
import { LinkExternal } from './link';

export type LinksProps = { links: string[] };
export const Links: FC<LinksProps> = ({ links }) => {
  return (
    <div className="mb-6 w-full">
      <h2 className="text-base font-semibold mb-2">Links</h2>
      <div className="flex-col text-xs space-y-1">
        {links.map((url) => (
          <div key={url}>
            <LinkExternal url={url} />
          </div>
        ))}
      </div>
    </div>
  );
};

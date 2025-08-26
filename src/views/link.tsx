import { FC, useMemo } from 'react';

export type LinkEmailProps = { email: string };
export const LinkEmail: FC<LinkEmailProps> = ({ email }) => {
  return (
    <a href={`mailto:${email}`} className="hover:underline text-blue-300">
      {email}
    </a>
  );
};

export type LinkPhoneProps = { phone: string };
export const LinkPhone: FC<LinkPhoneProps> = ({ phone }) => {
  return (
    <a href={`tel:${phone}`} className="hover:underline text-blue-300">
      {phone}
    </a>
  );
};

export type LinkExternalProps = { url: string };
export const LinkExternal: FC<LinkExternalProps> = ({ url }) => {
  const children = useMemo(() => url.replace(/^https?:\/\//, ''), [url]);

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-300">
      {children}
    </a>
  );
};

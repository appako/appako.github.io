import { FC } from 'react';
import { LinkEmail, LinkPhone } from './link';

export type DetailsProps = {
  country: string;
  email: string;
  phone: string;
};

export const Details: FC<DetailsProps> = ({ country, email, phone }) => {
  return (
    <div className="mb-6 w-full">
      <h2 className="text-base font-semibold mb-2">Details</h2>
      <div className="text-xs space-y-1">
        <div>{country}</div>
        <div>
          <LinkPhone phone={phone} />
        </div>
        <div>
          <LinkEmail email={email} />
        </div>
      </div>
    </div>
  );
};

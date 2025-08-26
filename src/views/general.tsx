import { FC } from 'react';

export type InfoProps = {
  firstName: string;
  lastName: string;
  job: string;
  photo: string;
};

export const General: FC<InfoProps> = ({ firstName, lastName, job, photo }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={photo} alt={photo} className="w-24 h-24 rounded-full object-cover mb-6 border-4 border-gray-700" />
      <h1 className="text-2xl font-bold mb-1 text-center">
        {firstName} {lastName}
      </h1>
      <div className="uppercase text-xs tracking-widest mb-6 text-gray-400 text-center">{job}</div>
      <hr className="border-gray-700 w-full mb-6" />
    </div>
  );
};

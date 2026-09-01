import { FC } from 'react';

export const Download: FC = () => {
  return (
    <div className="download-control fixed bottom-4 right-4 hidden lg:block">
      <button
        className="px-4 py-2 rounded-2xl bg-gray-800 text-white hover:bg-gray-700 transition-colors cursor-pointer"
        onClick={() => window.print()}
      >
        Download PDF
      </button>
    </div>
  );
};

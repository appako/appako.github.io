import { FC, useCallback } from 'react';

export const Download: FC = () => {
  const handleDownload = useCallback(() => {
    alert('Not implemented yet');
  }, []);

  return (
    <div className="fixed bottom-4 right-4">
      <button
        className="px-4 py-2 rounded-2xl bg-gray-800 text-white hover:bg-gray-700 transition-colors cursor-pointer"
        onClick={handleDownload}
      >
        Download
      </button>
    </div>
  );
};

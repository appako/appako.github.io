import { generatePDF } from '@app/tools/converter';
import { FC, RefObject, useCallback } from 'react';

export const Download: FC<{ contentRef: RefObject<HTMLElement | null> }> = ({ contentRef }) => {
  const handleDownload = useCallback(() => {
    if (!contentRef.current) return alert('No contentRef');
    generatePDF(contentRef, { filename: 'Resume_Vladyslav_Koliesnikov.pdf' }).catch(console.error);
  }, [contentRef]);

  return (
    <div className="fixed bottom-4 right-4">
      <button
        className="px-4 py-2 rounded-2xl bg-gray-800 text-white hover:bg-gray-700 transition-colors cursor-pointer"
        onClick={handleDownload}
      >
        Download PDF
      </button>
    </div>
  );
};

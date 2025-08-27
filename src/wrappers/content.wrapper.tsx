import { forwardRef, PropsWithChildren } from 'react';

export const ContentWrapper = forwardRef<HTMLDivElement | null, PropsWithChildren>(({ children }, ref) => {
  return (
    <div ref={ref} className="flex w-[900px] shadow-xl overflow-hidden">
      {children}
    </div>
  );
});

import { ReactNode } from 'react';

interface RootProps {
  children: ReactNode;
}

function Root({ children }: RootProps) {
  return (
    <div className='p-2 w-full flex flex-col gap-2 mx-auto bg-white shadow-material rounded-lg overflow-hidden md:max-w-md lg:max-w-md'>
      {children}
    </div>
  );
}

export default Root;

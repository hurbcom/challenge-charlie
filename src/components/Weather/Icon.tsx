import { memo } from 'react';

interface RootProps {
  name: string;
  className?: string;
}

const iconMapping: { [key: string]: string } = {
  '01d': 'B',
  '01n': 'C',
  '02d': 'H',
  '02n': 'I',
  '03d': 'N',
  '03n': 'N',
  '04d': 'Y',
  '04n': 'Y',
  '09d': 'Q',
  '09n': 'Q',
  '10d': 'R',
  '10n': 'R',
  '11d': 'O',
  '11n': 'O',
  '13d': 'W',
  '13n': 'W',
  '50d': 'J',
  '50n': 'K',
};

function Icon({ name, className }: RootProps) {
  const icon = iconMapping[name] || ')';

  return (
    <div className='flex flex-1 items-center justify-center'>
      <span
        className={`w-48 h-48 text-[192px] flex justify-center items-center text-gray-700 ${className}`}
        data-icon={icon}
        aria-label='Weather icon'
        role='img'
      />
    </div>
  );
}

export default memo(Icon);

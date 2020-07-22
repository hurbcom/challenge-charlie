import React from 'react';

const icons = {
  none: {
    icon: ')',
    description: '',
  },
  compass: {
    icon: '(',
    description: '',
  },
  '01d': {
    icon: 'B',
    description: 'Céu Limpo',
  },
  '01n': {
    icon: 'C',
    description: 'Céu Limpo',
  },
  '02d': {
    icon: 'H',
    description: 'Poucas Núvens',
  },
  '02n': {
    icon: 'I',
    description: 'Poucas Núvens',
  },
  '03d': {
    icon: 'N',
    description: 'Núvens Dispersas',
  },
  '03n': {
    icon: 'N',
    description: 'Núvens Dispersas',
  },
  '04d': {
    icon: 'Y',
    description: 'Núvens Quebradas',
  },
  '04n': {
    icon: 'Y',
    description: 'Núvens Quebradas',
  },
  '09d': {
    icon: 'R',
    description: 'Chuva de Banho',
  },
  '09n': {
    icon: 'R',
    description: 'Chuva de Banho',
  },
  '10d': {
    icon: 'X',
    description: 'Chuva',
  },
  '10n': {
    icon: 'X',
    description: 'Chuva',
  },
  '11d': {
    icon: '0',
    description: 'Trovoada',
  },
  '11n': {
    icon: '0',
    description: 'Trovoada',
  },
  '13d': {
    icon: 'G',
    description: 'Neve',
  },
  '13n': {
    icon: 'G',
    description: 'Neve',
  },
  '50d': {
    icon: 'M',
    description: 'Névoa',
  },
  '50n': {
    icon: 'M',
    description: 'Névoa',
  },
};

interface IconProps {
  symbol: keyof typeof icons;
  description?: string;
}

const Icon: React.FC<IconProps> = ({ symbol = '01d', description }) => {
  console.log({ symbol });
  return (
    <span
      data-icon={icons[symbol].icon}
      title={description || icons[symbol].description}
    />
  );
};

export default Icon;

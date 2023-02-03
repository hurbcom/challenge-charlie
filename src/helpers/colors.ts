enum BaseColorEnum {
  BLUE = 'blue',
  YELLOW = 'yellow',
  RED = 'red',
  GRAY = 'gray',
}

const baseColorByTemperature: Record<number, BaseColorEnum> = {
  15: BaseColorEnum.BLUE, // temp less than 15
  36: BaseColorEnum.YELLOW, // temp 15 and less than 36
  99: BaseColorEnum.RED, // temp from 36 up
};

export const colorsMap: Record<
  BaseColorEnum,
  { [key: number]: { bgColor: string; textColor: string } }
> = {
  blue: {
    0: { bgColor: '#bfdbfe', textColor: '#5e5e5e' },
    1: { bgColor: '#93c5fd', textColor: '#4f4f4f' },
    2: { bgColor: '#60a5fa', textColor: '#383838' },
    3: { bgColor: '#3b82f6', textColor: '#1c1c1c' },
    4: { bgColor: '#2563eb', textColor: '#f0f0f0' },
  },
  red: {
    0: { bgColor: '#fecaca', textColor: '#5c5c5c' },
    1: { bgColor: '#fca5a5', textColor: '#474747' },
    2: { bgColor: '#f87171', textColor: '#333333' },
    3: { bgColor: '#ef4444', textColor: '#1c1c1c' },
    4: { bgColor: '#dc2626', textColor: '#f7f7f7' },
  },
  yellow: {
    0: { bgColor: '#fef08a', textColor: '#6b6b6b' },
    1: { bgColor: '#fde047', textColor: '#636363' },
    2: { bgColor: '#facc15', textColor: '#595959' },
    3: { bgColor: '#eab308', textColor: '#4a4a4a' },
    4: { bgColor: '#ca8a04', textColor: '#2e2e2e' },
  },
  gray: {
    0: { bgColor: '#e5e7eb', textColor: '#666666' },
    1: { bgColor: '#d1d5db', textColor: '#5c5c5c' },
    2: { bgColor: '#9ca3af', textColor: '#383838' },
    3: { bgColor: '#6b7280', textColor: '#f7f7f7' },
    4: { bgColor: '#4b5563', textColor: '#e3e3e3' },
  },
};

export function getBasecolorByTemperature(temperature: number) {
  for (const baseColor in baseColorByTemperature) {
    if (temperature < Number(baseColor)) {
      return baseColorByTemperature[baseColor];
    }
  }
  return BaseColorEnum.GRAY;
}

export function getColorByTemperatureAndIndex(
  temperature: number,
  index: number
) {
  const baseColor = getBasecolorByTemperature(temperature) as BaseColorEnum;
  const colors = colorsMap[baseColor];

  return colors[index];
}

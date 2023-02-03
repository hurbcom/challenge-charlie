import { colorsMap } from '../../helpers/colors';

export function DayBoxFallback() {
  return (
    <>
      <div
        className="day-box__fallback --expanded"
        style={{ backgroundColor: colorsMap.gray[0].bgColor, flex: 1 }}
      />
      <div
        className="day-box__fallback"
        style={{ backgroundColor: colorsMap.gray[1].bgColor, height: '160px' }}
      />
      <div
        className="day-box__fallback"
        style={{ backgroundColor: colorsMap.gray[2].bgColor, height: '160px' }}
      />
    </>
  );
}

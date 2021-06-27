import getNearestNumber from './getNearestNumber';

type Direction = {
  degree: number,
  direction: string,
}

export default function getWindDirectionByAzimuthDegrees(
  degree: number,
): string {
  const directions: Direction[] = [
    {
      degree: 0,
      direction: 'N',
    },
    {
      degree: 45,
      direction: 'NE',
    },
    {
      degree: 90,
      direction: 'L',
    },
    {
      degree: 135,
      direction: 'SE',
    },
    {
      degree: 180,
      direction: 'S',
    },
    {
      degree: 225,
      direction: 'SO',
    },
    {
      degree: 270,
      direction: 'O',
    },
    {
      degree: 315,
      direction: 'NO',
    },
    {
      degree: 360,
      direction: 'N',
    },
  ];

  const justDegrees = directions.map((direction) => direction.degree);

  const nearestDirectionNumber = getNearestNumber(degree, justDegrees);

  const nearestDirection = directions.find(
    (direction) => direction.degree === nearestDirectionNumber,
  );

  return nearestDirection?.direction || '';
}

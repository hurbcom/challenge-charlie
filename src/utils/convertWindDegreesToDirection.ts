import { WindsCardinalDirectionEnum } from '../enums/WindsCardinalDirectionEnum';

export default function convertWindDegreesToDirection(windDegree: number): string {
  let windDirectionLabel;
  console.log(`windDegree`, windDegree);
  switch (windDegree) {
    case 360:
      windDirectionLabel = WindsCardinalDirectionEnum.North;
      break;
    case 90:
      windDirectionLabel = WindsCardinalDirectionEnum.East;
      break;
    case 180:
      windDirectionLabel = WindsCardinalDirectionEnum.South;
      break;
    case 270:
      windDirectionLabel = WindsCardinalDirectionEnum.West;
      break;
    default:
      if (windDegree > 0 && windDegree < 90) windDirectionLabel = WindsCardinalDirectionEnum.Northeast;
      if (windDegree > 90 && windDegree < 180) windDirectionLabel = WindsCardinalDirectionEnum.Southeast;
      if (windDegree > 180 && windDegree < 270) windDirectionLabel = WindsCardinalDirectionEnum.Southwest;
      if (windDegree > 270 && windDegree < 360) windDirectionLabel = WindsCardinalDirectionEnum.Northwest;
      break;
  }

  return windDirectionLabel;
}

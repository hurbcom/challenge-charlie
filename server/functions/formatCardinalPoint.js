export default function formatCardinalPoint(deg) {
  let response = '';
  if (deg === 0 || deg === 360) response = 'N';
  if (deg > 0 && deg < 90) response = 'NE';
  if (deg === 90) response = 'L';
  if (deg > 90 && deg < 180) response = 'SE';
  if (deg === 180) response = 'S';
  if (deg > 180 && deg < 270) response = 'SO';
  if (deg === 270) response = 'O';
  if (deg > 270 && deg < 360) response = 'NO';

  return response;
}

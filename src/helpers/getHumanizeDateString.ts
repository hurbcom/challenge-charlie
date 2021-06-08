import dayjs from 'dayjs';

export const timestampTotHumanizeDateString = (timestamp: number | undefined) => {
  if (!timestamp) return dayjs().format('DD/MM/YYYY');

  if (dayjs.unix(timestamp).format('DD/MM/YYYY') === dayjs().format('DD/MM/YYYY')) {
    return 'Hoje';
  }

  if (dayjs.unix(timestamp).format('DD/MM/YYYY') === dayjs().add(1, 'day').format('DD/MM/YYYY')) {
    return 'Amanhã';
  }

  if (dayjs.unix(timestamp).format('DD/MM/YYYY') === dayjs().add(2, 'day').format('DD/MM/YYYY')) {
    return 'Depois de amanhã';
  }

  return dayjs.unix(timestamp).format('DD/MM/YYYY');
};

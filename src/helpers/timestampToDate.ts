import dayjs from 'dayjs';

export const timestampToDate = (timestamp: number) => dayjs.unix(timestamp);

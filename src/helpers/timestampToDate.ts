import * as dayjs from 'dayjs';

export const timestampToDate = (timestamp: number) => dayjs.unix(timestamp).format('DD/MM/YYYY');

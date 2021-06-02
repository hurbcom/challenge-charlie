import stringfy from 'qs-stringify';

export const objectToQueryString = (payload: any): string => stringfy(payload);

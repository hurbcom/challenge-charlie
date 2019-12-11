import { getDay, parseISO } from 'date-fns';

export default function formatUnusedData(datas) {
  return datas.filter((current, index, array) => {
    if (index !== 0) {
      const prevDate = getDay(parseISO(array[index - 1].dt_txt));
      const currentDate = getDay(parseISO(current.dt_txt));

      if (prevDate !== currentDate) return current;
    }
    if (index === 0) return current;
  });
}

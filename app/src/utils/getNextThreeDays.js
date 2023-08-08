export const getNextThreeDays = (todayFullDate) => {
  const firstDate = new Date(todayFullDate);
  const dayMonth = [31, 30, 31, 30, 31, 31, 30, 31, 30, 31, 31];

  const result = [todayFullDate];

  for (let i = 1; i <= 2; i++) {
    let newDate = new Date(firstDate.getTime() + i * 24 * 60 * 60 * 1000);

    if (newDate.getMonth() === 1 && newDate.getDate() === 28) {
      newDate.setDate(newDate.getDate() + 2);
    } else if (dayMonth[newDate.getMonth()] === 30 && newDate.getDate() === 31) {
      newDate.setDate(30);
    }
    const newDateFormated = newDate.toISOString().slice(0, 10) + ' ' + todayFullDate.slice(11);

    result.push(newDateFormated);
  }

  return result;
};

export default getNextThreeDays;

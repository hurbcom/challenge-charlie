export function addDays(date: Date, days: number) {
  return new Date(date.setDate(date.getDate() + days));
}

export function isWithinPeriod(dateToCompare: Date, startDate: Date, daysLimit: number) {
  for (let index = 0; index < daysLimit; index++) {
    let textDateToCompare = dateToCompare.toLocaleDateString('pt-br');
    let textDateValid = addDays(startDate, index).toLocaleDateString('pt-br');

    if (textDateValid === textDateToCompare) {
      return true;
    }
  }

  return false;
}

export function isMidday(date: Date) {
  const midday = '12:00';
  const hour = Intl.DateTimeFormat('pt-br', {
    hour: 'numeric',
    minute: 'numeric',
  }).format(date);

  return hour === midday;
}

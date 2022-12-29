export function getFirstDayInfo(arr) {
  const now = new Date();
  let currentDate = `${now.getFullYear()}-${
    now.getMonth() + 1
  }-${now.getDate()}`;
  const ret = [];
  for (const elem of arr) {
    const elemDate = elem.dt_txt.split(" ")[0];
    if (elemDate !== currentDate) {
      ret.push(elem);
      currentDate = elemDate;
    }
  }

  return ret;
}

if (process.env.NODE_ENV === "development") {
  window.getFirstDayInfo = getFirstDayInfo;
}

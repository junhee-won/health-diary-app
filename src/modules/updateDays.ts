export default function updateDays({ diaries }) {
  const nowDate = new Date();
  let year = nowDate.getFullYear();
  let _month = nowDate.getMonth();
  let month = _month < 9 ? `0${_month + 1}` : _month + 1;
  const date = nowDate.getDate();

  // days in a month
  let daysInAMonth = 0;
  let monthDiariesIndex = diaries.findIndex(
    (item) => item.yearMonth === `${year}-${month}`
  );
  if (monthDiariesIndex !== -1) {
    for (let i = date; i >= 1; i--) {
      if (diaries[monthDiariesIndex].diaries[i]?.healths?.length > 0)
        daysInAMonth++;
    }
  }

  let daysInARow = 0;
  let i = date;
  while (true) {
    if (i === 0) {
      _month -= 1;
      if (_month === -1) {
        year -= 1;
        _month = 11;
      }
      month = _month < 9 ? `0${_month + 1}` : _month + 1;
      monthDiariesIndex = diaries.findIndex(
        (item) => item.yearMonth === `${year}-${month}`
      );
    }
    if (monthDiariesIndex === -1) break;
    if (diaries[monthDiariesIndex].diaries[i--]?.healths?.length > 0)
      daysInARow++;
    else break;
  }

  return { daysInAMonth, daysInARow };
}

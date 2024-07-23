const nextDate = (date) => {
  const nextDay = new Date(date); // Create a copy of the date
  nextDay.setDate(date.getDate() + 1); // Increment the day by 1
  return nextDay;
};

const prevDate = (date) => {
  const prevDate = new Date(date);
  prevDate.setDate(date.getDate() - 1);
  return prevDate;
};

export { prevDate, nextDate };

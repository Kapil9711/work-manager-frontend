const monthsOfYear = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const getDayAndDate = (date) => {
  let str = "";

  const dateArr = date?.split("-") || [];
  // let weekDay = dateArr.length ? dateArr[3] : new Date().getDay();
  let year = dateArr.length ? dateArr[2] : new Date().getFullYear();
  let month = dateArr.length ? dateArr[1] - 1 : new Date().getMonth();
  let day = dateArr.length ? dateArr[0] : new Date().getDate();
  str += `${monthsOfYear[month]} ${day} - ${year}`;

  return str;
};

export default getDayAndDate;

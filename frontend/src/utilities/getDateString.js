const getFormatedDateString = (d, m, y) => {
  let date = "";
  if (d < 10) date = 0 + "" + d + "-";
  else date = d + "-";

  if (m < 10) date += 0 + "" + m + "-";
  else date += m + "-";

  date += y;

  return date;
};

export default getFormatedDateString;

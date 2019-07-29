export const dateFormatter = date => {
  let formattedDate = date
    .split("-")
    .reverse()
    .join("/");
  return formattedDate;
};

export const format = (dateToFormatTimeMillis, systemDateTimeMillis) => {
  let todaysDate = new Date(systemDateTimeMillis).toLocaleDateString();
  let inputDate = new Date(dateToFormatTimeMillis).toLocaleDateString();
  return todaysDate === inputDate ? "TODAY" : dateFormatter(inputDate);
};

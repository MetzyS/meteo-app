export function currentDate() {
  const today = new Date();
  const months = "0" + (today.getMonth() + 1);
  const hours = "0" + today.getHours();
  const minutes = "0" + today.getMinutes();
  const fullDate =
    today.getDate() +
    "/" +
    months.slice(-2) +
    "/" +
    today.getFullYear() +
    " " +
    hours.slice(-2) +
    "h" +
    minutes.slice(-2);
  return fullDate;
}

export function datetimeToHour(dt: number) {
  const date = new Date(dt * 1000);
  const hour = date.getHours();
  return hour;
}

export function datetimeToDay(dt: number) {
  const date = new Date(dt * 1000);
  const today = new Date();
  let result;
  if (date.toDateString() === today.toDateString()) {
    result = "Aujourd'hui";
  } else {
    const day = date.getDay();
    const days = [
      "Dimanche",
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
    ];
    result = days[day];
  }

  return result;
}

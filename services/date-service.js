export function nowToHHMM() {
  const d = new Date();
  return `${d.getHours()}:${d
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;
}

export const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

export function dateToDDMM(date) {
  return `${date.getDate().toString().padStart(2, "0")}/${(
    date.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}`;
}

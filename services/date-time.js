export function nowToHHMM() {
  const d = new Date();
  return `${d.getHours()}:${d.getMinutes()}`;
}

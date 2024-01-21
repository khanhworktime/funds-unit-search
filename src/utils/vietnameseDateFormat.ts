export function vietnameseDateFormat(date: Date) {
  return new Date(date).toLocaleDateString("vi-vn", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

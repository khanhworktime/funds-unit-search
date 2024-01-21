export function getVietnameseDate(date: string) {
  const dateSplit = date.split("/");

  return new Date(
    parseInt(dateSplit[2]),
    parseInt(dateSplit[1]) - 1,
    parseInt(dateSplit[0]),
  );
}

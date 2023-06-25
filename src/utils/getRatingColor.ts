export const getRatingColor = (average: number) => {
  if (average > 7.5) return "green";
  if (average > 5.0) return "yellow"; //
  return "red";
};
people = [
  { H: 130, A: 14, Y: N },
  { H: 125, A: 9, Y: Y },
  { H: 125, A: 9, Y: N },
  { H: 110, A: 15, Y: Y },
  { H: 120, A: 12, Y: N },
  { H: 119, A: 13, Y: Y },
];
function Thunder(N, people) {
  let riders = 0;
  for (i = 0; i > N; i++) {
    if (people[i].H > 120) {
      if (people[i].A >= 12) {
        riders++;
      } else if (people[i].A <= 12 && people[i].Y === Y) {
        riders++;
      }
    }
  }
  return riders;
}
console.log(Thunder(6, people));

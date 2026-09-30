function food(N, M, lines) {
  let results = [];
  for (let i = 1; i <= M; i++) {
    let shortest = Math.min(...lines);
    results.push(shortest);

    for (let j = 0; j < N; j++) {
      if (lines[j] === shortest) {
        lines[j]++;
        break;
      }
    }
  }
  return results;
}
console.log(food(5, 3, [2, 2, 3, 3, 3]));

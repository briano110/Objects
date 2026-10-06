function HappyPaca(N, X) {
  let happy = 2;
  let index = [2, 2];
  if ((N + X) % 2 != 0) {
    return -1;
  }
  for (let i = 1; index.length < N; i++) {
    if (happy < X) {
      index.push(index[i]);
      happy++;
    } else index.push(index[i] + 1);
  }

  return index;
}
console.log(HappyPaca(8, 4));

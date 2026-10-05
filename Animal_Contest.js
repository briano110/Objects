function HappyPaca(N, X) {
  let happy = 0;
  let index = [2];

  for (let i = 0; i < N - 1; i++) {
    if (happy < X) {
      index.push(index[i]);
      happy++;
    } else index.push(index[i] + 1);
    index.push(1);
  }

  return index;
}
console.log(HappyPaca(7, 4));

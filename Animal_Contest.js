function HappyPaca(N, X) {
  let happy = [];
  for (let i = 0; i <= N; i++) {
    if ((happy[i] + happy[i + 1]) % 2 === 0) {
      happy.push(i + 1);
    }
  for (let i = 1; i <= N; i++) {
  }
}
console.log(HappyPaca(2, 2));

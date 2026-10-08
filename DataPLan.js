function Data(X, N, monthly) {
  let og = X;
  for (let i = 0; i < N; i++) {
    X = X - monthly[i] + og;
  }

  return X;
}
console.log(Data(15, 3, [15, 10, 20]));

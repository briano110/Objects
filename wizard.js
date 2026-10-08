function Duals(X, N, duals) {
  let wizards = [X];
  let users = 1;
  for (let i = 0; i < N; i++) {
    if (duals[i * 2 + 1] === X) {
      X = duals[i * 2];

      if (!wizards.includes(X)) {
        users++;
      }
      wizards.push(X);
    }
  }
  return X + `\n` + users;
}
console.log(Duals(`A`, 3, [`B`, `A`, `C`, `B`, `D`, `A`]));
console.log(Duals(`N`, 5, [`D`, `A`, `N`, `B`, `B`, `A`, `C`, `D`, `F`, `A`]));
console.log(Duals(`X`, 4, [`A`, `X`, `B`, `X`, `X`, `A`, `D`, `A`]));

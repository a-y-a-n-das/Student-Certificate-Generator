let n = 9; s = "";

for (let i = 1; i <= n; i++) {

  for (let j = n - i; j > 0; j--) {
    s += " ";
  }

  for (let k = 1; k <= 2 * i - 1; k++) {

    s += " * ";
  }
  s += "\n";
}
for (let i = 1; i < n; i++) {
  for (let l = 0; l < i; l++) {
    s += " ";
  }

  for (let p = 2 * (n - i); p > 1; p--) {
    s += " * ";
  }
  s += "\n"

}
console.log(s);

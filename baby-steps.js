
function somme() {
    let num = process.argv.slice(2);
  let add = 0;
  for (let i of num) {
    if (Math.abs(i) >= 0) {
      add += Number(i);
    } else i++;
  }
  return add;
}

console.log(somme());
